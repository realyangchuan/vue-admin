# PC端后台管理系统模板

技术栈：Vue3 + Pinia + Vue-Router + TypeScript + Vite

## 项目设置

```sh
# 依赖安装
npm install

# 本地编译运行开发
npm run dev

# 打包
npm run build

# 运行 ESLint 检查
npm run lint

# 运行单元测试
npm run test:unit
```

## 推荐开发工具和插件

强烈建议使用[VS Code](https://code.visualstudio.com/)开发，以下是推荐插件：

- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)：Vue项目语法提示，`.vue`文件的TypeScript支持
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## `.vue`文件的TS类型支持

TypeScript默认不能处理`.vue`文件的类型信息，所以使用`vue-tsc`代替`tsc`命令执行类型检查。
