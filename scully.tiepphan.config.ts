import { ScullyConfig, RouteTypes } from '@scullyio/scully';
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
      }
    },
  }
};
