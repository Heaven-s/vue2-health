# 绩效考核 V2.0

> 绩效考核前端界面

## using :

- vue + elementUI
- axios
- echart
- moment
- less


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9800
npm run dev

# build for production with minification
npm run build

```

-----------------------


## 目录说明

```bash
.
├── README.md
├── .babelrc                # Babel 配置文件
├── .gitignore              # Git 忽略文件列表
├── package.json            # 描述文件
├── pm2.json                # pm2 部署示例文件
├── src                     # 源代码目录，编译后目标源代码位于 dist 目录
│   ├── main.js             # 入口文件
│   ├── App.vue             # 主组件
│   ├── utils               # 工具目录
│       └── index.js        # 公共函数等
│       └── http.js         # 请求函数封装
│       └── filters.js      # 公共过滤器
│   ├── store               # vuex
│   ├── router              # 路由
│   ├── pages               # 页面文件
│   ├── components          # 公共组件
│   └── assets              # 静态文件
└── build                   # 构建文件
└── config                  # 构建配置

```
