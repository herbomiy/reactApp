#### 待完成
 
- [ ] 热替换缓存数据不刷新 ***

- [ ] react 环境拆分 - 启动配置方式执行部署开发

- [ ] 高清方案设置 - 样式初始化

[TOC]


#### 热替换 HRM
1. CLI 方式
	
```
1. 配置文件
const webpack = require('webpack');

devServer: {
    hot: true
}

plugins:[
     new webpack.HotModuleReplacementPlugin()
]

进阶：
react-hot-loader. 可以状态信息

```
2. NODE.js API 方式。server.js


#### 4. 项目结构

