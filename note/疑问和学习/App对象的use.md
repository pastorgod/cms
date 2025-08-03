# App对象的use

App.use 传入一个安装函数，安装函数符合 函数头(app,...):App

所以，自己写个安装函数，可以在main.ts中安装别的插件，代码简洁

```ts
App.use =>
use<Options>(plugin: Plugin<Options>, options: NoInfer<Options>): this; =>

plugin =>
export type Plugin<Options = any[], P extends unknown[] = Options extends unknown[] ? Options : [Options]> = FunctionPlugin<P> | ObjectPlugin<P>;

FunctionPlugin =>
export type FunctionPlugin<Options = any[]> = PluginInstallFunction<Options> & Partial<ObjectPlugin<Options>>;

PluginInstallFunction =>
type PluginInstallFunction<Options = any[]> = Options extends unknown[] ? (app: App, ...options: Options) => any : (app: App, options: Options) => any;
```
