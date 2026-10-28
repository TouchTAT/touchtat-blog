# 2026-10-28 主题迁移验证

- Astro check：0 errors、0 warnings、36 hints。
- Astro build 与 Pagefind：成功；搜索索引 6 页。
- TypeScript isolatedDeclarations：42 条诊断，与已确认预览的基线逐条归一化行号后相同。
- Biome CI：282 条错误，与预览基线相同，主要是格式；并未将其标记为通过。本次不扩大范围格式化整个参考主题。
- 相册：迁入南京 56 张作品，完整保留原有图片；列表加载 thumbnail，大图加载 2560 像素 src；浏览器验证 1/56 → 2/56。
- 兼容链接：/albums/nanjing/ 跳至 /album/?album=nanjing，筛选出 56 张。
- 产物扫描：未命中原作者账号、备案、个人联系方式；没有把 .env、.vercel、密钥或 node_modules 加入提交。
- 旧 Shirone CI 工作流依赖已删除的组件和测试，随主题移除；新版本由 Vercel 的 Git 集成执行实际构建。

详尽本地日志位于 D:/Blog/docs/release-*.log；生产部署状态以 Vercel 实际部署为准。
