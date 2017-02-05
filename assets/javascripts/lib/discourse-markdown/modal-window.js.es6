import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features["modal-window"] = true;
});

export function setup(helper) {
  helper.whiteList(['label[for=*]']);
}
