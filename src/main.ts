import { createApp } from "vue"
import Antd from "ant-design-vue"
import App from "./App.vue"
import Router from "./router"
import "ant-design-vue/dist/antd.css"
import "./index.css"

createApp(App)
  .use(Antd)
  .use(Router)
  .mount("#app")
