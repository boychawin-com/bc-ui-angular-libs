import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Environment } from "./core/environment";

/* Core */
import {
  COOKIE_ACCESS_TOKEN_NAME,
  HEADER_X_AUTHORIZATION,
} from "./core/constants";
/* Services */
import { AlertService } from "./helpers/alert.service";
import { CookieService } from "./service/cookie.service";
import { PageLoadingService } from "./helpers/page-loading.service";
/* Directive*/
import { LoadingDirective } from "./directive/loading.directive";
/* Pipes */
import { DateFormatPipe } from "./pipe/date-format.pipe";
/* Module */
import { ModalModule } from "ngx-bootstrap/modal";
import { TypeaheadModule } from "ngx-bootstrap/typeahead";
import { TabsModule } from "ngx-bootstrap/tabs";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TranslateModule, TranslateService } from "@ngx-translate/core";

import { FooterComponent } from "./component/footer/footer.component";
import { HeaderComponent } from "./component/header/header.component";


export function jwtOptionsFactory(cookiesService: CookieService) {
  function tokenGetter() {
    return cookiesService.get(COOKIE_ACCESS_TOKEN_NAME) || null;
  }

  return {
    tokenGetter: tokenGetter,
    headerName: HEADER_X_AUTHORIZATION,
    whitelistedDomains: [],
    blacklistedRoutes: ["/api/auth/refreshToken"],
  };
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    TranslateModule,
  ],
  declarations: [
    /* directive */
    LoadingDirective,
    /* pipe */
    DateFormatPipe,
    /* component */
    FooterComponent,
    HeaderComponent,


  ],
  exports: [
    /* directive */
    LoadingDirective,
    /* pipe */
    DateFormatPipe,
    /* component */
    FooterComponent,
    HeaderComponent,
  ],

})

export class BCSharedLibsModule {
  static forRoot(environment: Environment): ModuleWithProviders<BCSharedLibsModule> {
    return {
      ngModule: BCSharedLibsModule,
      providers: [
        AlertService,
        PageLoadingService,
        TranslateService,
        {
          provide: "environment",
          useValue: environment,
        },
      ],
    };
  }
}
