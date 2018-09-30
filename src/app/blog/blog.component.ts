import { Component, OnInit } from '@angular/core';
import {DeactivateCompo} from '../component-guard.guard';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, DeactivateCompo {

  constructor() { }

  ngOnInit() {
  }

  confirm() {
    return confirm('You have unfinished chnages. Leaving?');
  }

}
