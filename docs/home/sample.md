# 示例文本

## 1. 基础文本格式

这是**粗体**文本，这是*斜体*文本，这是***粗斜体***文本。
这是`行内代码`，这是~~删除线~~文本。

下面是分割线：

---

## 2. 列表示例

有序列表：

1. 第一项

2. 第二项

   - 子项A

   - 子项B

3. 第三项

无序列表：

- 苹果

  - 红富士

  - 青苹果

- 香蕉

- 橙子

## 3. 引用和代码块

> 这是一段引用文本
> 多行引用
>> 嵌套引用

这是一个代码块，包含行数显示，以及指定行高亮：

``` python hl_lines="2 3"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```

这是一组按键：

++ctrl+alt+del++


## 4. 表格示例

| **名称**                            | **图标**                                                     | 优点                                                         | 缺点                                                         |
| ----------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Microsoft Edge                      | <img src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/2c3f3c46bd764335beec466a0acfde0e-png-w639.webp" alt="Microsoft Edge" style="zoom:10%;" /> | 与系统高度结合；功能强大易用；可以很方便地安装浏览器插件；手机电脑多端同步；很适合 PDF 阅读和批注。 | 臃肿；系统软件无法卸载。                                     |
| Mozilla Firefox<br />（火狐浏览器） | <img src="https://assets-prod.sumo.prod.webservices.mozgcp.net/media/uploads/products/2020-04-14-08-36-13-8dda6f.png" alt="https://assets-prod.sumo.prod.webservices.mozgcp.net/media/uploads/products/2020-04-14-08-36-13-8dda6f.png" style="zoom:40%;" /> | 自由开源浏览器，快速、安全、保护隐私，可以很方便地安装浏览器插件。 | 由于法律原因，国内无法在 Firefox 上安装广告拦截插件；有的网页不适配 Firefox；设置多而复杂；没有内置的网页翻译。 |
| Google Chrome<br />（谷歌浏览器）   | ![https://www.google.cn/chrome/static/images/chrome-logo-m100.svg](https://www.google.cn/chrome/static/images/chrome-logo-m100.svg) | 浏览器的代名词；（在国内大部分地方）纯粹快速的浏览器；外观现代简洁；快速。 | 由于不知道的原因，国内大部分地方在 Chrome 上安装插件和使用网页翻译需要额外付出努力；以及 Chrome 是被仿冒最多的浏览器之一，许多打着「AI」和「双核」浏览器的名号的仿冒浏览器会诱导下载，找到官网下载地址比较困难。 |

## 5. 链接和图片

[Markdown指南](https://www.markdownguide.org)

![图片示例](https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-nc-sa.png)

## 6. 数学公式

???+ note "注意"

    在 MathJax 中，换行符 `\\` 会被转义，故需要使用转义后的 `\\\\` 来换行公式

行内公式：$E = mc^2$

行间公式：
$$
\begin{aligned}
\frac{\partial f}{\partial x} &= 2x + y \\\\
\frac{\partial f}{\partial y} &= x + 2y
\end{aligned}
$$

复杂公式：
$$
\begin{cases}
x = r\cos\theta \\\\
y = r\sin\theta \\\\
z = r\tan\phi
\end{cases}
$$

矩阵：
$$
\begin{bmatrix}
1 & 2 & 3 \\\\
4 & 5 & 6 \\\\
7 & 8 & 9
\end{bmatrix}
$$

## 7. 任务列表

- [x] 已完成任务
- [ ] 未完成任务
- [ ] 待办事项

## 8. 卡片

<div class="grid cards" markdown>

- :fontawesome-brands-html5: __HTML__ for content and structure
- :fontawesome-brands-js: __JavaScript__ for interactivity
- :fontawesome-brands-css3: __CSS__ for text running out of boxes
- :fontawesome-brands-internet-explorer: __Internet Explorer__ ... huh?

</div>

