import { ScullyConfig, RouteTypes, setPluginConfig } from '@scullyio/scully';
import { HljsHtml } from './plugins/hljs';
import { TocConfig, getTocPlugin} from 'scully-plugin-toc';
import { getHttp404Plugin } from '@gammastream/scully-plugin-http404';

const Http404Plugin = getHttp404Plugin();

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
  defaultPostRenderers: [Http404Plugin],
  routes: {
    '/': {
      type: RouteTypes.default,
    },
    '/404': {
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
