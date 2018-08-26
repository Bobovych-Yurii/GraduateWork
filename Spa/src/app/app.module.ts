import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { DictioanyPageComponent } from './components/page-components/dictioany-page/dictioany-page.component';
import { AccountPageComponent } from './components/page-components/account-page/account-page.component';
import { PostPageComponent } from './components/page-components/post-page/post-page.component';

import {LocalStorage} from './models/local-storage';

import {HttpHelper} from './services/http-helper.service';
import {LocalStorageService} from './services/local-storage.service';
import { IndexdbService } from './services/indexdb.service';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { combineAll } from 'rxjs/operators/combineAll';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SearchWordComponent } from './components/word-components/search-word/search-word.component';
import { WordsProviderService } from './providers/words-provider.service';
import { WordCardComponent } from './components/word-components/word-card/word-card.component';
import { DictionaryProviderService } from './providers/dictionary.provider.service';
import { DictionaryCardComponent } from './components/word-components/dictionary-card/dictionary-card.component';
import { ConcreteDictionaryPageComponent } from './components/page-components/concrete-dictionary-page/concrete-dictionary-page.component';
import { BaseExervisePageComponent } from './components/page-components/exercise-page/base-exervise-page/base-exervise-page.component';
import { PostCardComponent } from './components/post-components/post-card/post-card.component';
import { ConcretePostPageComponent } from './components/page-components/concrete-post-page/concrete-post-page.component';


const appRoutes: Routes = [
  { path: 'post', component: PostPageComponent },
  { path: 'account', component: AccountPageComponent },
  { path: 'dictionary', component: DictioanyPageComponent},
  { path: 'dictionary/:id', component: ConcreteDictionaryPageComponent},
  { path: 'exercise/:id', component: BaseExervisePageComponent},
  { path: '',
    redirectTo: 'post',
    pathMatch: 'full'
  },
  { path: '**', component: PostPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DictioanyPageComponent,
    AccountPageComponent,
    PostPageComponent,
    NavBarComponent,
    SignInComponent,
    SearchWordComponent,
    WordCardComponent,
    DictionaryCardComponent,
    ConcreteDictionaryPageComponent,
    BaseExervisePageComponent,
    PostCardComponent,
    ConcretePostPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule,
    MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  ],
  providers: [
    WordsProviderService,
    HttpHelper,
    IndexdbService,
    LocalStorageService,
    DictionaryProviderService,
    {provide: LocalStorage, useValue: { getItem() {}}},
    { provide: LocalStorage, useValue: window.localStorage }],
  bootstrap: [AppComponent]

})
export class AppModule { }
