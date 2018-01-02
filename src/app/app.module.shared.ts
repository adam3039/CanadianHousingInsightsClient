// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { ToggleButtonModule, DialogModule } from 'primeng/primeng';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'angular-highcharts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { LoadingModule } from 'ngx-loading';

// services
import { MapService } from './services/map.service';
import { ConfigService } from './utils/config.service';
import { GeoService } from './services/geo.service';
import { StatsService } from './services/stats.service';
import { NewsService } from './services/news.service';
import { ModalService } from './services/modal.service';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsComponent } from './sidebar/news/news-panel/news.component';
import { MapComponent } from './map/map-area/map-area.component';
import { MapPopupComponent } from './map/map-popup/map-popup.component';
import { AccountComponent } from './sidebar/account/account-panel/account.component';
import { StatsComponent } from './sidebar/stats/stats-panel/stats.component';
import { NewsArticleComponent } from './sidebar/news/news-article/news-article.component';
import { CommentsComponent } from './sidebar/news/news-article-comments/comments.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NewCommentComponent } from './sidebar/news/new-comment/new-comment.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { AuthGuard } from './auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { UserService } from './services/user.service';
import { ChartComponent } from './charts/chart.component';
import { HttpClient } from '@angular/common/http';
import { Renderer2 } from '@angular/core';
import { RecentCommentsComponent } from './sidebar/account/account-panel/recent-comments/recent-comments.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        NewsComponent,
        MapComponent,
        MapPopupComponent,
        SidebarComponent,
        AccountComponent,
        StatsComponent,
        NewsArticleComponent,
        CommentsComponent,
        NewCommentComponent,
        ChartComponent,
        ChangePasswordComponent,
        RecentCommentsComponent
    ],
    entryComponents: [MapPopupComponent],
    imports: [
        HttpClientModule,
        AuthModule,
        CommonModule,
        HttpModule,
        FormsModule,
        BrowserAnimationsModule,
        ButtonModule,
        DropdownModule,
        ToggleButtonModule,
        ChartModule,
        DialogModule,
        PerfectScrollbarModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'news', pathMatch: 'full' },
            { path: 'news', component: NewsComponent },
            { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
            { path: 'stats', component: StatsComponent },
            { path: '**', redirectTo: 'news' },
            { path: 'chart', component: ChartComponent, outlet: 'modal' },
            { path: 'changePassword', component: ChangePasswordComponent, outlet: 'modal'}
        ]),
        InlineSVGModule,
        LoadingModule
    ],
    providers: [
        MapService,
        NewsService,
        ConfigService,
        GeoService,
        StatsService,
        ModalService,
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        { provide: 'BASE_URL', useFactory: getBaseUrl }
    ],
    bootstrap: [AppComponent]
})
export class AppModuleShared {
}

export function getBaseUrl() {
    return 'http://localhost:28532/';
}
