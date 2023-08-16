import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Overauto",
  description: "陈最不知归路的博客",
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
