# 介绍

ydfe 常用工具库

- lerna 包管理
- typescript 编写
- father 打包
- 单元测试、代码覆盖率
- vscode 调试

## 安装

```sh

# 需要全局安装 lerna (勒纳)
npm install -g lerna

# 安装依赖
lerna bootstrap

# 单独某个库依赖
lerna add [包名称] --scope [packages名称]
# 如：
lerna add lodash --scope ydfe
# 清空所有的 node_modules
lerna clean

# 打包
lerna exec father build

# 为单个package 打包
lerna exec father build --scope ydfe

# 发布
# 需要登录 npm
npm login
lerna publish
```
