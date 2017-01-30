import { Component, OnInit } from '@angular/core';
import {Fact} from "./fact.model";
import {Navigation} from "../shared/navigation.model";

@Component({
  selector: 'app-facts-section',
  templateUrl: './facts-section.component.html',
  styleUrls: ['./facts-section.component.css']
})
export class FactsSectionComponent implements OnInit {

  private facts: Fact[] = [];

  constructor() { }

  ngOnInit() {
    this.facts.push(new Fact('Happy Clients', 15, 'person'));
    this.facts.push(new Fact('Projects Completed', 12, 'work'));
    this.facts.push(new Fact('Colleague Collaborations', 25, 'group'));
  }

}
