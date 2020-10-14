import { ScullyConfig, RouteTypes, setPluginConfig } from '@scullyio/scully';
import { TocConfig, getTocPlugin } from 'scully-plugin-toc';
import { getHttp404Plugin } from '@gammastream/scully-plugin-http404';
import { getSitemapPlugin } from '@gammastream/scully-plugin-sitemap';

const Http404Plugin = getHttp404Plugin();

const SitemapPlugin = getSitemapPlugin();
setPluginConfig(SitemapPlugin, {
  urlPrefix: 'https://www.tiepphan.com',
  sitemapFilename: 'sitemap.xml',
  changeFreq: 'monthly',
  priority: ['1.0', '0.9', '0.8', '0.7', '0.6', '0.5', '0.4', '0.3', '0.2', '0.1', '0.0'],
  ignoredRoutes: ['/404'],
});

const tocOptions: TocConfig = {
  blogAreaSelector: '.blog-content',
  insertSelector: '.tp__toc',
  level: ['h2', 'h3'],
};
const TocPlugin = getTocPlugin();
setPluginConfig(TocPlugin, tocOptions);
setPluginConfig('md', { enableSyntaxHighlighting: true });

export const config: ScullyConfig = {
  projectRoot: "./apps/blog/src",
  projectName: "blog",
  outDir: './dist/static',
  defaultPostRenderers: [Http404Plugin],
  routes: {
    '/': {
      type: RouteTypes.default,
      postRenderers: []
    },
    '/404': {
      type: RouteTypes.default,
    },
    '/:slug': {
      type: RouteTypes.contentFolder,
      slug: {
        folder: './scully-content/blog'
      },
      postRenderers: [TocPlugin]
    },
  }
};
