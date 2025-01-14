import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-392d8","appId":"1:74225427793:web:d419bc50213f701ff51f70","storageBucket":"friendlychat-392d8.firebasestorage.app","apiKey":"AIzaSyDvP_QZPDDhj6vSLSHxLfUPWMPfhdX7JKM","authDomain":"friendlychat-392d8.firebaseapp.com","messagingSenderId":"74225427793"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => {
      return getMessaging();
  }), provideStorage(() => getStorage())
  ],
};
