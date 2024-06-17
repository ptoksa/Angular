import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', component: MyComponentComponent }
    ])
  ]
};
