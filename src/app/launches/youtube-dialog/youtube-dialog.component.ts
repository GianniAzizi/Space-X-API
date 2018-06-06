import { Component, OnInit } from '@angular/core';
import { Launch } from '../launches.model';

@Component({
  selector: 'app-youtube-dialog',
  templateUrl: './youtube-dialog.component.html',
  styleUrls: ['./youtube-dialog.component.css']
})
export class YoutubeDialogComponent implements OnInit {

  launch: Launch;

  constructor() { }

  ngOnInit() {
  }

  convertYoutubeLink(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return "https://www.youtube.com/embed/"+match[2]+"?rel=0&amp;controls=0&amp;showinfo=0";
    } else {
        return 'error';
    }
  }

}
