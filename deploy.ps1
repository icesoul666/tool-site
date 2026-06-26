Write-Host "=== 在线工具箱 - 部署脚本 ===" -ForegroundColor Cyan
Write-Host ""

# 1. 安装依赖
Write-Host "[1/4] 安装后端依赖..." -ForegroundColor Yellow
Set-Location -LiteralPath "F:\TT2\tool-site\backend"
npm install --silent

# 2. 初始化Git
Write-Host "[2/4] 初始化Git仓库..." -ForegroundColor Yellow
Set-Location -LiteralPath "F:\TT2\tool-site"
git init
git add -A
git commit -m "Initial commit: 在线工具箱"

Write-Host ""
Write-Host "=== 部署完成 ===" -ForegroundColor Green
Write-Host ""
Write-Host "下一步操作：" -ForegroundColor Cyan
Write-Host "1. 在 GitHub 创建仓库并推送代码"
Write-Host "2. 在 Render.com 或 Railway.app 免费部署后端"
Write-Host "3. 配置 Stripe 密钥 (需在 .env 中设置 STRIPE_SECRET_KEY)"
Write-Host "4. 将前端部署到 Vercel 或 GitHub Pages"
Write-Host ""
Write-Host "部署后你的工具站就能开始接单赚钱了！" -ForegroundColor Green
