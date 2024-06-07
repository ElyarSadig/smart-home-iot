import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BaseSideBar from "./components/BaseSideBar.vue";
import BaseHeader from "./components/BaseHeader.vue";

const app = createApp(App);

app.use(router);

app.component("base-sidebar", BaseSideBar);
app.component("base-header", BaseHeader);

app.mount("#app");
