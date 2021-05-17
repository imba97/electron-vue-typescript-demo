# 归档

因本项目太拉胯了，又因项目里还有一个B站的二维码登陆流程以后可以参考，就不删了，归档了

# electron vue ts 完美方案

创建`electron-vue`+`typescript`项目

请直接用`@vue/cli`+`electron-builder`

下载`@vue/cli`后，使用命令

```shell
vue create projectName
# 选择自定义配置 并选上 TypeScript
# 进入项目目录
cd projectName
# 添加 electron-builder
vue add electron-builder
```

详情：[vue-cli-plugin-electron-builder](https://github.com/nklayman/vue-cli-plugin-electron-builder)

# electron-vue-typescript-demo

该项目使用 [electron-vue](https://github.com/SimulatedGREG/electron-vue) 创建，项目`javascript`全部替换成了`typescript`

本项目用于学习交流，自带一个完善的 B 站的二维码登录（其实是懒得删）

---

# 各种功能

- `.electron-vue` webpack、electron 打包配置

- `main/index.js` electron 窗口设置

- `src/renderer/`

  - `main.ts` 程序入口
  - `enums/` 枚举类
  - `router/index.ts` 路由，vue-router typescript 版
  - `store/index.ts vuex` 引入 modules 文件夹中的 index.ts，然后把所有 modules 放进 vuex
  - `store/modules/index.ts` 导出该文件夹下其他文件，如果有新的，可以参考 User.ts 添加
  - `components/` 组件，有顶部控制栏、左侧列表、右侧还不知道干嘛用的侧边栏
  - `views/` 页面，也就是中间显示的东西，用 router 控制

- `src/types/` 类型声明，有需要可在 global.d.ts 增加类型
- `src/utils/` 工具，也会自动导出所有工具，具体详情请查看 index.ts 中的说明
