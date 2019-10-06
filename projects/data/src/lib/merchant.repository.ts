import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, throwError, Observable } from 'rxjs';
import { tap, map, delay, debounceTime } from 'rxjs/operators';

export interface MerchantInfo {
  id: string;
  name: string;
  vat: string;
}

@Injectable({
  providedIn: 'root'
})
export class MerchantRepository {

  private list: MerchantInfo[];

  constructor(private client: HttpClient) { }

  search$(query: string): Observable<MerchantInfo[]> {
    // Simulate unexpected error
    if (Math.floor(Math.random() * 10) === 5) {
      return throwError(new Error('Simulated error occurred'));
    }

    query = query.toLowerCase();
    return of(this.list.filter(m => m.name.toLowerCase().indexOf(query) !== -1)).pipe(delay(Math.floor(Math.random() * 2000)));
  }

  update$(merchant: MerchantInfo, id: string) {
    // Simulate unexpected error
    if (Math.floor(Math.random() * 10) === 5) {
      return throwError(new Error('Simulated error occurred'));
    }

    const index = this.list.findIndex(m => m.id === id);

    if (index === -1) {
      throwError(new Error('Merchant not found'));
    }

    this.list[index] = merchant;
  }

  load$(): Promise<boolean> {
    return this.client.get<MerchantInfo[]>('assets/merchants.json').pipe(
      tap(m => this.list = m),
      tap(m => console.log('Merchants loaded')),
      map(() => true)
    )
    .toPromise();
  }

}
