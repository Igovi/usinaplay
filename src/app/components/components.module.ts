import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    HeaderComponent,
    UserProfileComponent,
    SectionTitleComponent,
    CardComponent
  ],
  exports: [
    HeaderComponent,
    UserProfileComponent,
    SectionTitleComponent,
    CardComponent
  ]
})
export class ComponentsModule { }

