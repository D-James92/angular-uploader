import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import our module 
import { AngularUploaderModule } from './modules/angular-uploader/angular-uploader.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
