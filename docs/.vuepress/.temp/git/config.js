import { GitContributors } from "C:/Users/aland/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_85fb23e31a05546c88448141650de359/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "C:/Users/aland/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_85fb23e31a05546c88448141650de359/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
