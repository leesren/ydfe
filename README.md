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

## 生成 typedoc 注释文档

参考 https://typedoc.org/
注释写法参考： https://microsoft.github.io/tsdoc/#

```sh
yarn typedoc
```

| 名称        |    作用    | 备注                                                                   |
| :---------- | :--------: | :--------------------------------------------------------------------- |
| @param      |  参数描述  | 仅供类、接口、方法注释时使用。同一个注释块可同时出现多个 param 描述。  |
| @return     |  返回描述  | 仅供方法注释时使用。除 void 方法外其它所有方法必须有一个 return 描述。 |
| @throws     |  异常描述  | 零到多个。                                                             |
| @exception  |  异常描述  | 零到多个。                                                             |
| @author     |    作者    | 类和接口注释中必须有。可有零到多个。                                   |
| @version    |  版本描述  | 类和接口注释中必须有。零或一个。                                       |
| @see        |  参考描述  | 可有零到多个。                                                         |
| @since      |  起始版本  | 只有一个。                                                             |
| @serial     | 序列化描述 | 或@serialField 或@serialData，可有多个                                 |
| @deprecated |  废除标志  | 最多一个。                                                             |
