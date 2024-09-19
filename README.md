# Fan Assets

### Install

```ssh
// Gitee
pnpm add git+https://gitee.com/thiszhong/fan-assets.git#v0.1.0

// Github
pnpm install git+https://github.com/FanConsole/fan-assets.git#v0.1.0
```

### 使用

#### 配置 URL 源

```js
// 对于Vite，vite.config.ts。其他项目类似

// 以url方式使用的话需要先配置源域名，定义在全局变量
export default defineConfig({
	// ...
	define: {
		__FAN_ASSETS_ORIGIN__: JSON.stringify('https://资源域名.com')
	}
	// ...
})
```

#### 图标

```js
import { locationCircleFilled, encodeSvg } from 'fan-assets'

<FanIcon :name="encodeSvg(locationCircleFilled)" />
```

#### 图片

```js
import { imgEmptyBox } from 'fan-assets'

<img :src="imgEmptyBox" alt="" />
```
