const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4567;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

const stripeKey = process.env.STRIPE_SECRET_KEY || null;
let stripe = null;
if (stripeKey) {
  stripe = require('stripe')(stripeKey);
}

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

const orders = {};

app.post('/api/create-order', async (req, res) => {
  const { toolId } = req.body;
  const tool = tools.find(t => t.id === toolId);
  if (!tool || !tool.pro) return res.status(400).json({ error: '无效的工具' });

  const orderId = uuidv4().slice(0, 8);
  const amount = tool.price;

  if (stripe) {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
          price_data: {
            currency: 'usd',
            product_data: { name: tool.name },
            unit_amount: amount * 100,
          },
          quantity: 1,
        }],
        mode: 'payment',
        success_url: `${req.headers.origin}/pay-success.html?order=${orderId}&tool=${toolId}`,
        cancel_url: `${req.headers.origin}/tool.html?id=${toolId}`,
      });
      orders[orderId] = { toolId, amount, paid: false, sessionId: session.id };
      res.json({ orderId, url: session.url, amount });
    } catch (e) {
      orders[orderId] = { toolId, amount, paid: false };
      res.json({ orderId, url: null, amount, note: 'stripe未配置，模拟订单' });
    }
  } else {
    orders[orderId] = { toolId, amount, paid: false };
    res.json({ orderId, url: null, amount, note: '演示模式：订单已创建' });
  }
});

app.post('/api/verify-payment', (req, res) => {
  const { orderId } = req.body;
  const order = orders[orderId];
  if (!order) return res.status(404).json({ error: '订单不存在' });
  const paid = true;
  order.paid = paid;
  res.json({ paid, toolId: order.toolId });
});

app.get('/api/tool-access/:toolId/:orderId', (req, res) => {
  const { toolId, orderId } = req.params;
  const order = orders[orderId];
  if (order && order.paid && order.toolId === toolId) {
    return res.json({ access: true });
  }
  res.json({ access: false });
});

app.listen(PORT, () => {
  console.log(`工具箱API已启动: http://localhost:${PORT}`);
});
