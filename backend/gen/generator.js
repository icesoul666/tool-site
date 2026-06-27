const fs = require('fs');
const path = require('path');
const articlesPath = path.join(__dirname, '../articles/articles.json');

const categoryImages = {
  'ChatGPT': 'https://picsum.photos/seed/chatgpt/800/400',
  'AI Art': 'https://picsum.photos/seed/aiart/800/400',
  'AI Tools': 'https://picsum.photos/seed/aitools/800/400',
  'AI Coding': 'https://picsum.photos/seed/aicoding/800/400',
  'Make Money': 'https://picsum.photos/seed/makemoney/800/400',
  'Claude': 'https://picsum.photos/seed/claude/800/400',
};

const articleTemplates = [
  {
    category: 'ChatGPT',
    title: (n) => {
      const titles = [
        `${n} Powerful ChatGPT Prompts to Boost Your Productivity in 2026`,
        `ChatGPT Prompt Engineering: ${n} Techniques for Better Results`,
        `Master ChatGPT in 2026: ${n} Advanced Tips You Need to Know`,
        `From Beginner to Pro: ${n} ChatGPT Secrets Revealed`,
        `Get More from ChatGPT: ${n} Prompt Hacks That Actually Work`,
        `ChatGPT for Beginners: ${n} Essential Tips to Get Started`,
        `Supercharge Your Workflow with These ${n} ChatGPT Prompts`,
        `ChatGPT vs Claude: Which AI Assistant Wins in ${n} Categories?`,
        `${n} Creative Ways to Use ChatGPT You Haven't Tried Yet`,
        `The Ultimate ChatGPT Cheat Sheet: ${n} Prompts for Every Task`,
        `ChatGPT for Developers: ${n} Coding Prompts That Save Hours`,
        `Write Better Content with ChatGPT: ${n} Proven Techniques`,
        `ChatGPT for Business: ${n} Ways to Automate and Save Money`,
        `${n} ChatGPT Plugins and Tools You Should Install in 2026`,
        `Stop Wasting Time: ${n} ChatGPT Shortcuts for Power Users`,
      ];
      return titles[Math.floor(Math.random() * titles.length)];
    },
    summary: () => 'Learn powerful ChatGPT prompt engineering techniques to get better AI responses. Covers role play, step-by-step, structured output, and more proven methods.',
    keywords: () => 'ChatGPT, prompts, AI tips, productivity, prompt engineering',
    content: () => {
      const tips = [
        { t: 'Role Play Method', d: 'Start your prompt by assigning a role. Example: "Act as a senior lawyer" or "You are a marketing expert." This dramatically improves output quality and relevance.' },
        { t: 'Step-by-Step Approach', d: 'Break complex tasks into smaller steps rather than asking everything at once. The AI will produce more accurate and complete answers.' },
        { t: 'Provide Examples', d: 'Give the AI 1-2 examples of the format and style you want. AI excels at mimicking patterns, and good examples significantly improve output quality.' },
        { t: 'Set Constraints', d: 'Specify word count, format, tone, and expertise level. This prevents overly broad or off-topic answers.' },
        { t: 'Iterative Refinement', d: 'The first answer isn\'t always perfect. Ask the AI to modify, expand, or simplify based on the initial result.' },
        { t: 'Structured Output', d: 'Ask the AI to format responses using Markdown, tables, or bullet points for better readability and easier processing.' },
        { t: 'Reverse Thinking', d: 'Ask "What should I NOT do?" or "What are common mistakes?" to get valuable insights from a different angle.' },
        { t: 'Multiple Perspectives', d: 'Ask the AI to analyze a problem from different angles, e.g., "Analyze this from both technical and business perspectives."' },
      ];
      const selected = tips.sort(() => Math.random() - 0.5).slice(0, 5 + Math.floor(Math.random() * 3));
      return [
        `ChatGPT has become one of the most popular AI tools worldwide. However, most users only scratch the surface by asking simple questions. This guide reveals powerful prompt techniques to help you get the most out of ChatGPT.`,
        `## Why Prompt Engineering Matters`,
        `The same ChatGPT model can produce vastly different results depending on how you phrase your prompts. Good prompt engineering is the key to unlocking AI's full potential.`,
        `## Core Techniques`,
        ...selected.flatMap(t => [`### ${t.t}`, t.d]),
        `## Advanced: Combining Techniques`,
        `These techniques work even better when combined. For example: Role Play + Step-by-Step + Structured Output — have the AI assume a role, break down the problem, and deliver results in a table format.`,
        `## Common Mistakes to Avoid`,
        `- Using vague prompts like "write something about AI"\n- Not providing enough context or examples\n- Accepting the first answer without iteration\n- Forgetting to set format and tone expectations`,
        `## Ready to Master ChatGPT?`,
        `Start applying these techniques today. The more you practice, the better your results will be.`
      ];
    }
  },
  {
    category: 'AI Art',
    title: (n) => {
      const titles = [
        `Midjourney Complete Guide: From Beginner to Pro (2026 Edition)`,
        `AI Art Mastery: ${n} Midjourney Techniques You Must Know`,
        `Create Stunning AI Art: A Practical Midjourney Tutorial`,
        `Midjourney vs DALL-E vs Stable Diffusion: ${n} Key Differences`,
        `Make Money with AI Art: ${n} Strategies That Work in 2026`,
        `${n} Midjourney Prompt Examples for Beautiful Results`,
        `AI Art for Beginners: How to Generate Your First Image`,
        `Midjourney Advanced: ${n} Pro Tips for Better Images`,
        `Best AI Art Generators Compared: ${n} Tools for Creatives`,
        `How to Create Consistent Characters in Midjourney`,
        `AI Art Style Guide: ${n} Popular Visual Styles Explained`,
        `From Text to Masterpiece: Understanding Midjourney Prompts`,
        `Midjourney v6 New Features: ${n} Things You Need to Know`,
        `AI Art for Social Media: ${n} Ways to Stand Out in 2026`,
        `Troubleshooting Midjourney: ${n} Common Problems Solved`,
      ];
      return titles[Math.floor(Math.random() * titles.length)];
    },
    summary: () => 'Complete Midjourney tutorial covering prompt structure, key parameters, style references, and image blending. Go from beginner to pro in AI art creation.',
    keywords: () => 'Midjourney, AI art, AI image generation, Midjourney tutorial',
    content: () => {
      const features = [
        { t: 'Prompt Structure', d: 'A Midjourney prompt typically includes: Subject description + Environment/Background + Style/Artist + Parameters. Example: "a cat wearing a hat, cyberpunk style, neon lights --ar 16:9 --v 6"' },
        { t: 'Key Parameters', d: '--ar sets aspect ratio (16:9, 4:3, 1:1), --v selects version (v6 is latest), --s controls stylization (0-1000), --iw controls image weight.' },
        { t: 'Style References', d: 'Use --sref to upload reference images for style replication. You can also use artist names like "in the style of Studio Ghibli" for stylistic guidance.' },
        { t: 'Image Blending', d: 'Use the /blend command or --image parameter to mix multiple images and create entirely new visuals.' },
        { t: 'Local Editing', d: 'Use Vary Region to edit specific areas of an image without affecting the overall composition.' },
        { t: 'Character Consistency', d: 'Use --cref to keep the same character consistent across different scenes — perfect for comics and storyboards.' },
        { t: 'Text in Images', d: 'Midjourney v6 improved text rendering. You can include text descriptions in prompts to generate images with labels or titles.' },
        { t: 'Image to Image', d: 'Upload existing images as a starting point for AI variations and optimizations — ideal for rapid design iteration.' },
      ];
      const selected = features.sort(() => Math.random() - 0.5).slice(0, 5 + Math.floor(Math.random() * 3));
      return [
        `Midjourney is one of the most powerful AI art tools available. Whether you're a designer, creator, or hobbyist, mastering Midjourney makes creative expression easier than ever.`,
        `## What is Midjourney?`,
        `Midjourney is an AI image generator that runs on Discord. Users input text descriptions (prompts), and the AI generates corresponding images — from photorealistic photos to cartoon styles, illustrations, and 3D renders.`,
        `## Getting Started`,
        `1. Create a Discord account\n2. Join the Midjourney official server\n3. Subscribe (Basic plan starts at $10/month)\n4. Type /imagine in any channel to start generating`,
        `## Key Features`,
        ...selected.flatMap(t => [`### ${t.t}`, t.d]),
        `## Pro Tips`,
        `- Use "4K, highly detailed, photorealistic" keywords for better quality\n- Experiment with different style combinations\n- Use the Upscale feature for higher resolution\n- Leverage Seed values for style consistency`,
        `## Common Beginner Mistakes`,
        `- Overloading prompts with too many conflicting styles\n- Ignoring aspect ratio parameters\n- Not using seed values for consistency\n- Expecting perfect results on the first try`,
        `## Ready to Create?`,
        `Start with the free tier and experiment with different prompts. Practice is the fastest way to master AI art.`
      ];
    }
  },
  {
    category: 'AI Tools',
    title: (n) => {
      const titles = [
        `Top ${n} Free AI Tools You Should Use in 2026`,
        `Best Free AI Tools for Productivity: ${n} Picks for 2026`,
        `${n} AI Tools That Will Transform Your Workflow This Year`,
        `Ultimate AI Toolkit: ${n} Free Resources for Every Task`,
        `Hidden Gems: ${n} Underrated Free AI Tools Worth Trying`,
        `AI Tools for Students: ${n} Free Resources for Better Grades`,
        `Productivity Boost: ${n} AI Tools That Save You Hours Daily`,
        `Best Free Alternatives to Paid AI Tools: ${n} Options`,
        `AI Writing Tools Compared: ${n} Best Options for 2026`,
        `AI Video Tools: ${n} Free Generators and Editors to Try`,
        `AI Music and Audio Tools: ${n} Free Options for Creators`,
        `Browser Extensions: ${n} Must-Have AI Tools for Chrome`,
        `Mobile AI Apps: ${n} Best Free Tools for iOS and Android`,
        `AI for Designers: ${n} Tools That Speed Up Your Workflow`,
        `New AI Tools in 2026: ${n} Releases You Should Know About`,
      ];
      return titles[Math.floor(Math.random() * titles.length)];
    },
    summary: () => 'Discover the best free AI tools in 2026 including Claude 4, Google Gemini, Stable Diffusion 3, and more. Practical guide to AI-powered productivity.',
    keywords: () => 'AI tools, free AI tools, productivity, AI applications',
    content: () => {
      const tools = [
        { t: 'Stable Diffusion 3', d: 'Open-source AI art generator, completely free, runs locally. Significantly improved quality with better text rendering.' },
        { t: 'Google Gemini', d: 'Google\'s multimodal AI supporting text, images, audio, and video analysis. The free tier is remarkably capable.' },
        { t: 'Claude 4', d: 'Anthropic\'s most powerful AI model. Excels at coding, writing, and analysis. Free tier available with daily usage limits.' },
        { t: 'GitHub Copilot', d: 'AI coding assistant supporting VS Code, JetBrains, and other IDEs. Free for students and open-source projects.' },
        { t: 'Perplexity AI', d: 'AI search engine providing real-time answers with citations. Free tier includes Claude and GPT-4 models.' },
        { t: 'Canva AI', d: 'Online design platform with integrated AI features including AI image generation, text-to-design, and background removal.' },
        { t: 'Notion AI', d: 'Note-taking and project management tool with built-in AI for writing assistance, translation, and summarization.' },
        { t: 'Runway ML', d: 'AI video editing platform supporting text-to-video generation and video style transfer.' },
      ];
      const selection = tools.sort(() => Math.random() - 0.5).slice(0, 6);
      return [
        `AI tools have become essential in 2026. This guide covers the most practical free AI tools across writing, design, coding, and video categories.`,
        `## Why Choose Free AI Tools?`,
        `Most AI tools offer generous free tiers sufficient for daily use. Try before you buy — experiment with free versions to find what works best for your workflow.`,
        `## Top Recommendations`,
        ...selection.flatMap(t => [`### ${t.t}`, t.d]),
        `## How to Choose`,
        `Match tools to your needs:\n- Writing: Claude 4, Notion AI\n- Image generation: Stable Diffusion 3, Canva AI\n- Coding: GitHub Copilot, Perplexity AI\n- Video editing: Runway ML`,
        `## Start Exploring`,
        `Most of these tools offer free trials. Pick one that fits your needs and start exploring today.`
      ];
    }
  },
  {
    category: 'AI Coding',
    title: (n) => {
      const titles = [
        `AI Coding Assistants Compared: Cursor vs Copilot vs Codeium (2026)`,
        `Best AI Coding Tools: ${n} Must-Have Assistants for Developers`,
        `Speed Up Development: ${n} AI Coding Solutions Compared`,
        `From Idea to Code: Top ${n} AI Programming Assistants Review`,
        `Which AI Coding Tool is Right for You? ${n} Options Compared`,
        `AI for Programmers: ${n} Tools That Write Code for You`,
        `Cursor IDE Review: ${n} Features That Make It Better Than VS Code`,
        `GitHub Copilot Tips: ${n} Ways to Get Better Code Suggestions`,
        `Free AI Coding Tools: ${n} Options That Don't Cost a Penny`,
        `AI Code Review: ${n} Tools That Find Bugs Before You Do`,
        `AI for Web Development: ${n} Tools to Build Faster in 2026`,
        `AI for Data Science: ${n} Must-Have Tools for Analysts`,
        `AI Code Generation: ${n} Prompts for Writing Complex Functions`,
        `Debugging with AI: ${n} Tools That Fix Your Code Automatically`,
        `AI and DevOps: ${n} Tools for Automating Deployments`,
      ];
      return titles[Math.floor(Math.random() * titles.length)];
    },
    summary: () => 'Detailed comparison of Cursor, GitHub Copilot, and Codeium AI coding assistants. Find the best tool for your development workflow and budget.',
    keywords: () => 'AI coding, Cursor, Copilot, Codeium, programming, code assistant',
    content: () => [
        `AI coding assistants are transforming software development. This in-depth comparison covers the three most popular tools across features, pricing, and real-world performance.`,
        `## Cursor`,
        `Cursor is an AI-first code editor built on VS Code, integrating the most advanced AI coding features.`,
        `**Key Features:**\n- Composer: Multi-file editing with full project context\n- Tab Completion: Lightning-fast code autocomplete\n- Chat: Built-in chat that references your codebase\n- Agent: Autonomous coding mode`,
        `**Pricing:** Pro $20/month, Free tier with 200 completions/day`,
        `**Pros:** Best project-level understanding, powerful Composer feature`,
        `**Cons:** Doesn't support all VS Code extensions, steeper learning curve`,
        ``,
        `## GitHub Copilot`,
        `Microsoft and GitHub's AI coding assistant — the most widely adopted programming AI tool.`,
        `**Key Features:**\n- Code completion: Supports virtually all programming languages\n- Copilot Chat: Built-in AI chat in VS Code, JetBrains, and more\n- Copilot Workspace: Project-level AI assistance`,
        `**Pricing:** $10/month or $100/year, free for students and open-source maintainers`,
        `**Pros:** Best IDE integration, widest language support`,
        `**Cons:** Completion quality sometimes trails Cursor`,
        ``,
        `## Codeium`,
        `Free and open-source AI coding assistant — an excellent Copilot alternative.`,
        `**Key Features:**\n- Code completion: Supports 40+ programming languages\n- Chat: Built-in AI chat\n- Search: AI-powered code search`,
        `**Pricing:** Completely free for individual developers`,
        `**Pros:** Free with competitive features`,
        `**Cons:** Weaker project-level understanding`,
        ``,
        `## Comparison Table`,
        `| Tool | Price | Completions | Project Understanding | IDE Support |\n|------|-------|------------|---------------------|-------------|\n| Cursor | $20/mo | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Medium |\n| Copilot | $10/mo | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Broad |\n| Codeium | Free | ⭐⭐⭐⭐ | ⭐⭐⭐ | Broad |`,
        `## Recommendations`,
        `- Best overall → Cursor\n- Best IDE support → Copilot\n- Best free option → Codeium`,
        `## Try Them Yourself`,
        `All three tools offer free tiers. Try each one for a week to find the best fit for your workflow.`
      ]
  },
  {
    category: 'Make Money',
    title: (n) => {
      const titles = [
        `${n} Proven Ways to Make Money with AI in 2026`,
        `Passive Income with AI: ${n} Strategies That Generate Real Money`,
        `AI Side Hustles: ${n} Ways to Earn Extra Cash This Year`,
        `Build an AI Business: ${n} Profitable Ideas for Beginners`,
        `From $0 to Income: ${n} AI Money-Making Methods That Work`,
        `AI Freelancing: ${n} High-Paying Skills You Can Learn Today`,
        `Sell AI-Generated Products: ${n} Profitable Ideas to Start`,
        `AI Affiliate Marketing: ${n} Programs That Pay Well`,
        `Start an AI Agency: ${n} Steps to Land Your First Client`,
        `Make Money with AI Art: ${n} Platforms That Pay Creators`,
        `AI Content Creation: ${n} Ways to Monetize Your Writing`,
        `AI Consulting: How to Charge $200/Hour for AI Expertise`,
        `Build and Sell AI Tools: ${n} Low-Code Ideas for Beginners`,
        `AI Courses and Digital Products: ${n} Profitable Niches`,
        `Automate Your Income: ${n} AI Tools That Work While You Sleep`,
      ];
      return titles[Math.floor(Math.random() * titles.length)];
    },
    summary: () => 'Proven methods to make money with AI in 2026 including automation agency, content creation, AI art commissions, and prompt pack sales.',
    keywords: () => 'make money with AI, side hustle, passive income, AI automation',
    content: () => {
      const methods = [
        { t: 'AI Automation Agency', d: 'Build AI automation workflows for businesses — chatbots, data entry automation, report generation. Charge $500-$3,000/month per client.' },
        { t: 'AI Content Creation', d: 'Use AI to generate SEO articles, social media posts, and video scripts. Freelance rates range from $30-$100/hour.' },
        { t: 'AI Courses & Tutorials', d: 'Package your AI skills into online courses on Udemy or Skillshare. Create once, sell forever.' },
        { t: 'AI Tool Reviews', d: 'Start an AI tool review blog or YouTube channel using affiliate marketing. Top tools pay $50-$200 per referral.' },
        { t: 'AI Art Commissions', d: 'Use Midjourney or Stable Diffusion to create custom art, avatars, and illustrations. Charge $10-$500 per piece.' },
        { t: 'AI Prompt Packs', d: 'Sell high-quality prompt templates as digital products. Good prompt packs sell for $5-$50 each.' },
        { t: 'AI Translation Services', d: 'Use AI for initial translation with human polish. 5x faster than traditional translation, earning $50-$150/hour.' },
        { t: 'AI Data Analysis', d: 'Help small businesses analyze sales data and customer insights using AI. Charge $200-$2,000 per project.' },
      ];
      const selected = methods.sort(() => Math.random() - 0.5).slice(0, 5);
      return [
        `AI isn't just a technology — it's a money-making opportunity. This guide covers real, proven methods to generate income using AI tools in 2026.`,
        `## The Core Logic of AI Monetization`,
        `AI's core value is reducing costs and improving efficiency. Make money by using AI to lower your costs, or by helping others do the same.`,
        `## Proven Methods`,
        ...selected.flatMap(t => [`### ${t.t}`, t.d]),
        `## Getting Started`,
        `Don't overthink it. Pick one method, start with a small project, and iterate. The key is taking action, not waiting for the perfect plan.`,
        `## Conclusion`,
        `The barrier to making money with AI is lower than most people think. Start small, learn fast, and scale what works.`
      ];
    }
  },
  {
    category: 'Claude',
    title: (n) => {
      const titles = [
        `Claude 4 Review: Is It Better Than ChatGPT?`,
        `Claude 4 vs ChatGPT: Which AI is Right for You in 2026?`,
        `Why Developers Are Switching to Claude 4: A Complete Review`,
        `Claude 4: ${n} Features That Make It the Best AI Assistant`,
        `Anthropic's Claude 4: ${n} Reasons to Switch from ChatGPT`,
        `Claude 4 Prompt Engineering: ${n} Tips for Better Results`,
        `Claude 4 vs Gemini: ${n} Key Differences You Should Know`,
        `Claude 4 for Business: ${n} Ways Companies Are Using It`,
        `Claude 4 Artifacts Guide: How to Use This Powerful Feature`,
        `${n} Real-World Examples of Claude 4 Solving Complex Problems`,
        `Claude 4 API Tutorial: Build Your First AI App in Minutes`,
        `Claude 4 vs GPT-4: ${n} Categories Compared Head to Head`,
        `Getting Started with Claude 4: A Complete Beginner's Guide`,
        `Claude 4 Projects: ${n} Ways to Organize Your Work Better`,
        `Claude 4 Security and Privacy: What You Need to Know`,
      ];
      return titles[Math.floor(Math.random() * titles.length)];
    },
    summary: () => 'In-depth Claude 4 review comparing it with ChatGPT across coding, writing, reasoning, and pricing. Find out if Claude 4 is right for you.',
    keywords: () => 'Claude 4, AI review, ChatGPT comparison, Anthropic',
    content: () => [
        `Anthropic's Claude 4 has generated significant buzz in 2026. This in-depth review compares Claude 4 with ChatGPT across multiple dimensions.`,
        `## Claude 4 Key Upgrades`,
        `- **Longer Context**: 200K tokens — can process an entire book\n- **Better Reasoning**: Significantly improved math, coding, and logic\n- **Multimodal**: Supports image and document analysis\n- **Agent Capabilities**: Can autonomously complete complex tasks`,
        `## Claude 4 vs ChatGPT`,
        `| Feature | Claude 4 | ChatGPT (GPT-4) |\n|---------|---------|----------------|\n| Context Length | 200K | 128K |\n| Coding | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |\n| Writing Quality | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |\n| Reasoning | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |\n| Multimodal | Images + Docs | Image + Voice |\n| Price | $20/month | $20/month |`,
        `## Claude 4 Strengths`,
        `### Superior Coding`,
        `Claude 4 excels at coding tasks, particularly understanding complex codebases, refactoring, and writing tests. Many developers report Claude 4 is more reliable than ChatGPT.`,
        `### Better Writing`,
        `Claude 4 produces more natural, nuanced writing, especially in long-form content. Its tone consistency is superior.`,
        `### Safety First`,
        `Anthropic prioritizes AI safety. Claude 4 has better guardrails against harmful content and bias.`,
        `## Claude 4 Weaknesses`,
        `- Plugin ecosystem is less mature than ChatGPT\n- Real-time information retrieval is weaker\n- Voice features not yet available`,
        `## Should You Switch?`,
        `Claude 4 is arguably the strongest all-round AI model in 2026. For coding, writing, and analysis, it may be a better choice than ChatGPT.`
      ]
  },
];

let idCounter = Date.now();

function generateArticle(index) {
  const template = articleTemplates[index % articleTemplates.length];
  const n = 5 + Math.floor(Math.random() * 10);
  const content = template.content();
  const title = template.title(n);
  const id = title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').slice(0, 60);
  idCounter++;
  return {
    id: id + '-' + idCounter.toString(36),
    title,
    author: 'Jayden Q',
    summary: (template.summary ? template.summary() : content[0].slice(0, 120) + '...'),
    keywords: template.keywords(),
    category: template.category,
    content,
    image: null,
    date: new Date().toISOString().split('T')[0]
  };
}

function generateBatch(count) {
  let articles = [];
  try { articles = JSON.parse(fs.readFileSync(articlesPath, 'utf-8')); } catch(e) { articles = []; }
  for (let i = 0; i < count; i++) {
    const article = generateArticle(articles.length);
    articles.push(article);
  }
  fs.writeFileSync(articlesPath, JSON.stringify(articles, null, 2), 'utf-8');
  console.log(`Generated ${count} articles, total: ${articles.length}`);
}

function generateDaily() {
  let articles = [];
  try { articles = JSON.parse(fs.readFileSync(articlesPath, 'utf-8')); } catch(e) { articles = []; }
  const article = generateArticle(articles.length);
  articles.push(article);
  fs.writeFileSync(articlesPath, JSON.stringify(articles, null, 2), 'utf-8');
  console.log(`[${article.date}] Published: ${article.title}`);
}

if (require.main === module) {
  const count = parseInt(process.argv[2]) || 1;
  generateBatch(count);
}

module.exports = { generateDaily, generateBatch };
