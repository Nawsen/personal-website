import {Component, OnInit, Input} from '@angular/core';
import {Fact} from "../fact.model";

@Component({
  selector: 'app-fact',
  templateUrl: 'fact.component.html',
  styleUrls: ['fact.component.css']
})
export class FactComponent implements OnInit {

  @Input() private fact: Fact;

  constructor() {
  }

  ngOnInit() {
  }

}
