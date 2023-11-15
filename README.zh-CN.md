# unplugin-auto-import-antd

[English](./README.md) / 简体中文

`unplugin-auto-import-antd` 是 [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import) 的一个解析器，用于实现 antd 组件按需引入。

> 仅支持 antd v5+.

## 特性

- 支持 `Vite`, `Webpack` 等
- 支持自动引入 `antd` 组件
- 支持使用自定义前缀重命名组件
- 支持通过包的别名引入

## 安装

### npm

```bash
npm i -D unplugin-auto-import-antd unplugin-auto-import
```

### yarn

```bash
yarn add -D unplugin-auto-import-antd unplugin-auto-import
```

### pnpm

```bash
pnpm add -D unplugin-auto-import-antd unplugin-auto-import
```

### bun

```bash
bun add -D unplugin-auto-import-antd unplugin-auto-import
```

## 使用

### Vite

```ts
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import AntdResolver from 'unplugin-auto-import-antd'

export default defineConfig({
  plugins: [
    AutoImport({
      resolvers: [AntdResolver()]
    })
  ]
})
```

### Webpack

```js
// webpack.config.js
const AntdResolver = require('unplugin-auto-import-antd')

module.exports = {
  /* ... */
  plugins: [
    require('unplugin-auto-import/webpack')({
      resolvers: [AntdResolver()]
    })
  ]
}
```

### 自定义前缀

```ts
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import AntdResolver from 'unplugin-auto-import-antd'

export default defineConfig({
  plugins: [
    AutoImport({
      resolvers: [
        AntdResolver({
          prefix: 'A'
        })
      ]
    })
  ]
})
```

使用自定义前缀，如 `A`, 书写组件的方式有原本的 `Button` 变为 `AButton`。

等价于 `import { Button as AButton } from 'antd'`

### 包别名引入

```ts
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import AntdResolver from 'unplugin-auto-import-antd'

export default defineConfig({
  plugins: [
    AutoImport({
      resolvers: [
        AntdResolver({
          packageName: 'antd-v5'
        })
      ]
    })
  ]
})
```

通过别名安装 antd，如 antd-v5。

等价于 `import { Button } from 'antd-v5'`

## License

[MIT](/LICENSE) License &copy; 2023 [Bruce Song](https://github.com/recallwei)
