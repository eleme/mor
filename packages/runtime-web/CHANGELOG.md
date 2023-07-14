# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.0.67](https://github.com/eleme/morjs/compare/v1.0.66...v1.0.67) (2023-07-13)


### Bug Fixes

* **runtime-web:** 解决 swiper item 数据更新异常以及单个 swiper-item 场景无需 autoplay 的问题 ([#74](https://github.com/eleme/morjs/issues/74)) ([5c40253](https://github.com/eleme/morjs/commit/5c402532c70aee994f821d02951c7c6c67ab28d2))


### Features

* **runtime-web:** 地图组件支持自定义样式 ([#76](https://github.com/eleme/morjs/issues/76)) ([78e92a3](https://github.com/eleme/morjs/commit/78e92a30b9bb17c82aa9547b804a934b5cadc9ac))





## [1.0.66](https://github.com/eleme/morjs/compare/v1.0.65...v1.0.66) (2023-07-10)


### Bug Fixes

* **runtime-web:** 修复地图组件 relative 布局错位问题 ([#72](https://github.com/eleme/morjs/issues/72)) ([598863b](https://github.com/eleme/morjs/commit/598863b5112b644eb701bf7ac1d7aa20d84aa497))





## [1.0.65](https://github.com/eleme/morjs/compare/v1.0.64...v1.0.65) (2023-07-07)


### Features

* **runtime-web:** caniuse 函数增加部分能力判断 ([#71](https://github.com/eleme/morjs/issues/71)) ([a45cd02](https://github.com/eleme/morjs/commit/a45cd02bb0ee7f0a3ce393504d5a94b1f3f93341))





## [1.0.62](https://github.com/eleme/morjs/compare/v1.0.61...v1.0.62) (2023-07-03)


### Features

* **runtime-web:** 元素获取适配 & 配置读取优先级调整 ([#68](https://github.com/eleme/morjs/issues/68)) ([0f4381d](https://github.com/eleme/morjs/commit/0f4381d5de409a77f93adefe4a9a668bb8473230))





## [1.0.57](https://github.com/eleme/morjs/compare/v1.0.56...v1.0.57) (2023-06-21)


### Bug Fixes

* **runtime-web:** ios 设备无法正常渲染 2.0 版本地图 ([#61](https://github.com/eleme/morjs/issues/61)) ([89be519](https://github.com/eleme/morjs/commit/89be519f2f05fba6523c3d22082675567fff776d))





## [1.0.56](https://github.com/eleme/morjs/compare/v1.0.55...v1.0.56) (2023-06-20)


### Features

* **runtime-web:** 地图重构 & 支持高级定制渲染 ([#60](https://github.com/eleme/morjs/issues/60)) ([eda6b66](https://github.com/eleme/morjs/commit/eda6b66fc8f2dd8c76e15ab881dc68cf07be8ba6))





## [1.0.47](https://github.com/eleme/morjs/compare/v1.0.46...v1.0.47) (2023-05-22)


### Features

* **runtime-web:** fields 调用和 scrollOffset,boundingClientRect 调用隔离 ([#42](https://github.com/eleme/morjs/issues/42)) ([f6d23e1](https://github.com/eleme/morjs/commit/f6d23e1accc72d1b8140ffb7c0475518ec9394b7))





## [1.0.46](https://github.com/eleme/morjs/compare/v1.0.45...v1.0.46) (2023-05-19)


### Features

* **runtime-web:** selectorQuery 方法重构 & 支持 fields 查询 ([#41](https://github.com/eleme/morjs/issues/41)) ([902ffb7](https://github.com/eleme/morjs/commit/902ffb788899425cdaf46ffaaec0fea6aea0124a))





## [1.0.45](https://github.com/eleme/morjs/compare/v1.0.44...v1.0.45) (2023-05-17)


### Bug Fixes

* **runtime-web:** swiper 默认为 inline 元素导致上下边距异常 ([#39](https://github.com/eleme/morjs/issues/39)) ([4b852c1](https://github.com/eleme/morjs/commit/4b852c153d9e0907f205c989dec7a094402ef166))


### Features

* **runtime-web:** tabbar 组件之间的切换方法由 navigateTo 切换为 switchTab 行为与小程序保持一致 ([b0f29ad](https://github.com/eleme/morjs/commit/b0f29ad8428564dbd2c6a5519b1d355937bdfbff))





## [1.0.43](https://github.com/eleme/morjs/compare/v1.0.42...v1.0.43) (2023-05-09)


### Bug Fixes

* **runtime-web:** 修复 onAppear 在某些特殊场景下可能不执行的问题 ([#37](https://github.com/eleme/morjs/issues/37)) ([1413271](https://github.com/eleme/morjs/commit/14132715b66e17beee16b6de5c437e84812ebcf0))





## [1.0.41](https://github.com/eleme/morjs/compare/v1.0.40...v1.0.41) (2023-05-05)


### Bug Fixes

* **runtime-web:** 修复父元素未完成挂载时尝试获取 DOM 节点及绑定事件可能会导致报错的问题 ([#34](https://github.com/eleme/morjs/issues/34)) ([3227eeb](https://github.com/eleme/morjs/commit/3227eeb0235a64f5f098734b952395e607e180ea))





## [1.0.40](https://github.com/eleme/morjs/compare/v1.0.39...v1.0.40) (2023-04-28)


### Features

* **runtime-web:** setClipboard 增加 queryCommand 实现方式 & 可以通过配置强切实现方式 ([#32](https://github.com/eleme/morjs/issues/32)) ([3b02ed7](https://github.com/eleme/morjs/commit/3b02ed7ba37a9950916b590246552b2fb192c4fa))





## [1.0.33](https://github.com/eleme/morjs/compare/v1.0.32...v1.0.33) (2023-04-25)


### Bug Fixes

* **runtime-web:** 提供 my.SDKVersion 支持 ([ba333b3](https://github.com/eleme/morjs/commit/ba333b33906ca801b9887e27462df595ee0bd2c4))


### Features

* **runtime-web:** getSystemInfo 接口补充 SDKVersion 版本信息 ([037eaef](https://github.com/eleme/morjs/commit/037eaef91ac7c0b82b6c533a03e5a5b95b1dd184))





## [1.0.26](https://github.com/eleme/morjs/compare/v1.0.25...v1.0.26) (2023-04-18)


### Features

* **runtime-web:** 修复转 Web 页面相对路径跳转支持 ([#20](https://github.com/eleme/morjs/issues/20)) ([c82b30d](https://github.com/eleme/morjs/commit/c82b30d34864a6f88c6bfd5c7193e8404eb6a2c9))





## [1.0.23](https://github.com/eleme/morjs/compare/v1.0.22...v1.0.23) (2023-04-14)

**Note:** Version bump only for package @morjs/runtime-web





## [1.0.17](https://github.com/eleme/morjs/compare/v1.0.16...v1.0.17) (2023-03-30)

**Note:** Version bump only for package @morjs/runtime-web





## [1.0.13](https://github.com/eleme/morjs/compare/v1.0.12...v1.0.13) (2023-03-28)


### Bug Fixes

* **runtime-web:** 修复 switchTab 无法关闭之前打开的页面 ([#8](https://github.com/eleme/morjs/issues/8)) ([ed5e632](https://github.com/eleme/morjs/commit/ed5e6325ce8e3c0e0fb1c6330486a651f4644759))





## [1.0.10](https://github.com/eleme/morjs/compare/v1.0.9...v1.0.10) (2023-03-20)


### Bug Fixes

* **runtime-web:** 修复 hidden 使用 important 修饰符导致业务对元素布局方式修改失效以及 selectQuery 结果遍历支持 ([ef0cd46](https://github.com/eleme/morjs/commit/ef0cd4666b0302102bc10713547b5d060916a9c3))





# 1.0.0 (2023-02-22)

**Note:** Version bump only for package @morjs/runtime-web
