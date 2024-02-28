import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageBoxComponent } from './message-box/message-box.component';
import { NoSuchComponent } from './no-such/no-such.component';

@NgModule({
  declarations: [
    MessageBoxComponent,
    NoSuchComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MessageBoxComponent
  ]
})
export class BtaSharedModule { }
