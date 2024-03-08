
### BannerWebpackPlugin
1. 给打包输出文件添加注释

2. 开发思路
+ 需要在打包输出前添加注释: 需要在`compiler.hooks.emit`钩子中处理，它是打包输出前触发
+ 如何获取打包输出的资源: `compilation.assets`可以获取所有即将输出的资源文件
