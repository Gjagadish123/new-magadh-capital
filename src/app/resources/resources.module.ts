import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BlogsComponent } from './blogs/blogs.component';
import { MediaComponent } from './media/media.component';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources.component';
import { TowardsAwarenessComponent } from './towards-awareness/towards-awareness.component';
import { UPIComponent } from './UPI/UPI.component';


@NgModule({
  declarations: [
    ResourcesComponent,
    BlogsComponent,
    MediaComponent,
    NewslettersComponent,
    TowardsAwarenessComponent,
    UPIComponent
  ],
  imports: [
    CommonModule,
    ResourcesRoutingModule
  ]
})
export class ResourcesModule { }
