import { ScullyConfig, RouteTypes, setPluginConfig } from '@scullyio/scully';
import { HljsHtml } from './plugins/hljs';
import { TocConfig, getTocPlugin} from 'scully-plugin-toc';
const tocOptions: TocConfig = {
  blogAreaSelector: '.blog-content',
  insertSelector: '.tp__toc',
  level: ['h2', 'h3'],
};
const TocPlugin = getTocPlugin();
setPluginConfig(TocPlugin, tocOptions);
setPluginConfig('md', { enableSyntaxHighlighting: true });

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'tiepphan',
  outDir: './dist/static',
  routes: {
    '/': {
      type: RouteTypes.default,
    },
    '/:slug': {
      type: RouteTypes.contentFolder,
      slug: {
        folder: './blog'
      },
      postRenderers: [HljsHtml, TocPlugin]
    },
  }
};
