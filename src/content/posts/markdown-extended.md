---
title: Markdown扩展功能
published: 2024-05-01
updated: 2024-11-29
description: 'Markdown扩展功能“阅读更多关于Fuwari中的Markdown功能'
image: ''
tags: [演示，示例，Markdown，Fuwari]
category: '示例'
draft: false 
---

## GitHub 仓库卡片

你可以添加动态的、链接到 GitHub 仓库的卡片。在页面加载时，这些仓库的信息会通过 GitHub API 自动获取并展示。

::github{repo="Fabrizz/MMM-OnSpotify"}

使用代码创建GitHub存储库卡 `::github{repo="<owner>/<repo>"}`.

```markdown
::github{repo="saicaca/fuwari"}
```

## 注释块（Admonitions）

支持以下类型的注释块：`note`（提示）、`tip`（技巧）、`important`（重要）、`warning`（警告）、`caution`（注意）。

:::note
突出显示用户即使快速浏览时也应留意的信息。
:::

:::tip
可选信息，帮助用户更高效地完成操作。
:::

:::important
用户成功操作所必需的重要信息。
:::

:::warning
由于存在潜在风险，需要用户立即注意的重要内容。
:::

:::caution
某项操作可能带来的负面后果。
:::

### 基本语法

```markdown
:::note
突出显示用户即使快速浏览时也应留意的信息。
:::

:::tip
可选信息，帮助用户更高效地完成操作。
:::
```

### 自定义标题

注释块的标题可以自定义。

:::note[我的自定义标题]
这是一个带有自定义标题的提示。
:::

```markdown
:::note[我的自定义标题]
这是一个带有自定义标题的提示。
:::
```

### GitHub 风格语法

> [!TIP]
> [GitHub 风格的注释块语法](https://github.com/orgs/community/discussions/16925) 也同样受到支持。

```
> [!NOTE]
> GitHub语法也受支持。

> [!TIP]
> GitHub语法也受支持。
```