import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { RootBrowserModule } from "./app/root-browser/root-browser.module";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(RootBrowserModule)
  .catch(err => console.error(err));
