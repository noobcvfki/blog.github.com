---
title: Simple Guides for Fuwari
published: 2024-04-01
description: "How to use this blog template."
image: "./cover.jpeg"
tags: ["Fuwari", "Blogging", "Customization"]
category: Guides
draft: false
---

> 封面图片来源：[来源](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/208fc754-890d-4adb-9753-2c963332675d/width=2048/01651-1456859105-(colour_1.5),girl,_Blue,yellow,green,cyan,purple,red,pink,_best,8k,UHD,masterpiece,male%20focus,%201boy,gloves,%20ponytail,%20long%20hair,.jpeg)

本博客模板是使用 [Astro](https://astro.build/) 构建的。对于本指南中未提及的内容，你可以在 [Astro 官方文档](https://docs.astro.build/) 中找到更多答案。

## Front-matter of Posts

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: 这是我新的Astro博客的第一篇文章。
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
---
```

| Attribute     | Description                                                                                                                                                                                                 |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`       | 帖子的标题。                                                                                                                                                                                      |
| `published`   | 帖子发布的日期。                                                                                                                                                                            |
| `description` | 帖子的简短描述。显示在索引页面上。                                                                                                                                                   |
| `image`       | 帖子封面图片路径。<br/>1. 以 `http://` 或 `https://` 开头：使用网络图片<br/>2. 以 `/` 开头：用于 `public` 目录下的图片<br/>3. 不包含上述前缀：相对于 Markdown 文件的位置 |
| `tags`        | 帖子的标签。                                                                                                                                                                                       |
| `category`    | 帖子的分类。                                                                                                                                                                                   |
| `draft`       | 如果帖子仍处于草稿状态，则不会被显示。                                                                                                                                                    |

## 文件放在哪里



你的文章文件应放置在 `src/content/posts/` 目录下。你也可以创建子目录，以便更好地组织文章和资源文件。

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```
