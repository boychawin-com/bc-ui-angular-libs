import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { BCSharedLibsModule } from '../public-api'
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';


import { CommonModule } from '@angular/common'
@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,

    BCSharedLibsModule.forRoot(environment)
  ],
  exports: [
    // HeaderComponent
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule {
}
