import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "vxe-pc-ui/lib/style.css";
import "vxe-table/lib/style.css"; // 引入样式
import 'ant-design-vue/dist/antd.css'
import VXETable from "vxe-table";
import VxeUI from "vxe-pc-ui";
import antdv from "ant-design-vue";

const app = createApp(App);

app.use(VxeUI);
app.use(VXETable);
app.use(antdv);

app.mount("#app");
