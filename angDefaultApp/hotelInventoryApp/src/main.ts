import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
// import { environment } from './environment/environment';

// if (environment.production) { enableProdMode();}   //works only if in production mode 
enableProdMode();                                     // here, we force and assume production mode (but we are in dev mode)

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
