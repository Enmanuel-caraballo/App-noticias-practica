import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "./environments/environment";

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor{
     private baseUrl = environment.BASE_URL;
      private apiKey = environment.API_KEY;

    constructor(){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (!req.headers.has(this.baseUrl)) {
            req = req.clone({headers: req.headers.set(this.baseUrl, this.apiKey)});
        }

        throw new Error("Method not implemented.");
    }

}