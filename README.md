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