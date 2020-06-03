import { ScullyConfig, RouteTypes, setPluginConfig } from '@scullyio/scully';
import { HljsHtml } from './plugins/hljs';

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
      postRenderers: [HljsHtml]
    },
  }
};
