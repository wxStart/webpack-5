### 五大核心概念

##### entry 入口

##### output 出口

1. path 绝对的路径
2. filename 输出文件名字

##### module 模块 主要是 各种 loader 对文件进行处理

- rules [{test:/\.js$/,loader:'babel-loader'}]

##### plugins 插件

##### mode

- none
- development 开发模式
- production 生产模式

### 代码检测 eslint 的使用

`npm install eslint-webpack-plugin eslint --save-dev`

### 代码编译

`npm install -D babel-loader @babel/core @babel/preset-env webpack`

### 热更新

### Cache 缓存
