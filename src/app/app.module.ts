import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule, MdButtonModule, MdDialog, MdIconRegistry, MdInputModule, MdMenuModule, MdToolbarModule, MdTooltipModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthGuard } from './auth/auth-guard.service';
import { HttpModule } from '@angular/http';

import 'hammerjs';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { LoginComponent } from './auth/login';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';
import { HomeComponent } from './home/home';
import { PageNotFoundComponent } from './page.not.found';
import { SvgViewerComponent } from './svg-viewer/svg-viewer.component';
import { ContactComponent } from './contact/contact.component';
import { StartupComponent } from './startup/startup.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyDnTpmxSYGGcupUEgNoj0oxOgX4kNdpS7I',
  authDomain: 'azmo-web.firebaseapp.com',
  databaseURL: 'https://azmo-web.firebaseio.com',
  projectId: 'azmo-web',
  storageBucket: 'azmo-web.appspot.com',
  messagingSenderId: '696474167560'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FeedbackDialogComponent,
    PageNotFoundComponent,
    SvgViewerComponent,
    ContactComponent,
    StartupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    MdInputModule,
    MdToolbarModule,
    MdButtonModule,
    MdMenuModule,
    MdTooltipModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
  ],
  providers: [
    AuthGuard,
    MdIconRegistry,
    MdDialog,
  ],
  entryComponents: [FeedbackDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
