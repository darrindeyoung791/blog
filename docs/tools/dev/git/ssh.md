# Git 使用 SSH 连接 GitHub

!!! note

    大部分情况下，我们能直接访问 [GitHub](https://github.com)，但大部分情况出现的概率很低。此时即便设法让浏览器能够正确访问 GitHub，git 却没办法连接 GitHub。使用 SSH 连接 GitHub 可以解决此类问题。
    
    本文参考了 https://zhuanlan.zhihu.com/p/688103044 以及 https://blog.csdn.net/problc/article/details/144365441 的内容。



## 0x00 配置 SSH key

打开 Git Bash。

![git-bash-in-windows-search-result](/assets/images/git/git-bash-in-windows-search-result.png)

先输入下面的指令查看有没有已经创建的 SSH key

```bash
cd ~/.ssh
```

=== "如果报错 `no such file or directory`"

    这是因为这台电脑上没有生成过 SSH key，使用下面指令生成 SSH key：
    
    ```bash
    ssh-keygen -t rsa -C "xxx@xxx.com"  // 将 "xxx@xxx.com" 替换为你自己GitHub的邮箱地址
    ```
    
    随后一直按 ++enter++ 直到密钥的 randomart image 出来为止。
    
    ???+ note
    
        这里是把 ssh passphrase 留空了。根据实际需要考虑要不要设置。


=== "如果没有报错并进入了 `/ssh` 目录"

    这台电脑上已生成过 SSH key，进入下一步。


## 0x01 获得并复制 SSH 公钥内容

还是在 Git Bash 终端，输入下列指令：

```bash
cd ~/.ssh
cat id_rsa.pub
```

此时会看到 SSH 公钥内容，格式如下：

```
ssh-rsa AA1AB2BB3CC4CD5DD……XX6XY7YY8ZZ9Z <你的邮箱地址>
```

用鼠标选择自 `ssh-rsa` 起至邮箱地址止（也就是全部内容）后右键（copy）复制。

## 0x02 在 Github 设置中输入公钥

访问 [Github 的 SSH and GPG keys](https://github.com/settings/keys) 设置页面，点击“New SSH ”按钮。

![add-ssh-key-in-github-key-settings](/assets/images/git/add-ssh-key-in-github-key-settings.png)

在 Title 处随便取个名字，然后在 Key 处粘贴之前复制的公钥，最后点 Add SSH key。

![add-new-ssh-key-in-github](/assets/images/git/add-new-ssh-key-in-github.png)



[等待完成修改为443端口的内容]
