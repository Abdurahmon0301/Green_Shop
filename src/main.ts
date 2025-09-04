import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);

app.use(router);
router.isReady().then(() => {
  app.mount("#app");
  AOS.init({ duration: 700, easing: "ease-out-cubic", once: true });
});
