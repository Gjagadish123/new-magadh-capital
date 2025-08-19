import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.component.html',
  styleUrls: ['./assistance.component.scss']
})
export class AssistanceComponent {

  activeTab: string = 'FAQ'; // default

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment === 'invest' || fragment === 'complaints' || fragment === 'FAQ' || fragment === 'login' || fragment === 'download') {
        this.activeTab = fragment;
      } else {
        this.activeTab = 'invest';
      }
    });
    console.log('====================================');
    console.log(this.activeTab);
    console.log('====================================');
  }

}
