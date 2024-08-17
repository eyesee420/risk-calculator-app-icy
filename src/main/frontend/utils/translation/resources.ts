import appEn from "@Locales/en/app.json";
import sharedEn from "@Locales/en/shared.json";

import appJa from "@Locales/ja/app.json";
import sharedJa from "@Locales/ja/shared.json";

export const resources = {
  en: {
    app: appEn,
    shared: sharedEn
  },
  ja: {
    app: appJa,
    shared: sharedJa
  },
};

export const ns = Object.keys(resources.en);
