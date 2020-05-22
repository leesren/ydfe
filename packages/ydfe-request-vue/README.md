# vue 请求工具库

通用的前端请求库，基于 vue

如果需要全局的提示 ，比如 `loading` ，和 `Notice`， 可以向 `vue` 原型注入。比如 `iview` 的

## 安装配置

```js
import { Notice, Spin } from 'iview';
Vue.prototype.$Notice = Notice;
Vue.prototype.$Spin = Spin;
```

```js
import request from 'ydfe-request-vue';

// // 请求发出前处理，如果需要改变参数或Header，请在此修改
// request.hooks.beforeRequest = config => {
//     return config;
// };

// // 收到相应后处理，如果需要改变数据，请在此修改
// request.hooks.beforeSuccess = res => {
//     return res;
// };

Vue.use(request);
```

## 使用

```tsx
// post
this.$request({
  url: '/api/table/post',
  method: 'post',
  // 请求数据时展示全局loading
  showLoading: true,
  data: {
    name: 'dev',
    dev: true,
  },
}).then(function() {});

// get
this.$request({
  url: '/api/table/get',
  method: 'get',
  params: {
    name: 'dev',
    dev: true,
  },
}).then(function(data) {});

// 直接调用get、post方法
this.$request
  .get('/api/table/get', {
    params: {
      name: 'dev',
      dev: true,
    },
  })
  .then(function(data) {});

this.$request
  .post('/api/table/post', {
    data: {
      name: 'dev',
      dev: true,
    },
  })
  .then(function(data) {});

// 常规使用
let res = await this.$request(config);
```
