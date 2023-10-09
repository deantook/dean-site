import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Logeek",
  description: "Be a Cool guy",
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
