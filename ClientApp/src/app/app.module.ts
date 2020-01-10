import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { SigsComponent } from './sigs/sigs.component';
import { OfficersComponent } from './officers/officers.component';
import { SafeHtmlPipe } from './safeHtml.pipe';
import { ContentService } from './Content.service';
import { PolicyComponent } from './policies/policy.component';
import { NotesComponent } from './notes/notes.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FooterComponent,
    SigsComponent,
    OfficersComponent,
    PolicyComponent,
    NotesComponent,
    SafeHtmlPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'sigs', component: SigsComponent, pathMatch: 'full' },
      { path: 'officers', component: OfficersComponent, pathMatch: 'full' },
      { path: 'policies', component: PolicyComponent, pathMatch: 'full' },
      { path: 'notes', component: NotesComponent, pathMatch: 'full' },
    ])
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
