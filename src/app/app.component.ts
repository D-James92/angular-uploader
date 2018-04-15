import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app';
  public style = {
    uploadAreaBg: "#f00",
    uploadAreaColor: "fff",
    topBarBg: "#0f0",
    topBarColor: "#000",
    borderSize: "2px",
    borderType: "dashed",
    borderColor: "#fff",
    progressBarBaseColor: "#fff",
    progressBarActiveColor: "#f32",
    itemCardBg: "#fff",
    itemCardColor: "#000"
  }

}
