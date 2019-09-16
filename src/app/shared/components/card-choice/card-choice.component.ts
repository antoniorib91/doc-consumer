import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-choice',
  templateUrl: './card-choice.component.html',
  styleUrls: ['./card-choice.component.scss']
})
export class CardChoiceComponent implements OnInit {

  @Input() text: string = 'Default text';
  @Output() clicked: EventEmitter<any> = new EventEmitter()

  public iconClass: string;
  private closedFolderClass = 'far fa-folder';
  private openedFolderClass = 'far fa-folder-open';


  constructor() { }

  ngOnInit() {
    this.iconClass = this.closedFolderClass;
  }

  onClick() {
    this.clicked.emit();
  }

  onMouseOver() {
    this.iconClass = this.openedFolderClass;
  }

  onMouseOut() {
    this.iconClass = this.closedFolderClass;
  }

}
