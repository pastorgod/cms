# npm 版本冲突

## 遇到问题

```bash
npm warn ERESOLVE overriding peer dependency
npm warn While resolving: vite-plugin-inspect@0.8.9
npm warn Found: vite@7.0.5
npm warn node_modules/vite
npm warn peer vite@"^5.0.0 || ^6.0.0 || ^7.0.0" from @vitejs/plugin-vue@6.0.0
npm warn node_modules/@vitejs/plugin-vue
npm warn dev @vitejs/plugin-vue@"^6.0.0" from the root project
npm warn 4 more (vite-hot-client, vite-plugin-vue-devtools, ...)
npm warn
npm warn Could not resolve dependency:
npm warn peer vite@"^3.1.0 || ^4.0.0 || ^5.0.0-0 || ^6.0.1" from vite-plugin-inspect@0.8.9
npm warn node_modules/vite-plugin-vue-devtools/node_modules/vite-plugin-inspect
npm warn vite-plugin-inspect@"0.8.9" from vite-plugin-vue-devtools@7.7.7
npm warn node_modules/vite-plugin-vue-devtools
npm warn
npm warn Conflicting peer dependency: vite@6.3.5
npm warn node_modules/vite
npm warn peer vite@"^3.1.0 || ^4.0.0 || ^5.0.0-0 || ^6.0.1" from vite-plugin-inspect@0.8.9
npm warn node_modules/vite-plugin-vue-devtools/node_modules/vite-plugin-inspect
npm warn vite-plugin-inspect@"0.8.9" from vite-plugin-vue-devtools@7.7.7
npm warn node_modules/vite-plugin-vue-devtools
```

## 解决方案

### 手动降级vite 到 其支持的版本

```json
"devDependencies": {
"vite": "^6.3.5"
}
```

### 删除旧依赖和缓存

```bash
#rm -rf node_modules package-lock.json => linux

rd /q /s node_modules
del /q /s package-lock.json
npm cache clean --force
npm install

```
