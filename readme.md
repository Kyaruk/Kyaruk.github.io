# 朱祖坤个人主页（Hugo · 学者极简风 A）

基于 **Hugo** 的静态个人主页，单页学术风格：顶部导航 + 左侧固定个人信息 + 右侧分区块内容。

## 目录结构

```
.
├── config.toml              # 站点配置：姓名/头像/身份/社交链接/导航
├── archetypes/default.md     # hugo new 时的文章模板
├── static/
│   ├── css/style.css         # 全部样式（学者极简风，亮色）
│   └── assets/WechatIMG3.jpeg# 头像（从 assets/ 复制而来）
├── layouts/
│   ├── _default/baseof.html  # 页面骨架：顶部导航 + 左侧栏 + 右侧内容
│   ├── _default/list.html    # 博客列表页
│   ├── _default/single.html  # 博客文章页
│   └── index.html            # 首页：各内容区块（关于/教育/论文/专利/项目/博客）
├── content/
│   ├── _index.md
│   └── blog/                 # 博客文章放这里
│       ├── _index.md
│       └── hello-world.md    # 示例文章
└── public/                   # hugo 构建产物（部署用，已 gitignore 思路）
```

## 本地预览

```bash
hugo server -D
# 打开 http://localhost:1313
```

## 构建静态文件（部署到 GitHub Pages）

```bash
hugo --gc --minify
# 产物在 public/ ，把 public/ 推到 <用户名>.github.io 仓库的 main 分支，
# 或在仓库 Settings → Pages 选择分支根目录 /docs。
```

## 在哪里改内容

- **姓名 / 头像 / 身份 / 社交链接 / 导航**：`config.toml` 的 `[params]` 与 `[[menu.main]]`。
- **首页各区块文字**（关于、教育、论文、专利、项目）：`layouts/index.html`，每块都有 `<!-- 区块：... -->` 注释。
- **写博客**：在 `content/blog/` 新建 `.md`，或运行 `hugo new blog/文章名.md`。
- **改样式**：`static/css/style.css`（顶部 `:root` 里可改主题色、字号等）。

## 待你补全的项

- `config.toml`：`tagline`、`bio`、Scholar / 知乎 / LinkedIn 链接。
- 论文的 PDF / Code 链接（当前为占位 `#`）。
- 头像如果换图，替换 `static/assets/` 下文件并改 `params.avatar`。
