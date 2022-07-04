目录介绍
```
lowcode-demo
├─ package.json
├─ public
│  ├─ favicon.png
│  ├─ fixtures
│  │  └─ basic-fusion-with-single-component
│  │     ├─ meta.js
│  │     ├─ view.css
│  │     └─ view.js
│  ├─ index.ejs
│  ├─ index.html
│  ├─ mock
│  │  └─ info.json
│  ├─ mock-pages.json
│  ├─ preview.html
│  └─ schema.json
├─ scripts
│  └─ watchdog.js
├─ src
│  ├─ preview.tsx  // 预览入口
│  ├─ sample-plugins
│  │  ├─ delete-hidden-transducer
│  │  │  └─ index.ts
│  │  ├─ logo
│  │  │  ├─ index.scss
│  │  │  └─ index.tsx
│  │  ├─ scenario-switcher
│  │  │  └─ index.tsx
│  │  └─ set-ref-prop
│  │     └─ index.tsx
│  ├─ scenarios
│  │  ├─ basic-antd
│  │  │  ├─ assets.json
│  │  │  ├─ index.ts
│  │  │  ├─ plugin.tsx
│  │  │  └─ schema.json
│  │  ├─ basic-fusion
│  │  │  ├─ assets.json
│  │  │  ├─ index.ts
│  │  │  ├─ plugin.tsx
│  │  │  └─ schema.json
│  │  ├─ basic-fusion-with-single-component
│  │  │  ├─ README.md
│  │  │  ├─ assets.json
│  │  │  ├─ index.ts
│  │  │  ├─ plugin.tsx
│  │  │  └─ schema.json
│  │  ├─ custom-initialization
│  │  │  └─ index.tsx
│  │  ├─ index
│  │  │  └─ index.ts
│  │  └─ node-extended-actions
│  │     ├─ assets.json
│  │     ├─ index.ts
│  │     ├─ plugin.tsx
│  │     └─ schema.json
│  ├─ setters
│  │  ├─ behavior-setter.tsx
│  │  └─ custom-setter.tsx // 自定义的 Setter
│  └─ universal
│     ├─ assets.json
│     ├─ global.scss
│     ├─ plugin.tsx  // DEMO 设计器插件注册
│     ├─ scenarios.json
│     └─ utils.ts
```
## Low-Code Engine Demo

本 demo 是一个组合内核、setter、插件、物料的示范工程，因为未经长期生产环境打磨，可能还会有一些各个模块间结合的 bug，希望大家理解~

场景列表：

- [index](https://lowcode-engine.cn/demo/index.html)
- [basic-fusion](https://lowcode-engine.cn/demo/basic-fusion.html)（此 fusion 的元数据描述是很老的版本，只为了示意描述结构，请勿用于生产环境）
- [basic-antd](https://lowcode-engine.cn/demo/basic-antd.html)
- [formily 表单](https://lowcode-engine.cn/demo/basic-formily.html)
- [basic-fusion-with-single-component](https://lowcode-engine.cn/demo/basic-fusion-with-single-component.html)
- [custom-initialization](https://lowcode-engine.cn/demo/custom-initialization.html)
- [node-extended-actions](https://lowcode-engine.cn/demo/node-extended-actions.html)
- [next-pro](https://lowcode-engine.cn/demo/next-pro.html)
- [antd-pro-with-formily](https://lowcode-engine.cn/demo/antd-pro-with-formily.html)

更多参考资料：

- [马上玩一下](https://lowcode-engine.cn/demo/index.html)
- [低代码引擎官网](http://lowcode-engine.cn)
- [引擎主包](https://github.com/alibaba/lowcode-engine)
