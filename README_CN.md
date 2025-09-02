# 🍌 Nano Banana - AI图像生成学习中心

> 通过全面的教程、交互式工具和专家指导，掌握Nano Banana AI图像生成技术。

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

## 🎯 项目概述

Nano Banana是一个综合性的学习平台，旨在帮助用户掌握使用Nano Banana进行AI图像生成。该平台提供教程、交互式工具、案例研究和资源，以加速学习和创意过程。

### 🌟 核心功能

- **📚 全面教程** - 从新手到高级的逐步指导
- **🛠️ 交互式工具** - 直接在浏览器中体验Nano Banana
- **🖼️ 画廊与案例** - 浏览数千个带有详细参数的示例
- **👥 专家社区** - 与其他创作者交流并获得反馈
- **📖 资源库** - 模板、提示词、预设和API文档

## 🚀 快速开始

### 环境要求

- Node.js 18.0 或更高版本
- npm、yarn、pnpm 或 bun

### 安装步骤

1. **克隆仓库**
   ```bash
   git clone https://github.com/your-username/nano-banana.git
   cd nano-banana
   ```

2. **安装依赖**
   ```bash
   npm install
   # 或
   yarn install
   # 或
   pnpm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   # 或
   yarn dev
   # 或
   pnpm dev
   ```

4. **打开浏览器**
   访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 🏗️ 技术栈

### 前端技术
- **[Next.js 15.5.2](https://nextjs.org/)** - 使用App Router的React框架
- **[React 19.1.0](https://reactjs.org/)** - UI库
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - 类型安全
- **[Tailwind CSS 4.0](https://tailwindcss.com/)** - 实用优先的CSS框架
- **[Shadcn/ui](https://ui.shadcn.com/)** - 可复用组件
- **[Framer Motion](https://www.framer.com/motion/)** - 动画库
- **[Lucide React](https://lucide.dev/)** - 图标库

### 状态管理
- **[Zustand](https://zustand-demo.pmnd.rs/)** - 轻量级状态管理

### 开发工具
- **[ESLint](https://eslint.org/)** - 代码检查
- **[Prettier](https://prettier.io/)** - 代码格式化
- **[Sharp](https://sharp.pixelplumbing.com/)** - 图像优化

## 📁 项目结构

```
nano-banana/
├── src/
│   ├── app/                    # Next.js App Router页面
│   │   ├── page.tsx           # 首页
│   │   ├── tutorials/         # 教程页面
│   │   ├── tools/            # 工具页面
│   │   ├── gallery/          # 画廊页面
│   │   ├── resources/        # 资源页面
│   │   ├── layout.tsx        # 根布局
│   │   ├── sitemap.ts        # 站点地图生成
│   │   └── robots.ts         # Robots.txt
│   ├── components/            # React组件
│   │   ├── auth/             # 认证组件
│   │   ├── tutorials/        # 教程组件
│   │   ├── tools/           # 工具组件
│   │   ├── gallery/         # 画廊组件
│   │   ├── resources/       # 资源组件
│   │   ├── ui/              # 基础UI组件
│   │   └── Header.tsx       # 主导航
│   └── lib/                  # 工具库
│       ├── auth-store.ts    # 认证状态
│       └── utils.ts         # 辅助函数
├── public/                   # 静态资源
├── requirements.md          # 项目需求
├── project-decisions.md     # 开发决策
└── README.md               # 本文件
```

## 🎨 功能特性

### 🏠 首页
- 价值主张展示区域
- 功能亮点介绍
- 社区统计数据
- 行动号召区域

### 📚 教程中心
- **新手教程** - Nano Banana入门指南
- **高级技巧** - 掌握高级功能
- **参数指南** - 深入解析所有参数
- **常见问题** - 常见问题和解决方案

### 🛠️ 交互式工具
- **图像生成器** - 实时预览创建图像
- **参数调节器** - 实验不同设置
- **效果对比器** - 比较不同参数组合
- **批量处理器** - 一次生成多张图像

### 🖼️ 画廊
- 浏览数千张AI生成的图像
- 按类别、风格和参数进行高级筛选
- 查看详细的生成参数
- 下载高质量图像
- 社区互动（点赞、下载）

### 📖 资源中心
- **模板库** - 即用型模板
- **提示词集合** - 精选提示词库
- **参数预设** - 优化设置
- **API文档** - 开发者资源

### 👤 用户系统
- 用户注册和认证
- 个人资料管理
- 收藏和集合
- 社区功能

## 🔧 可用脚本

```bash
# 开发
npm run dev          # 启动开发服务器
npm run build        # 构建生产版本
npm run start        # 启动生产服务器
npm run lint         # 运行ESLint

# 类型检查
npm run type-check   # 运行TypeScript编译器
```

## 🌐 SEO与性能

- **SEO优化** - 完整的元标签、Open Graph和Twitter卡片
- **结构化数据** - Schema.org标记，提升搜索可见性
- **站点地图** - 自动生成的sitemap.xml
- **Robots.txt** - 搜索引擎爬虫指令
- **PWA就绪** - 渐进式Web应用支持
- **性能优化** - 优化图像、代码分割和懒加载

## 🚀 部署

### Vercel（推荐）

1. **连接仓库** 到Vercel
2. **配置环境变量**（如需要）
3. **部署** - 每次推送自动部署

[![使用Vercel部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/nano-banana)

### 其他平台

应用可以部署到任何支持Next.js的平台：
- **Netlify** - 静态站点托管
- **AWS Amplify** - 全栈托管
- **Railway** - 简单部署
- **DigitalOcean App Platform** - 基于容器的托管

## 📊 开发状态

### ✅ 第一阶段 - MVP（已完成）
- [x] 核心页面架构
- [x] 用户认证系统
- [x] SEO优化
- [x] 响应式设计
- [x] 组件库

### 🚧 第二阶段 - 内容与集成（进行中）
- [ ] 内容管理系统
- [ ] Nano Banana API集成
- [ ] 数据库设置（Supabase）
- [ ] 高级功能（搜索、评论）

### 📋 第三阶段 - 商业化（计划中）
- [ ] 高级功能
- [ ] 订阅系统
- [ ] 广告集成
- [ ] 联盟营销

## 🤝 贡献

我们欢迎贡献！请查看我们的[贡献指南](CONTRIBUTING.md)了解详情。

### 开发工作流程

1. **Fork** 仓库
2. **创建** 功能分支（`git checkout -b feature/amazing-feature`）
3. **提交** 更改（`git commit -m '添加惊人功能'`）
4. **推送** 到分支（`git push origin feature/amazing-feature`）
5. **打开** 拉取请求

## 📄 许可证

本项目采用MIT许可证 - 查看[LICENSE](LICENSE)文件了解详情。

## 🙏 致谢

- **Nano Banana** - 提供出色的AI图像生成能力
- **Next.js团队** - 提供优秀的React框架
- **Vercel** - 提供部署平台
- **Tailwind CSS** - 提供实用优先的CSS框架
- **Shadcn** - 提供美观的组件库

## 📞 支持

- **文档** - [项目Wiki](https://github.com/your-username/nano-banana/wiki)
- **问题** - [GitHub Issues](https://github.com/your-username/nano-banana/issues)
- **讨论** - [GitHub Discussions](https://github.com/your-username/nano-banana/discussions)
- **邮箱** - support@nanobanana.com

## 🔗 链接

- **在线演示** - [https://nanobanana.com](https://nanobanana.com)
- **文档** - [https://docs.nanobanana.com](https://docs.nanobanana.com)
- **API参考** - [https://api.nanobanana.com/docs](https://api.nanobanana.com/docs)

---

<div align="center">

**由Nano Banana团队用❤️制作**

[⭐ 给这个仓库点星](https://github.com/your-username/nano-banana) • [🐛 报告Bug](https://github.com/your-username/nano-banana/issues) • [💡 请求功能](https://github.com/your-username/nano-banana/issues)

</div>
