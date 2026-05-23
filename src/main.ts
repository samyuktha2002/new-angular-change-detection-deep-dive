import { bootstrapApplication } from '@angular/platform-browser';
import { provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {providers: [provideZoneChangeDetection()],}).catch((err) => console.error(err));
