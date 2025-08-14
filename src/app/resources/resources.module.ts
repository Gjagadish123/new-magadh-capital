import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources.component';
import { BlogsComponent } from './blogs/blogs.component';
import { MediaComponent } from './media/media.component';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { TowardsAwarenessComponent } from './towards-awareness/towards-awareness.component';
import { FaqsComponent } from './faqs/faqs.component';


@NgModule({
  declarations: [
    ResourcesComponent,
    BlogsComponent,
    MediaComponent,
    NewslettersComponent,
    TowardsAwarenessComponent,
    FaqsComponent
  ],
  imports: [
    CommonModule,
    ResourcesRoutingModule
  ]
})
export class ResourcesModule { }
