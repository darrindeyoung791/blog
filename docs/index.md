# 欢迎访问 Darrin DeYoung 的笔记本

For full documentation visit [mkdocs.org](https://www.mkdocs.org).

## Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.

## 示例文本

### 1. 基础文本格式

这是**粗体**文本，这是*斜体*文本，这是***粗斜体***文本。
这是`行内代码`，这是~~删除线~~文本。

### 2. 列表示例

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

### 3. 引用和代码块

> 这是一段引用文本
> 多行引用
>> 嵌套引用

```python
def hello_world():
    print("Hello, World!")
```

### 4. 表格示例

| 姓名 | 年龄 | 城市 |
|------|------|------|
| 张三 | 25   | 广州 |
| 李四 | 28   | 上海 |

### 5. 链接和图片

[Markdown指南](https://www.markdownguide.org)

![图片示例](https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-nc-sa.png)

### 6. 数学公式

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

### 7. 任务列表

- [x] 已完成任务
- [ ] 未完成任务
- [ ] 待办事项

