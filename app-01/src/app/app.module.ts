import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { EmpToStringPipe } from './pipes/emp-to-string.pipe';
import { ToWordsPipe } from './pipes/to-words.pipe';
import { SimpleHighlightDirective } from './directives/simple-highlight.directive';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { EnhancedHighlightDirective } from './directives/enhacned-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FriendsListComponent,
    PipesDemoComponent,
    EmpToStringPipe,
    ToWordsPipe,
    SimpleHighlightDirective,
    EnhancedHighlightDirective,
    CustomDirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
