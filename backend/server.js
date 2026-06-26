const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4567;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

const tools = [
  { id: 'image-compressor', name: '图片压缩', desc: '压缩PNG/JPG图片，保持质量', price: 0, pro: false },
  { id: 'image-converter', name: '图片格式转换', desc: 'PNG/JPG/WebP互转', price: 0, pro: false },
  { id: 'qr-generator', name: '二维码生成器', desc: '生成自定义二维码', price: 0, pro: false },
  { id: 'json-formatter', name: 'JSON格式化', desc: '格式化/校验JSON数据', price: 0, pro: false },
  { id: 'text-counter', name: '字数统计', desc: '统计字数/行数/段落', price: 0, pro: false },
  { id: 'pdf-merge', name: 'PDF合并', desc: '合并多个PDF文件', price: 5, pro: true },
  { id: 'pdf-split', name: 'PDF拆分', desc: '拆分PDF为单页', price: 5, pro: true },
  { id: 'bulk-resize', name: '批量缩放图片', desc: '一次处理100张图', price: 10, pro: true },
  { id: 'watermark', name: '图片加水印', desc: '批量给图片加水印', price: 10, pro: true },
  { id: 'seo-analyzer', name: 'SEO分析器', desc: '分析网页SEO优化建议', price: 8, pro: true },
];

app.get('/api/tools', (req, res) => {
  res.json({ tools });
});

app.get('/api/tool/:id', (req, res) => {
  const tool = tools.find(t => t.id === req.params.id);
  if (!tool) return res.status(404).json({ error: '工具不存在' });
  res.json({ tool });
});



const articles = require('./articles/articles.json');

app.get('/api/blog', (req, res) => {
  res.json({ articles });
});

app.get('/api/blog/:id', (req, res) => {
  const article = articles.find(a => a.id === req.params.id);
  if (!article) return res.status(404).json({ error: '文章不存在' });
  res.json({ article });
});

app.get('/sitemap.xml', (req, res) => {
  const baseUrl = `${req.protocol}://${req.get('host')}`;
  const urls = [
    { loc: baseUrl + '/', priority: '1.0' },
    { loc: baseUrl + '/blog/index.html', priority: '0.9' },
    ...tools.map(t => ({ loc: `${baseUrl}/tool.html?id=${t.id}`, priority: t.pro ? '0.7' : '0.8' })),
    ...articles.map(a => ({ loc: `${baseUrl}/blog/article.html?id=${a.id}`, priority: '0.6' }))
  ];
  res.set('Content-Type', 'application/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(u => `<url><loc>${u.loc}</loc><priority>${u.priority}</priority></url>`).join('\n  ')}
</urlset>`);
});

app.get('/robots.txt', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send(`User-agent: *
Allow: /
Sitemap: ${req.protocol}://${req.get('host')}/sitemap.xml`);
});

app.listen(PORT, () => {
  console.log(`工具箱API已启动: http://localhost:${PORT}`);
});
