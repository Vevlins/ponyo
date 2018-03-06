# ponyo
这是众多前端样式库中的一个，没什么特色，主要用来学习css模块化和常见web组件的样式。如果你有兴趣写一个自己的样式库，那么不妨读一读，项目结构和代码都比较清晰，并且我准备写几篇博文来介绍下如何一步一步建立起来这个样式库。

## demo
https://vevlins.github.io/ponyo
## 简介
ponyo是为了熟悉scss和常见web组件的样式控制而产生的一个练习项目。目前包括alert、article、modal等组件样式和button、table等基础标签样式，压缩后的大小为25kb。

采用scss+pug+gulp进行编写和管理。

## 项目结构

```
├── LICENSE
├── README.md
├── dist
│   ├── css
│   │   ├── ponyo.css
│   │   └── ponyo.min.css
│   ├── example
│   │   └── index.html
│   └── file.js
├── docs
│   ├── index.html
│   └── ponyo.min.css
├── gulpfile.js
├── package-lock.json
├── package.json
└── src
    ├── css
    │   ├── base
    │   │   ├── base.scss
    │   │   ├── normalize.scss
    │   │   ├── print.scss
    │   │   └── typography.scss
    │   ├── component
    │   │   ├── alert.scss
    │   │   ├── annimation.scss
    │   │   ├── article.scss
    │   │   ├── modal.scss
    │   │   ├── navbar.scss
    │   │   ├── notice.scss
    │   │   ├── pagination.scss
    │   │   ├── panel.scss
    │   │   ├── progress.scss
    │   │   ├── tab.scss
    │   │   └── tip.scss
    │   ├── element
    │   │   ├── badge.scss
    │   │   ├── button.scss
    │   │   ├── form.scss
    │   │   ├── icon.scss
    │   │   ├── img.scss
    │   │   ├── list.scss
    │   │   └── table.scss
    │   ├── layout
    │   │   ├── grid.scss
    │   │   └── util.scss
    │   ├── ponyo.scss
    │   └── variable.scss
    ├── example
    │   └── index.pug
    └── js
        ├── component
        │   ├── alert.js
        │   ├── collapse.js
        │   ├── modal.js
        │   ├── progress.js
        │   └── tip.js
        └── ponyo.js
```
