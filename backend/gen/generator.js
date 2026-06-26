const fs = require('fs');
const path = require('path');
const articlesPath = path.join(__dirname, '../articles/articles.json');

const articleTemplates = [
  {
    category: 'ChatGPT',
    title: (n) => `ChatGPT ${n}个实用Prompt技巧，提升工作效率`,
    keywords: () => 'ChatGPT,Prompt技巧,AI提示词,工作效率',
    content: () => {
      const tips = [
        { t: '角色扮演法：让AI扮演特定角色', d: '在Prompt开头设定角色，例如"你是一名资深律师""你是一位营销专家"，能让AI的输出更专业、更有针对性。' },
        { t: '分步骤提问法', d: '复杂任务拆分成多个小步骤，逐步提问而不是一次性要求全部完成。这样AI的回答会更准确、更完整。' },
        { t: '提供示例法', d: '在提问时给出1-2个示例，告诉AI你期望的输出格式和风格。AI的模仿能力很强，好的示例能显著提升输出质量。' },
        { t: '限制范围法', d: '明确告诉AI回答的字数范围、格式要求、专业程度等限制条件，避免答案过于宽泛或偏离主题。' },
        { t: '迭代优化法', d: '第一次生成的答案可能不够好，让AI基于已有结果进行修改、扩写或精简，逐步逼近理想效果。' },
        { t: '结构化输出法', d: '要求AI用Markdown、表格、列表等结构化格式输出，便于阅读和后续处理。' },
        { t: '反向思维法', d: '问AI"不应该怎么做"或"常见的错误是什么"，从反面角度获取更有价值的见解。' },
        { t: '多重视角法', d: '要求AI从不同角度分析同一问题，获得全面的视角。例如"从技术角度和商业角度分别分析"。' },
      ];
      const selected = tips.sort(() => Math.random() - 0.5).slice(0, 5 + Math.floor(Math.random() * 3));
      return [
        `ChatGPT已经成为全球最热门的AI工具之一。但很多人只是简单地问问题，没有充分发挥它的潜力。本文将分享多个实用的Prompt技巧，帮你把ChatGPT用得更高效。`,
        `## 为什么Prompt技巧很重要？`,
        `同样的ChatGPT，不同人用出来的效果天差地别。关键就在于Prompt（提示词）的质量。一个好的Prompt能让AI理解你的真实需求，给出高质量的答案。`,
        `## 核心技巧`,
        ...selected.flatMap(t => [`### ${t.t}`, t.d]),
        `## 进阶技巧：组合使用`,
        `以上技巧可以组合使用，效果更佳。例如：角色扮演法 + 分步骤提问法 + 结构化输出法，让AI先扮演某个角色，分步骤回答问题，最后用表格形式输出。`,
        `## 总结`,
        `掌握Prompt技巧，就是掌握与AI高效沟通的能力。这些技巧不仅适用于ChatGPT，也适用于Claude、Gemini等其他AI工具。多加练习，你也能成为Prompt高手。`,
        `<p style="color:#999;font-size:0.9em;margin-top:30px">* 本文由AI辅助生成，仅供参考和学习使用</p>`
      ];
    }
  },
  {
    category: 'AI绘图',
    title: (n) => `Midjourney完全指南：从入门到精通（2026版）`,
    keywords: () => 'Midjourney,AI绘图,Midjourney教程,AI绘画',
    content: () => {
      const features = [
        { t: '提示词结构', d: 'Midjourney的提示词通常包含：主体描述 + 环境/背景 + 风格/艺术家 + 参数设定。例如"a cat wearing a hat, cyberpunk style, neon lights --ar 16:9 --v 6"' },
        { t: '常用参数', d: '--ar 调整宽高比（如16:9, 4:3, 1:1），--v 选择版本（v6为最新），--s 控制风格化程度（0-1000），--iw 控制图片权重。' },
        { t: '风格参考', d: '使用 --sref 参数可以上传参考图片，让AI模仿指定风格。也可以使用艺术家名字作为风格指引，如"in the style of Studio Ghibli"。' },
        { t: '图片混合', d: '使用 /blend 命令或 --image 参数混合多张图片，创造出全新的视觉效果。' },
        { t: '局部重绘', d: '使用 Vary Region 功能选定图片中的特定区域进行重绘，修改细节而不影响整体构图。' },
        { t: '角色一致性', d: '使用 --cref 参数让同一角色在不同场景中保持外观一致，适合漫画、故事板等需要连贯角色的场景。' },
        { t: '排版与文字', d: 'Midjourney v6改进了文字渲染能力，可以在提示词中加入文字描述，生成带有标题或标签的图片。' },
        { t: '图生图', d: '上传现有图片作为起点，AI在此基础上进行变体和优化，适合快速迭代设计方案。' },
      ];
      const selected = features.sort(() => Math.random() - 0.5).slice(0, 5 + Math.floor(Math.random() * 3));
      return [
        `Midjourney是目前最强大的AI绘图工具之一。无论你是设计师、创作者还是普通爱好者，掌握Midjourney都能让创意表达变得前所未有的简单。`,
        `## 什么是Midjourney？`,
        `Midjourney是一款基于Discord的AI图像生成工具。用户通过输入文字描述（Prompt），AI就能生成对应的图片。从写实照片到卡通风格，从插画到3D渲染，Midjourney几乎可以胜任任何视觉风格。`,
        `## 如何开始使用？`,
        `1. 注册Discord账号\n2. 加入Midjourney官方服务器\n3. 订阅套餐（基础版$10/月起）\n4. 在任何频道输入 /imagine 开始生成`,
        `## 核心功能详解`,
        ...selected.flatMap(t => [`### ${t.t}`, t.d]),
        `## 实用技巧`,
        `- 使用"4K, highly detailed, photorealistic"等关键词提升画质\n- 多尝试不同风格的组合，会有意想不到的惊喜\n- 生成后使用Upscale功能提升分辨率\n- 善用Seed值保持风格一致性`,
        `## 总结`,
        `Midjourney正在改变创意工作的方式。掌握它，就是掌握未来的视觉表达能力。从今天开始，动手试试吧！`,
        `<p style="color:#999;font-size:0.9em;margin-top:30px">* 本文由AI辅助生成，仅供参考和学习使用</p>`
      ];
    }
  },
  {
    category: 'AI工具',
    title: (n) => `${n}款2026年最好用的免费AI工具推荐`,
    keywords: () => 'AI工具推荐,免费AI工具,AI productivity tools,AI应用',
    content: () => {
      const tools = [
        { t: 'Stable Diffusion 3', d: '开源的AI绘图工具，完全免费，可本地运行。生成质量大幅提升，支持文字渲染。' },
        { t: 'Google Gemini', d: 'Google的多模态AI，支持文本、图片、音频、视频分析。免费版功能强大，性价比极高。' },
        { t: 'Claude 4', d: 'Anthropic推出的最强AI模型，在编程、写作、分析方面表现出色，免费版每日有使用限制。' },
        { t: 'GitHub Copilot', d: 'AI编程助手，支持VS Code、JetBrains等主流IDE。免费版对学生和开源项目开放。' },
        { t: 'Perplexity AI', d: 'AI搜索引擎，提供带引用的实时答案。免费版即可使用Claude和GPT-4模型。' },
        { t: 'Canva AI', d: '在线设计工具集成了多项AI功能，包括AI生图、文字转设计、背景移除等。' },
        { t: 'Notion AI', d: '笔记和项目管理工具内置AI助手，可辅助写作、翻译、总结。' },
        { t: 'Runway ML', d: 'AI视频编辑平台，支持文字生成视频、视频风格迁移等高级功能。' },
      ];
      const selection = tools.sort(() => Math.random() - 0.5).slice(0, 6);
      return [
        `2026年AI工具已经渗透到各个领域。本文将为你推荐最实用的免费AI工具，涵盖写作、绘图、编程、视频等多个类别。`,
        `## 为什么选择免费AI工具？`,
        `大多数AI工具都有免费套餐，足够日常使用。在投入付费之前，先用免费工具体验和评估，选择最适合自己的工具。`,
        `## 工具推荐`,
        ...selection.flatMap(t => [`### ${t.t}`, t.d]),
        `## 如何选择适合自己的工具？`,
        `根据你的需求来选择：\n- 需要写作辅助：Claude 4、Notion AI\n- 需要图片生成：Stable Diffusion 3、Canva AI\n- 需要编程帮助：GitHub Copilot、Perplexity AI\n- 需要视频编辑：Runway ML`,
        `## 总结`,
        `2026年的免费AI工具已经足够强大，关键是找到适合你工作流的工具组合。建议从1-2个工具开始，逐步扩展到完整的AI工具链。`,
        `<p style="color:#999;font-size:0.9em;margin-top:30px">* 本文由AI辅助生成，仅供参考和学习使用</p>`
      ];
    }
  },
  {
    category: 'AI编程',
    title: (n) => `AI编程助手深度对比：Cursor vs Copilot vs Codeium`,
    summary: () => '全面对比三大AI编程助手的功能、价格和实际表现',
    keywords: () => 'AI编程,Cursor,Copilot,Codeium,AI代码辅助,编程效率',
    content: () => {
      return [
        `AI编程助手正在改变软件开发的方式。本文将从功能、价格、实际表现三个维度，深度对比目前最主流的三大AI编程助手。`,
        `## Cursor`,
        `Cursor是基于VS Code的AI代码编辑器，集成了最先进的AI编程功能。`,
        `**核心功能：**\n- Composer：多文件编辑，理解整个项目上下文\n- Tab补全：代码自动补全，速度极快\n- Chat：内置聊天窗口，可引用代码库\n- Agent：自主编程模式，能独立完成任务`,
        `**价格：** Pro $20/月，免费版每天200次补全`,
        `**优势：** 对项目整体理解能力最强，Composer功能非常强大`,
        `**劣势：** 不能使用VS Code的全部扩展，学习曲线较陡`,
        ``,
        `## GitHub Copilot`,
        `微软和GitHub推出的AI编程助手，是目前用户量最大的编程AI工具。`,
        `**核心功能：**\n- 代码补全：支持几乎所有编程语言\n- Copilot Chat：VS Code、JetBrains等IDE内置的AI聊天\n- Copilot Workspace：项目级AI辅助`,
        `**价格：** $10/月或$100/年，学生和开源维护者免费`,
        `**优势：** IDE集成最好，支持最广泛的语言和框架`,
        `**劣势：** 代码补全质量有时不如Cursor`,
        ``,
        `## Codeium`,
        `免费开源的AI编程助手，是Copilot的优秀替代品。`,
        `**核心功能：**\n- 代码补全：支持超过40种编程语言\n- Chat：内置AI聊天\n- 搜索：AI驱动的代码搜索`,
        `**价格：** 个人开发者完全免费`,
        `**优势：** 完全免费，功能不输付费产品`,
        `**劣势：** 对大型项目的理解能力较弱`,
        ``,
        `## 对比总结`,
        `| 工具 | 价格 | 代码补全 | 项目理解 | IDE支持 |\n|------|------|---------|---------|--------|\n| Cursor | $20/月 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 中等 |\n| Copilot | $10/月 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 广泛 |\n| Codeium | 免费 | ⭐⭐⭐⭐ | ⭐⭐⭐ | 广泛 |`,
        `## 推荐`,
        `- 预算充足且追求最强功能 → 选Cursor\n- 需要广泛IDE支持 → 选Copilot\n- 零预算 → 选Codeium`,
        `## 总结`,
        `AI编程助手已经可以显著提升开发效率。不管你选择哪个工具，都比完全不用AI要高效得多。`,
        `<p style="color:#999;font-size:0.9em;margin-top:30px">* 本文由AI辅助生成，仅供参考和学习使用</p>`
      ];
    }
  },
  {
    category: 'AI赚钱',
    title: (n) => `普通人用AI赚钱的${n}个真实方法（2026实测）`,
    keywords: () => 'AI赚钱,副业,AI自动化,被动收入',
    content: () => {
      const methods = [
        { t: 'AI自动化服务', d: '为企业搭建AI自动化工作流，如客服机器人、数据自动录入、报表自动生成。月收费$500-$3000。' },
        { t: 'AI内容创作', d: '用AI批量生成SEO文章、小红书笔记、短视频脚本。接单平台时薪$30-100。' },
        { t: 'AI课程/教程', d: '将你掌握的AI技能制作成课程，在Udemy、知识付费平台出售。一份课程可卖无数次。' },
        { t: 'AI工具评测', d: '建立AI工具评测博客/YouTube频道，通过联盟营销赚佣金。热门工具每单佣金$50-200。' },
        { t: 'AI绘画接单', d: '用Midjourney、Stable Diffusion接单制作头像、插画、海报。单价$10-500不等。' },
        { t: 'AI提示词贩卖', d: '将高质量的AI提示词整理成包出售。好的提示词市场价$5-50一套。' },
        { t: 'AI翻译服务', d: '用AI做初步翻译，人工润色后交付。效率提高5倍，时薪可达$50-150。' },
        { t: '数据分析AI代理', d: '帮小企业用AI分析销售数据、客户数据，提供洞察报告。每单$200-2000。' },
      ];
      const selected = methods.sort(() => Math.random() - 0.5).slice(0, 5);
      return [
        `2026年，AI不再是概念，而是普通人赚钱的利器。本文将分享经过真实验证的AI赚钱方法，不需要技术背景，拿来就能用。`,
        `## AI赚钱的核心逻辑`,
        `AI的核心价值是降低成本和提升效率。赚钱的思路就是：用AI降低你的成本，或者帮别人降低成本，然后收取费用。`,
        `## 真实方法`,
        ...selected.flatMap(t => [`### ${t.t}`, t.d]),
        `## 新手建议`,
        `不要急着做选择，先试水1-2个方向。比如先用AI做内容创作接1-2单，再用赚到的钱去尝试自动化服务方向。`,
        `## 总结`,
        `AI赚钱的门槛比大多数人想象的要低。关键是先动手，不要等"准备好"。从一个小单开始，逐步扩大。`,
        `<p style="color:#999;font-size:0.9em;margin-top:30px">* 本文由AI辅助生成，仅供参考和学习使用</p>`
      ];
    }
  },
  {
    category: 'Claude',
    title: (n) => `Claude 4深度评测：比ChatGPT强在哪？`,
    keywords: () => 'Claude 4,AI评测,ChatGPT对比,Anthropic',
    content: () => {
      return [
        `Anthropic在2026年推出的Claude 4引起了广泛关注。本文将从多个角度深度评测Claude 4，并与ChatGPT进行对比。`,
        `## Claude 4的核心升级`,
        `- **更长上下文**：支持200K tokens，可以一次处理一本书\n- **更强的推理能力**：在数学、编程、逻辑推理方面大幅提升\n- **多模态**：支持图片、文档分析\n- **Agent能力**：可以自主完成复杂任务`,
        `## Claude 4 vs ChatGPT 对比`,
        `| 维度 | Claude 4 | ChatGPT (GPT-4) |\n|------|---------|----------------|\n| 上下文长度 | 200K | 128K |\n| 编程能力 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |\n| 写作质量 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |\n| 推理能力 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |\n| 多模态 | 图文分析 | 图文+语音 |\n| 价格 | $20/月 | $20/月 |`,
        `## Claude 4的独特优势`,
        `### 编程能力强`,
        `在编程任务中，Claude 4表现出色。特别是在理解复杂代码库、重构代码、编写测试方面，很多开发者反馈Claude 4比ChatGPT更可靠。`,
        `### 写作更自然`,
        `Claude 4的写作风格更加自然流畅，特别是在中文写作方面，比ChatGPT更地道。长文章的tone一致性也更好。`,
        `### 安全性更高`,
        `Anthropic一直将AI安全作为核心。Claude 4在有害内容过滤、偏见控制方面做得更好。`,
        `## Claude 4的不足`,
        `- 插件生态不如ChatGPT丰富\n- 实时信息检索能力较弱\n- 语音功能尚未支持`,
        `## 总结`,
        `Claude 4是当前综合实力最强的AI模型之一。如果你主要用AI做编程、写作、分析，Claude 4可能是比ChatGPT更好的选择。`,
        `<p style="color:#999;font-size:0.9em;margin-top:30px">* 本文由AI辅助生成，仅供参考和学习使用</p>`
      ];
    }
  },
];

function generateArticle(index) {
  const template = articleTemplates[index % articleTemplates.length];
  const n = 5 + Math.floor(Math.random() * 10);
  const id = template.title(n).toLowerCase()
    .replace(/[：:]/g, '-').replace(/[？?，,。.!！\s]+/g, '-').replace(/[^\w\u4e00-\u9fff-]/g, '').slice(0, 60);

  return {
    id: id + '-' + Date.now().toString(36),
    title: template.title(n),
    summary: template.summary ? template.summary() : template.content()[0].slice(0, 100) + '...',
    keywords: template.keywords(),
    category: template.category,
    content: template.content(),
    relatedTools: [],
    date: new Date().toISOString().split('T')[0]
  };
}

function generateBatch(count) {
  const articles = JSON.parse(fs.readFileSync(articlesPath, 'utf-8'));
  for (let i = 0; i < count; i++) {
    const article = generateArticle(articles.length + i);
    articles.push(article);
  }
  fs.writeFileSync(articlesPath, JSON.stringify(articles, null, 2), 'utf-8');
  console.log(`已生成 ${count} 篇文章，共 ${articles.length} 篇`);
}

function generateDaily() {
  const articles = JSON.parse(fs.readFileSync(articlesPath, 'utf-8'));
  const article = generateArticle(articles.length);
  articles.push(article);
  fs.writeFileSync(articlesPath, JSON.stringify(articles, null, 2), 'utf-8');
  console.log(`[${article.date}] 已发布: ${article.title}`);
}

if (require.main === module) {
  const count = parseInt(process.argv[2]) || 1;
  generateBatch(count);
}

module.exports = { generateDaily, generateBatch };
