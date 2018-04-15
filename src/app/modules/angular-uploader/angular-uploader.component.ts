import { Component, OnInit, Input, Output, DoCheck } from '@angular/core';
import { AngularUploaderStyle } from './class/angular-uploader-style';
import { AngularUploaderStatus } from './class/angular-uploader-status';

@Component({
  selector: 'app-angular-uploader',
  templateUrl: './angular-uploader.component.html',
  styleUrls: ['./angular-uploader.component.css'],
  providers: []
})
export class AngularUploaderComponent implements OnInit, DoCheck {

  fileToUpload;
  bFileToUpload;

  @Input() urlUpload: string;
  @Input() urlMethod: string;
  @Input() typeFile: string;
  @Input() multiple: boolean;
  @Input() autoStart: boolean;
  @Input() dragAndDrop: boolean;
  @Input() maxFileSize: number; // KB
  @Input() maxFiles: number;
  @Input() imageMaxHeight: number;
  @Input() imageMaxWidth: number;
  @Input() chunk: boolean;
  @Input() chunkSize: number; // KB
  @Input() style: AngularUploaderStyle;

  @Output() status: AngularUploaderStatus;
  @Output() fileList: File[];
  @Output() fileAdded: Event;
  @Output() fileRemoved: Event;
  @Output() fileEdited: Event;
  @Output() uploadStart: Event;
  @Output() uploadSuccess: Event;
  @Output() uploadFailed: Event;
  @Output() uploadCanceled: Event;
  @Output() uploadCompleteFile: Event;

  constructor() { 
    this.status = AngularUploaderStatus.READY;
    this.fileList = [];
    this.fileToUpload = this.bFileToUpload = null;
  }

  ngOnInit() {
    this.SetStyle();
  }

  ngDoCheck() {

  }

  FileToUploadChange(event){
    console.log(event);
    const file: File = event.srcElement.files[0];
    this.fileList.push(file);
  }

  SetStyle() {
    document.getElementById("uploader-container").style.borderColor = this.style.borderColor;
    document.getElementById("uploader-container").style.borderStyle = this.style.borderType;
    document.getElementById("uploader-container").style.borderWidth = this.style.borderSize;
    document.getElementById("uploader-header").style.backgroundColor = this.style.topBarBg;
    document.getElementById("uploader-header").style.color = this.style.topBarColor;
    document.getElementById("uploader-content").style.backgroundColor = this.style.uploadAreaBg;
    document.getElementById("uploader-content").style.color = this.style.uploadAreaColor;
    document.getElementById("uploader-progressbar").style.backgroundColor = this.style.progressBarBaseColor;
    document.getElementById("uploader-progressbar-active").style.backgroundColor = this.style.progressBarActiveColor;
  }

}
