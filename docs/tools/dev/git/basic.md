# Git 基础备忘

把自己要用的命令和有用的链接在这里存档。

# Git 基础操作完整指南

## 仓库初始化
```bash
git init  # 初始化本地仓库
git clone <url>  # 克隆远程仓库
```

## 文件操作
```bash
git add .  # 添加所有文件到暂存区
git add <file>  # 添加特定文件到暂存区
git commit -m "提交信息"  # 提交更改
git commit -am "提交信息"  # 添加并提交所有已跟踪文件的更改
```

## 分支操作
```bash
git branch  # 查看本地分支
git branch <branch-name>  # 新建分支
git checkout <branch-name>  # 切换分支
git checkout -b <branch-name>  # 新建并切换到该分支
git merge <branch-name>  # 合并指定分支到当前分支
git branch -d <branch-name>  # 删除本地分支
git branch -D <branch-name>  # 强制删除本地分支
```

## 远程仓库操作
```bash
git remote add <name> <url>  # 添加远程仓库
git remote -v  # 查看远程仓库信息
git push <remote> <branch>  # 推送本地分支到远程仓库
git push -u <remote> <branch>  # 推送并设置上游分支
git pull <remote> <branch>  # 从远程仓库拉取更新
git fetch <remote>  # 从远程仓库获取更新但不合并
```

## 查看状态和历史
```bash
git status  # 查看仓库状态
git log  # 查看提交历史
git log --oneline  # 查看简洁的提交历史
git log --graph  # 查看带分支图的提交历史
git show <commit-id>  # 查看特定提交的详细信息
git diff  # 查看未暂存的更改
git diff --staged  # 查看已暂存的更改
```

## 撤销操作
```bash
git reset --soft <commit-id>  # 撤销提交但保留更改在暂存区
git reset --mixed <commit-id>  # 撤销提交和暂存，保留更改在工作区(默认)
git reset --hard <commit-id>  # 彻底撤销提交和所有更改
git checkout -- <file>  # 撤销工作区的文件修改
git revert <commit-id>  # 创建一个撤销指定提交的新提交
```

## 其他实用命令
```bash
git stash  # 临时保存工作目录的修改
git stash pop  # 恢复最近stash的修改
git cherry-pick <commit-id>  # 选择某个提交应用到当前分支
git rebase <branch>  # 变基当前分支到指定分支
git clean -fd  # 删除未跟踪的文件和目录
git reflog  # 查看所有git操作记录(可用于恢复误操作)
```

## 配置相关
```bash
git config --global user.name "Your Name"  # 设置全局用户名
git config --global user.email "your@email.com"  # 设置全局邮箱
git config --list  # 查看所有git配置
```
