# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.0.68](https://github.com/eleme/morjs/compare/v1.0.67...v1.0.68) (2023-07-14)


### Features

* **plugin-compiler:** 新增多端组件构建模式支持 ([#75](https://github.com/eleme/morjs/issues/75)) ([3307838](https://github.com/eleme/morjs/commit/3307838d278607d300c390877abe48e40f117acd))
* **runtime-base:** 新增 hooks 的 pause、resume 方法，用于暂停/恢复部分 hooks 生命周期的执行 ([#77](https://github.com/eleme/morjs/issues/77)) ([aa712eb](https://github.com/eleme/morjs/commit/aa712ebf2603ecd5b1340f77c0d79e2e709476ad))





## [1.0.67](https://github.com/eleme/morjs/compare/v1.0.66...v1.0.67) (2023-07-13)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.66](https://github.com/eleme/morjs/compare/v1.0.65...v1.0.66) (2023-07-10)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.65](https://github.com/eleme/morjs/compare/v1.0.64...v1.0.65) (2023-07-07)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.64](https://github.com/eleme/morjs/compare/v1.0.63...v1.0.64) (2023-07-04)


### Features

* **plugin-compiler:** 优化分包和插件编译的 getApp 注入逻辑，避免在支付宝小程序上的 externals 生效问题 ([#70](https://github.com/eleme/morjs/issues/70)) ([be79063](https://github.com/eleme/morjs/commit/be790631943efc328145353945dde8c74edf44a5))





## [1.0.63](https://github.com/eleme/morjs/compare/v1.0.62...v1.0.63) (2023-07-04)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.62](https://github.com/eleme/morjs/compare/v1.0.61...v1.0.62) (2023-07-03)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.61](https://github.com/eleme/morjs/compare/v1.0.60...v1.0.61) (2023-06-28)


### Bug Fixes

* **plugin-compiler:** 修复异步 require 或 require.async 的参数被跳过解析可能引起运行时报错的问题 ([#66](https://github.com/eleme/morjs/issues/66)) ([50f29b7](https://github.com/eleme/morjs/commit/50f29b7065864e35847134e16f9ef254c6f6c7d4))





## [1.0.59](https://github.com/eleme/morjs/compare/v1.0.58...v1.0.59) (2023-06-25)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.58](https://github.com/eleme/morjs/compare/v1.0.57...v1.0.58) (2023-06-21)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.57](https://github.com/eleme/morjs/compare/v1.0.56...v1.0.57) (2023-06-21)


### Features

* **plugin-compiler:** 优化编译相关全局文件名称生成逻辑，允许配置后缀名以避免冲突 ([aae1dad](https://github.com/eleme/morjs/commit/aae1dad13864ee3e4a58786870435a36e4f581d5))
* **plugin-compiler:** 完善自定义入口配置文件的解析逻辑，允许指定为非源码目录的文件 ([fb7610c](https://github.com/eleme/morjs/commit/fb7610c7324c9833296497cddc71246c3c458d08))





## [1.0.56](https://github.com/eleme/morjs/compare/v1.0.55...v1.0.56) (2023-06-20)


### Features

* **plugin-compiler:** 优化项目配置文件载入逻辑，不需要输出项目配置文件时跳过查找 ([a4cda13](https://github.com/eleme/morjs/commit/a4cda13f21690bd2be6c3ebe1da730d6fc813bf0))





## [1.0.55](https://github.com/eleme/morjs/compare/v1.0.54...v1.0.55) (2023-06-13)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.54](https://github.com/eleme/morjs/compare/v1.0.53...v1.0.54) (2023-06-09)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.53](https://github.com/eleme/morjs/compare/v1.0.52...v1.0.53) (2023-06-07)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.51](https://github.com/eleme/morjs/compare/v1.0.50...v1.0.51) (2023-06-02)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.50](https://github.com/eleme/morjs/compare/v1.0.49...v1.0.50) (2023-05-31)


### Features

* **plugin-compiler-bytedance:** 新增抖音分包异步化编译支持 ([#46](https://github.com/eleme/morjs/issues/46)) ([6e2ede2](https://github.com/eleme/morjs/commit/6e2ede2782bdbdc259d81deb603fccabc3f8f136))





## [1.0.49](https://github.com/eleme/morjs/compare/v1.0.48...v1.0.49) (2023-05-30)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.48](https://github.com/eleme/morjs/compare/v1.0.47...v1.0.48) (2023-05-23)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.47](https://github.com/eleme/morjs/compare/v1.0.46...v1.0.47) (2023-05-22)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.46](https://github.com/eleme/morjs/compare/v1.0.45...v1.0.46) (2023-05-19)


### Features

* **runtime-mini:** 对齐最新 lifetimes 的官方功能，优先使用官方提供的 lifetimes 方法，兜底使用 mor 的自实现 ([#38](https://github.com/eleme/morjs/issues/38)) ([0044d4a](https://github.com/eleme/morjs/commit/0044d4a8cc86fc619c505f664d098c033fb7d8a7))





## [1.0.45](https://github.com/eleme/morjs/compare/v1.0.44...v1.0.45) (2023-05-17)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.44](https://github.com/eleme/morjs/compare/v1.0.43...v1.0.44) (2023-05-12)


### Bug Fixes

* **plugin-compiler:** 修复 web 编译在生产模式下 css 文件可能未被压缩的问题 ([ed509e4](https://github.com/eleme/morjs/commit/ed509e4948025bcb24f76114e1e719a10302c031))





## [1.0.43](https://github.com/eleme/morjs/compare/v1.0.42...v1.0.43) (2023-05-09)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.42](https://github.com/eleme/morjs/compare/v1.0.41...v1.0.42) (2023-05-05)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.41](https://github.com/eleme/morjs/compare/v1.0.40...v1.0.41) (2023-05-05)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.40](https://github.com/eleme/morjs/compare/v1.0.39...v1.0.40) (2023-04-28)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.39](https://github.com/eleme/morjs/compare/v1.0.38...v1.0.39) (2023-04-26)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.38](https://github.com/eleme/morjs/compare/v1.0.37...v1.0.38) (2023-04-26)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.37](https://github.com/eleme/morjs/compare/v1.0.36...v1.0.37) (2023-04-26)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.36](https://github.com/eleme/morjs/compare/v1.0.35...v1.0.36) (2023-04-26)


### Bug Fixes

* **plugin-compiler:** 修复模版解析器处理多端编译时 attrName 可能无值导致逻辑错误的问题 ([920249f](https://github.com/eleme/morjs/commit/920249f0b2637751a20615e3db8ae448fded77be))


### Features

* **plugin-compiler:** 完善 processNodeModules 对组件库的解析逻辑支持 ([2b33ef1](https://github.com/eleme/morjs/commit/2b33ef1acfc42960c0ee9cb9813f92fd22e936e3))





## [1.0.35](https://github.com/eleme/morjs/compare/v1.0.34...v1.0.35) (2023-04-26)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.34](https://github.com/eleme/morjs/compare/v1.0.33...v1.0.34) (2023-04-25)


### Features

* **plugin-compiler:** 优化 processNodeModules 配置开启后对组件库的转端编译支持 ([fcacc95](https://github.com/eleme/morjs/commit/fcacc952f8d18ddc530d0335d41d2217b89c4cb0))





## [1.0.33](https://github.com/eleme/morjs/compare/v1.0.32...v1.0.33) (2023-04-25)


### Bug Fixes

* **plugin-compiler:** 修复运行时自动注入可能会导致转 Web 运行时加载时机错误的问题 ([aad48e9](https://github.com/eleme/morjs/commit/aad48e9ecb8b299b7b9761f3a9483ee33ba7ab6f))





## [1.0.32](https://github.com/eleme/morjs/compare/v1.0.31...v1.0.32) (2023-04-21)


### Bug Fixes

* **plugin-compiler:** 修复全局组件注入可能不生效的问题 ([3fda777](https://github.com/eleme/morjs/commit/3fda777afb2dc2ec2d11bc3c2e2ff63b2b95c1e4))
* **plugin-compiler:** 修复提取内联 sjs 内容时文件后缀错误以及未执行 sjsParser 的问题 ([3fb9971](https://github.com/eleme/morjs/commit/3fb9971f41ea00b40bbc0f9eb7691ba5a6a629ca))





## [1.0.31](https://github.com/eleme/morjs/compare/v1.0.30...v1.0.31) (2023-04-21)


### Bug Fixes

* **plugin-compiler:** 修复样式文件如果传入 null 或 undefined 会导致 postcss 报错的问题 ([0d0ce21](https://github.com/eleme/morjs/commit/0d0ce211e1ec5cb49bfcf05083ff8263d5f23f81))





## [1.0.30](https://github.com/eleme/morjs/compare/v1.0.29...v1.0.30) (2023-04-21)


### Bug Fixes

* **plugin-compiler:** 修复 getApp 在分包和插件场景下注入时 export default 导致无法被 commonjs 规范的文件正确引用的问题 ([f47a2c5](https://github.com/eleme/morjs/commit/f47a2c5ed3779daedf055355280b841c2aeee647))


### Features

* **plugin-compiler:** 新增编译时自动检测运行时入口函数和 sourceType 类型是否匹配 ([#22](https://github.com/eleme/morjs/issues/22)) ([1096bad](https://github.com/eleme/morjs/commit/1096bad220a1f4807bf657755b18544a241fb39f))





## [1.0.27](https://github.com/eleme/morjs/compare/v1.0.26...v1.0.27) (2023-04-19)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.26](https://github.com/eleme/morjs/compare/v1.0.25...v1.0.26) (2023-04-18)


### Bug Fixes

* **plugin-compiler:** 修复开启 processNodeModules 时错误将 runtime-base 中的接口转端从而引发报错的问题 ([f7fd9db](https://github.com/eleme/morjs/commit/f7fd9dbb0bb0cff69c0babdf0e07ad95f6f4c867))





## [1.0.23](https://github.com/eleme/morjs/compare/v1.0.22...v1.0.23) (2023-04-14)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.22](https://github.com/eleme/morjs/compare/v1.0.21...v1.0.22) (2023-04-13)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.21](https://github.com/eleme/morjs/compare/v1.0.20...v1.0.21) (2023-04-13)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.20](https://github.com/eleme/morjs/compare/v1.0.19...v1.0.20) (2023-04-11)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.19](https://github.com/eleme/morjs/compare/v1.0.18...v1.0.19) (2023-03-31)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.18](https://github.com/eleme/morjs/compare/v1.0.17...v1.0.18) (2023-03-31)


### Features

* **plugin-compiler:** 优化幽灵依赖和自动注入功能兼容性 ([e5f97e3](https://github.com/eleme/morjs/commit/e5f97e38787a10c3f780e1b0b3a2931d5a0ef4fe))





## [1.0.17](https://github.com/eleme/morjs/compare/v1.0.16...v1.0.17) (2023-03-30)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.16](https://github.com/eleme/morjs/compare/v1.0.15...v1.0.16) (2023-03-29)


### Features

* **plugin-compiler:** 添加幽灵依赖检测功能 ([#7](https://github.com/eleme/morjs/issues/7)) ([9899827](https://github.com/eleme/morjs/commit/989982731d490922bc8f7dbc272ce63461693a28))





## [1.0.15](https://github.com/eleme/morjs/compare/v1.0.14...v1.0.15) (2023-03-28)


### Bug Fixes

* **plugin-compiler:** 修复开启 importHelpers 可能失败的问题 ([56a662e](https://github.com/eleme/morjs/commit/56a662e6bfbf5df1d930deb65ddfba2ca738b3a8))





## [1.0.14](https://github.com/eleme/morjs/compare/v1.0.13...v1.0.14) (2023-03-28)


### Features

* **plugin-compiler:** 完善小程序转端运行时自动注入逻辑和兜底检查支持 ([433d43c](https://github.com/eleme/morjs/commit/433d43c85931c93dd05b60065e4dbaa30896fbb8))





## [1.0.13](https://github.com/eleme/morjs/compare/v1.0.12...v1.0.13) (2023-03-28)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.12](https://github.com/eleme/morjs/compare/v1.0.11...v1.0.12) (2023-03-28)


### Features

* **plugin-compiler:** 完善 transform 编译支持以及允许通过 customEntries 添加额外需要编译的页面或组件 ([82fecc5](https://github.com/eleme/morjs/commit/82fecc524cf87534d213e065c07423133aefe88c))
* **plugin-compiler:** consumes 和 shared 配置增加别名配置支持 ([fb955ad](https://github.com/eleme/morjs/commit/fb955ad9f0bd964e06357add616e53561dba1190))





## [1.0.10](https://github.com/eleme/morjs/compare/v1.0.9...v1.0.10) (2023-03-20)


### Bug Fixes

* **plugin-compiler:** 修复 esm 版本的运行时无法被正确注入小程序转端能力支持的问题 ([b97071d](https://github.com/eleme/morjs/commit/b97071dfc01f39cdf2acf1dd4c99399b06345ef8))





## [1.0.9](https://github.com/eleme/morjs/compare/v1.0.8...v1.0.9) (2023-03-17)


### Bug Fixes

* **plugin-compiler:** 修复由于 peerDependencies 导致的 webpack 多实例问题 ([#4](https://github.com/eleme/morjs/issues/4)) ([323b70b](https://github.com/eleme/morjs/commit/323b70b7826650fb3f90d2efa88d0215fee62da6))





## [1.0.8](https://github.com/eleme/morjs/compare/v1.0.7...v1.0.8) (2023-03-15)


### Bug Fixes

* **plugin-compiler:** fix case where alias is an empty object ([#5](https://github.com/eleme/morjs/issues/5)) ([f1fec85](https://github.com/eleme/morjs/commit/f1fec8522bc9b832f025c67c0d6733960e2f0a83))





## [1.0.7](https://github.com/eleme/morjs/compare/v1.0.6...v1.0.7) (2023-03-10)


### Bug Fixes

* **plugin-compiler:** 修复同一个项目中混用支付宝或微信 DSL 可能会导致样式冲突的问题 ([4f0577a](https://github.com/eleme/morjs/commit/4f0577a1a248256c167df5f9dc1d72a2340b73fa))





## [1.0.6](https://github.com/eleme/morjs/compare/v1.0.5...v1.0.6) (2023-03-10)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.5](https://github.com/eleme/morjs/compare/v1.0.4...v1.0.5) (2023-03-10)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.4](https://github.com/eleme/morjs/compare/v1.0.3...v1.0.4) (2023-03-09)

**Note:** Version bump only for package @morjs/plugin-compiler





## [1.0.3](https://github.com/eleme/morjs/compare/v1.0.2...v1.0.3) (2023-03-07)


### Bug Fixes

* **plugin-compiler:** 修复错误将 npm 组件中样式文件作为普通样式文件解析的问题 ([de6935e](https://github.com/eleme/morjs/commit/de6935e03634383283240e4924d610192b506a8f))





## [1.0.2](https://github.com/eleme/morjs/compare/v1.0.1...v1.0.2) (2023-03-06)


### Bug Fixes

* **plugin-compiler:** transform 编译模式下允许找不到 npm 中的多端组件 ([4cef590](https://github.com/eleme/morjs/commit/4cef5901625070da88067a1973d65b2b4ab36dbb))





## [1.0.1](https://github.com/eleme/morjs/compare/v1.0.0...v1.0.1) (2023-02-27)


### Bug Fixes

* **plugin-compiler:** 修复 getApp 注入逻辑中 getLaunchOptionsSync 可能不是一个函数的问题 ([d2a3ef9](https://github.com/eleme/morjs/commit/d2a3ef93971845c17a05245eeaae66a7290fd1e3))





# 1.0.0 (2023-02-22)

**Note:** Version bump only for package @morjs/plugin-compiler
