import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularUploaderComponent } from './angular-uploader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AngularUploaderComponent],
  exports: [
    AngularUploaderComponent
  ]
})
export class AngularUploaderModule { }
