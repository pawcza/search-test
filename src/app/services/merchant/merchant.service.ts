import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Merchant } from 'src/app/models/merchant';
import { MerchantRepository } from '@search-app/data';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  constructor(private repo: MerchantRepository) { }

  search$(query: string): Observable<Merchant[]> {
    return this.repo.search$(query);
  }
}
