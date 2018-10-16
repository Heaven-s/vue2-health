# 开发者的约定于规范

## 目录 :

- 模块定义
- 目录结构
- 常用命名约定
- 函数常用命名
- 注释

### 模块定义

##### 组件内函数key约定顺序: components, data, computed, methods, 钩子函数

```html

<style lang="less" scoped>
</style>

<template>
  <div>test</div>
</template>
<script>

export default {
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  mounted () {
  }
}
</script>

```

### 目录结构

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
-----------------------


### 常用命名约定

    全部：all 
    列表：list
    详情：item 
    分页：pege
    页头：header
    页脚：footer 
    标题：title   
    标志：logo 
    侧栏：side-bar
    外套：wrap 
    广告：banner 
    导航：nav 
    子导航：sub-nav 
    菜单：menu 
    子菜单：sub-menu 
    搜索：search 
    滚动：scroll 
    页面主体：main 
    内容：content 
    标签页：tab 
    文章列表：list 
    提示信息：msg 
    小技巧：tips 
    栏目标题：title 
    服务：service 
    热点：hot 
    新闻：news 
    下载：download 
    注册：regsiter 
    状态：status 
    按钮：btn 
    投票：vote 
    合作伙伴：partner 
    版权：copyright 

### 函数常用命名

| 动词 | 含义 | 返回值 |
| ------ | ------ | ------ |
| can | 判断是否可执行某个动作 ( 权限 )	函数返回一个布尔值。 | true：可执行；false：不可执行 |
| has | 判断是否含有某个值	函数返回一个布尔值。 | true：含有此值；false：不含有此值 |
| is | 判断是否为某个值函数返回一个布尔值。 | true：为某个值；false：不为某个值 |
| get | 获取某个值 | 函数返回一个非布尔值 |
| add | 添加 | 添加成功返回对应添加对象 |
| update | 更新 | 更新后返回对应的对象 |
| delete | 删除 | true：删除成功；false：删除失败 |

### 注释

##### 每个函数都应该带有说明
```javascript
    
    export default {
      /**
      * 添加函数
      * @param params
      * @returns {Promise<*>}
      */
      async add (params) {
        return await model.add(params)
      }
    }
    
```

##### 每块逻辑性代码都该带有注释
```javascript
    
    {
      // 如果是负责人的话，则删除
      if (isOwner) {
        return deleteItem()
      }
      // 否则提示不能删除
      msg('不能删除')
    }
    
```
