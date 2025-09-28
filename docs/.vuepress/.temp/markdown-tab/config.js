import { CodeTabs } from "C:/Users/aland/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_860cdb57c38b420ae72542399647e269/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/Users/aland/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_860cdb57c38b420ae72542399647e269/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/Users/aland/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_860cdb57c38b420ae72542399647e269/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
