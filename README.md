# 🌸 Mizuki 博客主题

<img align='right' src='logo.png' width='200px' alt="Mizuki logo">

一个基于 [Astro](https://astro.build) 构建的现代化、功能丰富的静态博客模板，拥有极致的交互设计与完备的扩展功能。

> 💡 **在线应用实例**：本项目目前驱动着我的个人数字主页与博客系统，欢迎访问体验：[**0ky.top (贺开棪的个人主页)**](https://www.0ky.top/)

[![Node.js >= 20](https://img.shields.io/badge/node.js-%3E%3D20-brightgreen)](https://nodejs.org/)
[![pnpm >= 9](https://img.shields.io/badge/pnpm-%3E%3D9-blue)](https://pnpm.io/)
[![Astro](https://img.shields.io/badge/Astro-5.15.3-orange)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue)](https://www.typescriptlang.org/)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg?logo=apache)](https://opensource.org/licenses/Apache-2.0)

[**🖥️ 在线演示 (Demo)**](https://mizuki.mysqil.com/) | [**📝 官方文档**](https://docs.mizuki.mysqil.com/)

无论是自定义主题、配置特色功能，还是部署到生产环境，您都可以通过阅读全面的官方文档快速上手您的博客搭建之旅。

[📚 阅读完整文档](https://docs.mizuki.mysqil.com/) →

![Mizuki 预览图](./README.webp)

---

## 🚀 最新特性：自动化分辨率适配

> **🎯 智能分辨率算法** - 能够根据设备屏幕分辨率智能适配内容布局，为所有设备提供无死角的最佳阅读体验。

### 🔧 组件配置系统重构
- **统一的配置架构**：全新的模块化组件配置系统，支持组件的动态管理与排序。
- **配置驱动加载**：重构了侧边栏（SideBar）组件，实现完全基于配置的组件加载机制。
- **统一控制开关**：移除了音乐播放器和公告组件的独立开关，统一由 `sidebarLayoutConfig` 进行全局调度。
- **响应式布局适配**：组件全面支持响应式布局，根据设备类型自动调整显示策略。

### 📐 布局系统优化
- **动态侧边栏位置**：支持左/右侧边栏一键切换，布局自动完美适配。
- **智能文章目录定位**：当侧边栏居右时，文章内的目录导航会自动平移至左侧，提供更沉浸的阅读体验。
- **Grid 网格改进**：优化底层的 CSS Grid 布局，彻底解决了容器宽度异常的边缘问题。

---

## ✨ 核心功能矩阵

### 🎨 设计与交互界面
- [x] 基于现代化的 [Astro](https://astro.build) 与原子化 [Tailwind CSS](https://tailwindcss.com) 构建。
- [x] 借助 [Swup](https://swup.js.org/) 实现丝滑的页面过渡与 SPA 级路由动画。
- [x] 完美支持 24 小时动态明暗主题（感知系统偏好）。
- [x] 高度可定制的主题色，配合动态头图 Banner 轮播。
- [x] 沉浸式全屏背景图支持（含轮播、透明度调节与毛玻璃模糊特效）。
- [x] 优雅排版，默认集成 JetBrains Mono 极客字体。

### 🔍 内容与数据检索
- [x] 基于 [Pagefind](https://pagefind.app/) 的高性能本地离线搜索功能。
- [x] [增强型 Markdown 特性](#-markdown-扩展特性)（含代码高亮与复制功能）。
- [x] 交互式侧边栏目录 (TOC)，支持阅读进度自动滚动。
- [x] 自动生成 RSS 订阅源与文章阅读时长估算。
- [x] 完备的文章分类与标签检索系统。

### 📱 专属特色页面
- [x] **番剧追踪页** - 记录与追更你的动漫观看进度及评分。
- [x] **友情链接页** - 采用高颜值卡片化设计展示好友站点。
- [x] **日记/动态页** - 类似社交媒体的时间线流，用于分享生活瞬间。
- [x] **时间轴归档页** - 以清晰的时间线视图结构化展示所有文章。
- [x] **关于我页面** - 高度可定制的个人履历与介绍模块。

### 🛠 底层技术亮点
- [x] 基于 [Expressive Code](https://expressive-code.com/) 的增强型代码块渲染。
- [x] 原生支持 **KaTeX 数学公式** 高性能渲染。
- [x] 深度集成 PhotoSwipe 实现相册级画廊与**图片优化**体验。
- [x] 自动化 **SEO 优化**（自动生成 Sitemaps 与丰富的 Meta 标签）。
- [x] 集成 `Twikoo` 评论互动生态。

---

## 🚀 快速上手

### 📦 环境安装

1. **克隆项目到本地：**
   ```bash
   git clone [https://github.com/matsuzaka-yuki/mizuki.git](https://github.com/matsuzaka-yuki/mizuki.git)
   cd mizuki
   ```

2. **安装核心依赖：**
   ```bash
   # 如果尚未安装 pnpm，请先全局安装
   npm install -g pnpm
   
   # 安装项目依赖
   pnpm install
   ```

3. **配置你的专属博客：**
   - 打开 `src/config.ts` 定制你的博客基础设置。
   - 更新站点信息、主题色、Banner 头图以及底部社交链接。

4. **启动本地开发服务器：**
   ```bash
   pnpm dev
   ```
   启动成功后，可在浏览器访问 `http://localhost:4321` 预览效果。

### 📝 内容创作与管理

- **新建文章**：执行 `pnpm new-post <文章名>`
- **编辑文章**：修改 `src/content/posts/` 目录下的 Markdown 文件。
- **自定义特殊页面**：修改 `src/content/spec/` 目录下的配置文件。
- **管理图片/资源**：将图片统一放置于 `src/assets/` 或 `public/` 目录下。

### 🚀 生产环境部署

支持将你的博客极速部署到任何静态托管平台：
- **Vercel / Netlify / Cloudflare Pages**：直接关联 GitHub 仓库即可实现自动化部署。
- **GitHub Pages**：使用项目内置的 GitHub Actions 工作流。

*(部署前请务必修改 `src/config.ts` 中的 `siteURL`。敏感环境变量请配置在云平台的 Environment Variables 中，不建议提交 `.env` 文件至仓库)*

---

## 📝 文章 Frontmatter 规范

在每篇 Markdown 文章的顶部，需包含以下 YAML 配置：

```yaml
---
title: 我的第一篇博客
published: 2026-04-06
description: 这是我在全新博客上发布的第一篇文章。
image: ./cover.jpg
tags: [前端, 实战]
category: 技术分享
draft: false
pinned: false
comment: true
---
```

**核心字段说明：**
- **draft**: 设为 `true` 时，该文章将被隐藏（草稿模式）。
- **pinned**: 设为 `true` 可将重要文章**永久置顶**在列表最上方。
- **comment**: 单独控制本篇文章是否开启评论区（需全局先开启评论功能）。

---

## 🧩 Markdown 扩展特性

除了标准的 GitHub 风格 Markdown，Mizuki 还支持以下强大的增强语法：

- **精美提示框 (Callouts)**：使用 `> [!NOTE]` 或 `> [!WARNING]` 快速渲染高颜值提示卡片。
- **数学公式**：支持 `$行内公式$` 和 `$$块级公式$$` LaTeX 渲染。
- **代码高亮加强**：支持显示行号、代码块折叠以及一键复制。
- **GitHub 卡片嵌入**：使用 `::github{repo="user/repo"}` 实时嵌入开源仓库卡片。

---

## ⚡ 常用 CLI 命令

在项目根目录下执行以下命令：

| 执行命令 | 功能说明 |
|:---|:---|
| `pnpm install` | 安装项目依赖 |
| `pnpm dev` | 启动本地开发热更新服务器 |
| `pnpm build` | 编译构建生产环境静态文件至 `./dist/` 目录 |
| `pnpm preview` | 在本地预览生产环境的构建产物 |
| `pnpm new-post <名称>` | 快速创建一篇包含标准化头部的博客文章 |

---

## 🙏 版权声明与鸣谢

本项目为开源主题生态的延续与扩展，在此向所有提供灵感与底层架构的开源作者及项目致以最诚挚的感谢（@相关原作者）：

- 🌸 **[Mizuki](https://github.com/matsuzaka-yuki/Mizuki)** by **@matsuzaka-yuki** - 本仓库核心主题的创作者与维护者。
- 🌟 **[Fuwari](https://github.com/saicaca/fuwari)** by **@saicaca** - 本项目底层的核心基石模板，感谢作者创造了如此优雅强大的 Astro 主题框架。
- ❄️ **[Yukina](https://github.com/WhitePaper233/yukina)** - 为本主题提供了极佳的设计灵感与创意方向。
- ✨ **[Firefly](https://github.com/CuteLeaf/Firefly)** & **[Twilight](https://github.com/spr-aachen/Twilight)** - 提供了双侧边栏布局思路与动态壁纸模式系统的技术参考。
- 🐾 **[Pio](https://github.com/Dreamer-Paul/Pio)** - 实现了博客中可爱的 Live2D 看板娘交互插件。

*本项目基于 Apache License 2.0 开源协议。底层 Fuwari 框架相关代码遵循 MIT 协议。*

---
⭐ 如果您觉得这个项目对您搭建博客有帮助，欢迎给原作者和本仓库点个 Star！
```
