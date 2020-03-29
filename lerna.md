# lerna 使用

```sh
# 安装 lerna
npm install -g lerna

# 初始化仓库
lerna init

```

## 添加包

```sh
lerna create [包名称]

```

## 安装和更新 npm 包

```sh

lerna add [包名称] --scope [子包名称]

```

如：

`lerna add radio-research --scope table-info`

如果 `radio-research` 更新了，可以使用 `lerna updated` 命令进行更新

## 单独打包命令

```sh
#  father test 必须要有 测试文件才能执行成功，这里指定了 @ydfe/tools-util 这个包
lerna exec father test --scope @ydfe/tools-util

```
