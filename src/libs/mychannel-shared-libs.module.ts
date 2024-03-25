import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Environment } from "./core/environment";
import { AlertService } from "./helper/alert.service";
import { CookieService } from "./service/cookie.service";
import {
  COOKIE_ACCESS_TOKEN_NAME,
  HEADER_X_AUTHORIZATION,
} from "./core/constants";



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
  ],
  declarations: [],
  exports: [],

})
export class BCSharedLibsModule {
  static forRoot(environment: Environment): ModuleWithProviders<BCSharedLibsModule> {
    return {
      ngModule: BCSharedLibsModule,
      providers: [
        {
          provide: "environment",
          useValue: environment,
        },
        AlertService,
      ],
    };
  }
}
