import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-file-icon',
  templateUrl: './file-icon.component.html',
  styleUrls: ['./file-icon.component.scss']
})
export class FileIconComponent implements OnInit {

  @Input() text: string = 'default text';
  @Input() withRouter: boolean = true;
  @Input() link: string;
  constructor() { }

  ngOnInit() {
  }

}
