# unplugin-auto-import-antd

English / [简体中文](./README.zh-CN.md)

`unplugin-auto-import-antd` is a resolver for [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import) that enables on-demand importing of antd components.

> Only support antd v5+.

## Features

- Support `Vite`, `Webpack` and more
- Automatically imports components from `antd`
- Support custom prefix for components
- Support package alias import

## Installation

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

## Usage

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

### Using custom prefix

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

If specify a custom prefix，such as `A`, the way of writing components should changed from original `Button` to `AButton`.

Equivalent to `import { Button as AButton } from 'antd'`.

### Using package alias

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

Install `antd` via an alias, such as `antd-v5`.

Equivalent to `import { Button } from 'antd-v5'`.

## License

[MIT](/LICENSE) License &copy; 2024 [Bruce Song](https://github.com/recallwei)
