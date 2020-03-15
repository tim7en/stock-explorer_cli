import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as messageType from '../shared/messageType';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { Config } from '../models/config';

@Injectable({
  providedIn: 'root'
})

export class GetmarketserviceService {

  public get baseURL() { return "https://www.alphavantage.co/query?function="; }
  private messager: ToastrService;

  public config: Config;
  configUrl = 'assets/config.json';

  constructor(private http: HttpClient) {
    this.showConfig();
  }

  getConfig() {
    return this.http.get<Config>(this.configUrl);
  }

  showConfig() {
    this.getConfig().subscribe((data: Config) => this.config = {
      apikey: data['alphavantageAPIKey']
    });
  }

  public getTimeSeries(freq: string, sym: string, length: string): Observable<any> {
    let url = this.baseURL + freq + "&symbol=" + sym + "&outputsize=" + length + "&apikey=" + this.config.apikey;
    return this.http.get<any>(url)
      .pipe(catchError(this.handleError('getTimeSeries', [])));
  }

  public getSearchSYM(sym: string) {
    let url = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + sym + "&apikey=" + "PFTLU0XO3SLF2S5J";
    return this.http.get<any>(url)
      .pipe(catchError(this.handleError('getTimeSeries', [])));
  }


  //#region "Error handlers"
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.sm("Please try again.", messageType.ERROR, "Http Error Occured!", 0);
      return of(result as T)
    }
  }

  private sm(msg: string, mType: string = messageType.INFO, title?: string, timeout?: number) {
    try {
      let options: Partial<IndividualConfig> = null;
      if (timeout) options = { timeOut: timeout };
      this.messager.show(msg, title, options, mType)
    }
    catch (e) {
    }
  }
  //#endregion
}
