# react-img-flowlayout
基于react的图片流式布局组件

### 本地演示
git clone 'project path'

```
npm i
```

```
yarn start OR npm run start
```

### 描述

umijs 快速搭建的架子
图片是百度图片找的几个地址，简单模拟了一下加载（没有网络请求，slice分段了一下），图片地址在src/pages/index.tsx的imgSource中，加载不出来请换下地址。
<br/>
组件在src/components中

### 说明

| 属性           | 说明       | 类型                                 |
|----------------|------------|--------------------------------------|
| containerWidth | 容器的宽度 | string 默认‘100%’ 接收'100px', '100vw', '100%' |
| containerHeight | 容器的高度 | string 默认‘100vh’ 接收'100vh', '100px' |
| columns | 列数 | number |
| gutter | 列间距 | number 非必传 默认4 |
| imgMgb | 图片下边距 | number 非必传 默认4 |
| toBottom | 滚动到底部的回调 | void 非必传 |
| dataSource | 图片资源 | Array&lt;string&gt; |

