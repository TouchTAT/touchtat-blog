# TouchTAT 的博客：更新方法

网站使用 Shirone + Astro。内容在本仓库，推送到默认分支后 Vercel 自动构建。

站点地址：[touchtat-blog.vercel.app](https://touchtat-blog.vercel.app/)。源码：[TouchTAT/touchtat-blog](https://github.com/TouchTAT/touchtat-blog)。托管项目：[Vercel Hobby 控制台](https://vercel.com/touch17/touchtat-blog)。

## 本地预览与发布

需要 Node >= 22.12。打开此目录中的终端：

```powershell
npx.cmd --yes pnpm@11.28.2 install --frozen-lockfile
npx.cmd --yes pnpm@11.28.2 dev
```

打开终端显示的本地网址。检查后发布：

```powershell
git add .
git commit -m "docs(content): 更新博客"
git push origin main
```

也可以在 GitHub 网页打开目标文件，点击编辑并提交到 main。Vercel 部署状态变为 Ready 后再查看网站。

## 写文章

新建 `src/content/posts/my-first-post.md`：

```markdown
---
title: 我的第一篇文章
published: 2026-10-27
description: 一句话摘要
tags: [生活]
category: 随笔
draft: false
---

这里写正文，可以使用 Markdown。
```

欢迎示例位于 `src/content/posts/welcome.md`，可直接替换或删除。公开仓库中的草稿文件也会被别人看到；未准备公开的内容请保存在仓库外。

## 发碎碎念

新建 `src/content/moments/2026-10-28.md`：

```markdown
---
published: 2026-10-28T20:00:00+08:00
tags: [日常]
images: []
draft: false
---

今天的一点小想法。
```

有图片时，`images` 可写 `[{src: "/images/my-photo.jpg", alt: "图片说明"}]`，并把文件放到 `public/images/`。原始示例为 `first-note.md`。

## 建相册并填写每张照片说明

在 `public/images/albums/trip/` 放照片，并创建 `info.json`。带逐图说明时使用明确清单模式：`mode: "external"` 表示读取 `photos` 清单，清单里的路径既可以是本地公开路径，也可以是 HTTPS 图片地址。

```json
{
  "mode": "external",
  "title": "一次旅行",
  "description": "关于这组照片的说明",
  "cover": "/images/albums/trip/01.jpg",
  "date": "2026-10-28",
  "location": "旅行地点",
  "tags": ["旅行"],
  "layout": "masonry",
  "columns": 3,
  "photos": [
    {
      "src": "/images/albums/trip/01.jpg",
      "alt": "照片内容说明",
      "title": "照片标题",
      "description": "可选图注",
      "date": "2026-10-28",
      "location": "拍摄地点",
      "width": 1600,
      "height": 1067
    },
    { "src": "/images/albums/trip/02.jpg", "alt": "第二张照片" }
  ]
}
```

可选 `thumbnail` 指向缩略图。不要填写不存在的宽高；缺省会在加载后测量。图注、日期和地点不填就不显示。点开照片后可用左右方向键切换，Esc 关闭。

若只需自动收集目录中的本地图片，可不写 `mode` 和 `photos`，并提供 `cover.webp` 或 `cover.jpg`。这种简易模式从文件名生成标题，从文件修改时间生成日期；逐图元数据请使用上面的清单模式。

`sample` 目录中的三张 SVG 是搭建示意插画，不是个人摄影作品，可以整组删除。所有照片最终都是公开资源；这里只放准备公开且有权使用的图片。

## 添加友链

在 `src/data/friends.ts` 的 `friendsData` 数组中加入：

```typescript
{
  id: 1,
  title: "朋友的网站",
  imgurl: "https://example.com/avatar.jpg",
  desc: "一句话介绍",
  siteurl: "https://example.com/",
  tags: ["朋友"],
}
```

## 修改个人资料与外观

- 介绍正文：`src/content/spec/about.md`
- 昵称、头像、简介和社交链接：`src/config/profileConfig.ts`
- 标题、网站正式地址、背景、主题色和时区：`src/config/siteConfig.ts`
- 导航：`src/config/navBarConfig.ts`
- 头像：`src/assets/images/profile/spring-traveler.png`
- 背景壁纸：`src/assets/images/banner/spring-railway.png`
- 手机壁纸：`src/assets/images/banner/spring-railway-mobile.png`
- 浏览器图标：`public/images/avatar.svg`

当前样式使用本地 Outfit 与悠哉圆体，生产构建自动压缩字体子集；字体无需从外部 CDN 获取。字体设置在 `src/config/fontConfig.ts`，Outfit 的 OFL 许可证随字体保存。原创壁纸与头像使用内置 image_gen 生成，提示词见 `docs/assets/reference-style-prompts.md`。

评论、音乐、统计和多余演示栏目均未启用。主题 MIT 许可证和来源说明保留。

上游的语法演示文章兼作主题文档，因此保留在源码中并标记为 `draft: true`，不会出现在已发布文章中。此次核对了类型、文档清单、Node 测试和生产构建，后续更新由 Vercel 自动构建。Fork 中继承的主题开发工作流未启用：其中 `tests/site` 的部分用例针对默认站名、特定字体和演示相册，若以后启用这些 GitHub Actions，需要先适配个人站点配置。

## 发布前检查

```powershell
npx.cmd --yes pnpm@11.28.2 astro check
node --experimental-strip-types --test tests/album-viewer.test.mjs
npx.cmd --yes pnpm@11.28.2 build
```

只提交源码和准备公开的内容；`dist`、依赖、环境文件不需要提交。凭据不要放进正文、配置或 Git 历史。
