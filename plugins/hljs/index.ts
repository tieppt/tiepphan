import { registerPlugin, getPluginConfig, HandledRoute } from '@scullyio/scully';

export const HljsHtml = 'hljsHtml';
export interface HljsHtmlOptions {
  classList: string;
}

const defaultOptions: HljsHtmlOptions = {
  classList: 'hljs'
};

export const hljsHtmlPlugin = async (html: string, route: HandledRoute): Promise<string> => {
  const customHljsOptions = getPluginConfig<HljsHtmlOptions>(HljsHtml, 'render');
  const hljsOptions = {...defaultOptions, ...customHljsOptions};
  return html.replace(/\<code\s+class="language/g, '<code class="' + hljsOptions.classList + ' language');
};

// no validation implemented
const hljsHtmlPluginValidator = async () => [];
registerPlugin('render', HljsHtml, hljsHtmlPlugin, hljsHtmlPluginValidator);
