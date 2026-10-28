# TouchThinking 的博客

正式网址：<https://touchtat-blog.vercel.app/>

摄影、日常记录与个人思考。使用 Astro + Svelte，以 [团子和蛋糕博客](https://github.com/tianshihao2003/dumplingandcakeblog) 的 Firefly 定制主题为基础，保留 MIT 许可与上游署名。此前 Shirone 版本在 Git 历史中，许可存于 docs/SHIRONE-LICENSE.txt。

## 本地运行

Node.js 22，pnpm 9.14.4：

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm build
```

## 写文章与上传照片

- 文章放在 src/content/文章，支持 Markdown；运行 pnpm new-post 使用创建工具。标题等信息写在文章头部。
- 碎碎念放在 src/content/动态。
- 相册信息放在 src/content/相册/*.json，照片放在 public/images/albums/ 对应目录。photos.src 是大图，thumbnail 是列表缩略图，alt 是图片说明。
- 头像与车站背景在 public/assets/touchtat，相关配置在 src/config。
- 提交并推送到 main 后，Vercel 自动重新发布。浏览器直接访问正式网址即可，不需要访客登录。

网页后台使用官方 Pages CMS，操作说明见 [后台使用说明](docs/pages-cms.md)。根 .pages.yml 定义文章、碎碎念、相册等表单。

独立导航页面未启用。评论、统计、图床管理等外部服务没有自动接入；请勿把管理员令牌填写到 PUBLIC_ 变量中。

迁移版本保留 /posts/hello-world/ 文章地址及 /albums/、/albums/nanjing/ 等旧相册地址的跳转。
