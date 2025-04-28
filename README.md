# Material MkDocs 博客维护指南

这是一个使用 Material for MkDocs 构建的文档站点。

## 环境要求

- Python 3.7+
- pip (Python包管理器)

## 安装

1. 安装 MkDocs 和 Material 主题:

```bash
pip install mkdocs-material
```

2. 克隆此仓库:

```bash
git clone <repository-url>
```

## 本地开发

启动开发服务器:

```bash
mkdocs serve
```

访问 http://127.0.0.1:8000 预览站点

## 部署

### GitHub Pages 自动部署

本站点使用 GitHub Actions 自动部署到 GitHub Pages。每次推送到 main 分支时会自动触发部署流程。

具体步骤：
1. 推送代码到 main 分支
2. GitHub Actions 自动运行部署工作流
3. 部署完成后可访问 https://[username].github.io/blog

### 手动构建

如需本地构建：

```bash 
mkdocs build
```

## 文档结构

```
mkdocs.yml    # 配置文件
docs/         # 文档目录
  index.md    # 首页
  ...         # 其他文档页面
```

## 配置文件

在 `mkdocs.yml` 中可以配置:

- 站点名称
- 主题设置
- 导航结构
- Markdown 扩展
- 插件配置

## 维护提示

1. 新增文档页面时需要在 mkdocs.yml 的 nav 部分添加对应条目
2. 图片等静态资源放在 docs/assets 目录下
3. 定期更新 mkdocs-material 到最新版本
4. 提交前本地预览确保内容正确显示