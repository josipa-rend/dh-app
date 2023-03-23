import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from "@angular/common/http";
import { AuthService } from "../_services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const accessToken = this.authService.getAccessToken();

        req = req.clone({
            setHeaders: {
                Authorization: `${accessToken}`
            }
        });
        return next.handle(req);
    }
}
