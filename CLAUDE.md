# TouchThinking 博客工程说明

## 项目与部署

正式地址：https://touchtat-blog.vercel.app/ 。代码仓库：TouchTAT/touchtat-blog，main 由 Vercel 自动构建。Node 22，pnpm 9.14.4，Astro 7.1.6、Svelte 5、Tailwind 4。

2026-10-28：将用户认可的参考站预览整合进主仓，保留旧 Git 历史。参考主题来源见 README 和 LICENSE。不包含原作者私人内容、导航页面或第三方服务凭据。

## 内容与目录

- src/content/文章：Markdown 文章，旧 hello-world 与 welcome 链接保持不变。
- src/content/动态：碎碎念；src/content/页面：关于、友链介绍。
- src/content/相册：JSON 相册元数据。photos 包含 src、thumbnail（可选）、alt、caption。
- public/images/albums：本地图片，目前为南京摄影集。
- src/content/更新日志：面向读者的版本记录。
- src/config、src/components、src/styles/main.css：配置、按功能域分组的组件、样式入口。
- /album/ 是相册入口；/albums/ 和 /albums/[id]/ 保留兼容跳转。

本项目内容目录不是独立 Git 仓库。不要照搬上游私人备份、EdgeOne、Obsidian 或自托管 CMS 的部署说明。

Git 不保存空目录；友链墓碑等可选内容目录必须先 existsSync 判断，再扫描，确保干净克隆能够构建。

## 开发约定

只用 Node 脚本修改文件。组件遵守现有 Svelte 5 runes、主题令牌与 Swup 生命周期；监听器应清理，跨页单例使用 guard。全局样式通过 main.css 导入。新增界面翻译同步 i18nKey.ts 和 languages/zh_CN.ts。不要启用未经配置的评论、统计、赞助或外部服务；任何管理令牌不得写入 PUBLIC_ 环境变量或网页。

## 验证与维护

发布前运行 pnpm check、pnpm type-check、pnpm build、pnpm exec biome ci ./src --reporter=github，记录实际结果，并用浏览器检查文章、相册灯箱、旧链接、移动端。上游已有格式问题须与本次错误区分，不做无关大规模改写。提交采用 type(scope): subject。修改内容模型或部署方式时同步本文件、README 与更新日志。

Vercel 使用仓库 vercel.json 中固定版本的安装与构建命令，输出 dist。main 发布后核验 GitHub SHA、Vercel Ready 状态和匿名正式网址。
