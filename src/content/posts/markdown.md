---
title: Markdown 示例
published: 2023-10-01
description: 一篇简单的 Markdown 博客文章示例。
tags: [Markdown, 博客写作, 示例]
category: 示例
draft: false
---

# 一级标题

段落之间用一个空行分隔。

第二段。_斜体_、**粗体** 和 `等宽字体`。项目符号列表如下：

- 这个
- 那个
- 另一个

请注意，--- 不考虑星号 --- 实际文本从第4列开始。

> 引用块是这样写的：
>
> 它们可以包含多个段落，
> 如果你愿意的话。

使用三个短横线表示破折号（em-dash），两个短横线表示范围（例如，“它在第12--14章中都有提到”）。三个点 ... 将会被转换为省略号。Unicode 是被支持的。☺


## 二级标题

这是一个编号列表：

1. 第一个条目
2. 第二个条目
3. 第三个条目

再次注意实际文本是如何从第4列开始的（即距离左侧4个字符的位置）。下面是一个代码示例：

    # 让我再强调一遍 ...
    for i in 1 .. 10 { do-something(i) }

正如你可能猜到的那样，缩进了4个空格。顺便说一句，除了缩进代码块，你也可以使用界定符来包裹代码块，如果你喜欢：

```
define foobar() {
    print "欢迎来到风味国度！";
}
```

（这会让复制和粘贴更加方便）。你还可以选择性地标记这个代码块，让 Pandoc 对其进行语法高亮：

```python
import time
# 快速地数到十！
for i in range(10):
    # （但别太快）
    time.sleep(0.5)
    print(i)
```

### 三级标题

Now a nested list:

1. 首先，准备好这些材料：

    - 胡萝卜
    - 芹菜
    - 扁豆

2. 煮沸一些水。

3. 把所有东西倒进锅里，并按照以下步骤操作：

        找到木勺  
        揭开锅盖  
        搅拌  
        盖上锅盖  
        小心地把木勺架在锅柄上  
        等待10分钟  
        返回第一步（或者完成后关闭火源）

    切勿碰倒木勺，否则会掉下来。

再次注意文本始终对齐在4个空格的缩进位置（包括最后一行，它继续了上面的第3项）。

这是指向[一个网站](http://foo.bar)的链接, 一个[本地文档](local-doc.html)的链接, 还有一个指向当前文档中[某个章节标题](#an-h2-header). 这里还有一个脚注 [^1].

[^1]: 脚注写在这里

Tables can look like this:

size material color

---

9 leather brown

10 hemp canvas natural

11 glass transparent

Table: Shoes, their sizes, and what they're made of

(The above is the caption for the table.) Pandoc also supports
multi-line tables:

---

keyword text

---

red Sunsets, apples, and
other red or reddish
things.

green Leaves, grass, frogs
and other things it's
not easy being.

---

A horizontal rule follows.

---

这是一个定义列表：

苹果
: 适合做苹果酱。
橙子
: 柑橘类水果!
西红柿
: “tomatoe”这个词里没有“e”。

同样，文本缩进了4个空格。（每个术语/定义之间插入一个空行可以让格式更清晰。）


内联数学公式可以这样写： $\omega = d\phi / dt$. 显示公式应单独一行，并用双美元符号包围：

$$I = \int \rho R^{2} dV$$

$$
\begin{equation*}
\pi
=3.1415926535
 \;8979323846\;2643383279\;5028841971\;6939937510\;5820974944
 \;5923078164\;0628620899\;8628034825\;3421170679\;\ldots
\end{equation*}
$$

请注意，你可以使用反斜杠转义任何你想原样显示的标点符号，例如：\`foo`、\*bar* 等。
