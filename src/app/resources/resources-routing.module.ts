import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourcesComponent } from './resources.component';

import { BlogsComponent } from './blogs/blogs.component';
import { MediaComponent } from './media/media.component';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { TowardsAwarenessComponent } from './towards-awareness/towards-awareness.component';
import { FaqsComponent } from './faqs/faqs.component';

const routes: Routes = [
  { path: '', component: ResourcesComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'media', component: MediaComponent },
  { path: 'newsletters', component: NewslettersComponent },
  { path: 'towards-awareness', component: TowardsAwarenessComponent },
  { path: 'faqs', component: FaqsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
