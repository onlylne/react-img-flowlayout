# react-img-flowlayout
基于react的图片流式布局组件，瀑布流自适应布局

### 本地演示

```
git clone `project path`
```

```
npm i
```

```
yarn start OR npm run start
```

### 描述

umijs 快速搭建的架子
图片是百度图片找的几个地址，简单模拟了一下加载（没有网络请求，slice分段了一下），图片地址在src/pages/index.tsx的imgSource中，加载不出来请换下地址。
<br />
图片在渲染后即onLoad执行后才会加载下一张图片，原因是因为不知道图片高度，只有加载后才能获取到列容器的高度，所以图片过大或网络差的话可能会加载的很慢。
<br />
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


![Image](https://github.com/onlylne/react-img-flowlayout/blob/master/src/assets/img.png)
