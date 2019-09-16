import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  clickedIn() {
    this.router.navigate(['dir/in'])
  }

  clickedOut() {
    this.router.navigate(['dir/out'])
  }

}
