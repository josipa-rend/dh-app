import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EncoderService {

  private API_URL = environment.API_URL;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  public getEncodedInput(input: string) {
    const body = {
      input: input
    }
    return this.http.post<any>(`${this.API_URL}/encode`, body, {headers: this.headers})
  }
}
