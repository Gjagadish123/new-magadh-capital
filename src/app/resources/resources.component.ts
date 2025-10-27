import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent {
  activeTab: string = 'our_blogs'; // default

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment === 'our_blogs' || fragment === 'towards_awareness' || fragment === 'Media' || fragment === 'Investor_Letters' || fragment === 'UPI') {
        this.activeTab = fragment;
      } else {
        this.activeTab = 'our_blogs';
      }
    });
  }
}
