import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

// Firebase imports
// import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// import { provideAuth, getAuth } from '@angular/fire/auth';
// import { provideFirestore, getFirestore } from '@angular/fire/firestore';
// import { provideStorage, getStorage } from '@angular/fire/storage';
// import { provideAnalytics, getAnalytics } from '@angular/fire/analytics';
// import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore()),
    // provideStorage(() => getStorage()),
    // provideAnalytics(() => getAnalytics())
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
