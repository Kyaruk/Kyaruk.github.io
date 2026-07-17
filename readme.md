# 朱祖坤个人主页

基于 **Hugo** 的静态个人主页。

## 目录结构

```
.
├── config.toml              # 站点配置：姓名/头像/身份/社交链接/导航
├── archetypes/default.md     # hugo new 时的文章模板
├── static/
│   ├── css/style.css         # 全部样式
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

