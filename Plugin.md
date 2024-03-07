### Plugin

webpack 在编译的过程中，会触发一些类的 Tapable 事件

#### 注册时间

1. tap： 可以注册同步钩子和异步钩子
2. tapAsync： 回调方式注册异步钩子
3. tapPromise： Promise 方式注册异步钩子

#### Compiler

compiler 对象保存着完整的 webpake 环境配置，每次启动都是独立无二的，仅仅会创建一次的对象

1. `compiler.options`: 配置文件 loaders，entry，output，plugin 等等
2. `compiler.inputFileSystem`和 `compiler.outputFileSystem`：进行文件操作，相当于 node 中的 fs
3. `compiler.hooks`:注册 tapable 事件

#### Compiler 钩子类型
1. SyncHook ： 同步钩子
2. AsyncSeriesHook： 异步串行
3. AsyncParallelHook： 异步并行
4. SyncBailHook： 同步 串行钩子，会根据前一个钩子的返回决定是否执行  undefined为不执行

#### Compilation

compilation 对象代表一次资源的构建，compilation 实例可以访问所有的没款和依赖

1. `compilation.modules`:可以访问的所有模块，每个打包的文件都是一个模块
2. `compilation.chunks`: chunk 是多个 modules 组成的一个代码块，入口是一个 chunk，通过代码切割模块又是另一个 chunk
3. `compilation.assets`： 可以访问本次打包生成所有文件的结果
4. `compilation.hooks`： 注册不同的 hook 回调

#### 实现一个插件

执行一个顺序

1.  webpack 加载完 webpack.config.js 中所有的配置。此时就会调用 new TestPlugin()
2.  webpack 创建 compiler 对象
3.  遍历 plugins 中的所有插件，调用插件的 apply 方法
4.  执行剩下的编程流程 （触发各个 hooks 事件）      


实现一个插件一般是实现一个类，类里面要实现个`apply`方法。

