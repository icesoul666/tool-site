const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 4567;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

const articlesPath = path.join(__dirname, 'articles', 'articles.json');

function loadArticles() {
  try {
    return JSON.parse(fs.readFileSync(articlesPath, 'utf-8'));
  } catch (e) {
    return [];
  }
}

app.get('/api/articles', (req, res) => {
  const articles = loadArticles();
  const { category, page = 1, limit = 20 } = req.query;
  let filtered = articles;
  if (category) filtered = filtered.filter(a => a.category === category);
  const total = filtered.length;
  const p = parseInt(page);
  const l = parseInt(limit);
  filtered = filtered.slice((p - 1) * l, p * l);
  res.json({ articles: filtered, total, page: p, totalPages: Math.ceil(total / l) });
});

app.get('/api/articles/:id', (req, res) => {
  const articles = loadArticles();
  const article = articles.find(a => a.id === req.params.id);
  if (!article) return res.status(404).json({ error: 'Article not found' });
  res.json({ article });
});

app.get('/api/categories', (req, res) => {
  const articles = loadArticles();
  const cats = [...new Set(articles.map(a => a.category))];
  const counts = cats.map(c => ({ category: c, count: articles.filter(a => a.category === c).length }));
  res.json({ categories: counts });
});

app.get('/api/featured', (req, res) => {
  const articles = loadArticles();
  const sorted = [...articles].sort(() => Math.random() - 0.5).slice(0, 6);
  res.json({ articles: sorted });
});

function handleGen(count) {
  const gen = require('./gen/generator');
  gen.generateBatch(count);
  return loadArticles().length;
}

app.get('/api/gen', (req, res) => {
  try {
    const count = parseInt(req.query.count) || 2;
    const total = handleGen(count);
    res.json({ generated: count, total });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/gen', (req, res) => {
  try {
    const count = req.body.count || 2;
    const total = handleGen(count);
    res.json({ generated: count, total });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/sitemap.xml', (req, res) => {
  const articles = loadArticles();
  const baseUrl = `https://${req.get('host')}`;
  const categories = [...new Set(articles.map(a => a.category))];
  const urls = [
    { loc: baseUrl + '/', priority: '1.0' },
    { loc: baseUrl + '/blog/index.html', priority: '0.9' },
    ...categories.map(c => ({ loc: `${baseUrl}/category.html?cat=${encodeURIComponent(c)}`, priority: '0.8' })),
    ...articles.map(a => ({ loc: `${baseUrl}/blog/article.html?id=${a.id}`, priority: '0.6', lastmod: a.date }))
  ];
  res.set('Content-Type', 'application/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(u => `<url><loc>${u.loc}</loc><priority>${u.priority}</priority>${u.lastmod ? '<lastmod>' + u.lastmod + '</lastmod>' : ''}</url>`).join('\n  ')}
</urlset>`);
});

app.get('/robots.txt', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send(`User-agent: *
Allow: /
Sitemap: https://${req.get('host')}/sitemap.xml`);
});

app.use((err, req, res, next) => {
  console.error('Server error:', err.message);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
