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

## vscode Debug TypeScript

- 新建 `.vscode/launch.json` 文件, 添加配置

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Current TS File",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceRoot}",
      "protocol": "inspector",
      "runtimeArgs": ["-r", "ts-node/register"],
      "args": ["${workspaceFolder}/packages/time-util/src/utils.ts", "NODE_ENV='development'"],
      "outFiles": ["./dist"]
    }
  ]
}
```

- 修改 `args` 的路径，debug 你想要的文件

- 然后， `f5` 调试
