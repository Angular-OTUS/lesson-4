import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  DogComponent,
  CatComponent,
  BirdComponent,
} from './components';

import * as AppRootComponents from './components'
import {UsersModule} from "./users/users.module";
import { HostContextParentComponent } from './components/host-context-parent/host-context-parent.component';
import { HostContextChildComponent } from './components/host-context-child/host-context-child.component';
import {ExampleStandaloneComponent} from "./example-standalone/example-standalone.component";

@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    CatComponent,
    BirdComponent,
    AppRootComponents.ViewEncapsulationShadowComponent,
    AppRootComponents.ViewEncapsulationNoneComponent,
    HostContextParentComponent,
    HostContextChildComponent,
  ],
  imports: [
    BrowserModule,
    UsersModule,
    ExampleStandaloneComponent
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
