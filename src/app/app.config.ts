import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()), provideAnimations(), provideFirebaseApp(() => initializeApp({"projectId":"little-c5d99","appId":"1:706426643919:web:19a4e13dcb4bdc760a5eba","storageBucket":"little-c5d99.appspot.com","apiKey":"AIzaSyBegoi8BUvrl0JRNB-_LmF6LhdxYzaltH0","authDomain":"little-c5d99.firebaseapp.com","messagingSenderId":"706426643919"})), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"little-c5d99","appId":"1:706426643919:web:19a4e13dcb4bdc760a5eba","storageBucket":"little-c5d99.appspot.com","apiKey":"AIzaSyBegoi8BUvrl0JRNB-_LmF6LhdxYzaltH0","authDomain":"little-c5d99.firebaseapp.com","messagingSenderId":"706426643919"})), provideFirestore(() => getFirestore())]
};
