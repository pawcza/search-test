import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { MerchantService } from '../../services/merchant/merchant.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  displayedColumns: string[] = ['type', 'name', 'personId/vat'];

  inputValue = '';
  isFetching = false;
  customers = [];

  @ViewChild(MatTable, {static: true}) table: MatTable<any>;

  constructor(
    private usersService: UserService,
    private merchantService: MerchantService,
    private notification: MatSnackBar
  ) { }

  ngOnInit() {
  }

  onKey(event: any) {
    this.inputValue = event.target.value;
    if (event.key === 'Enter') {
      this.executeSearch();
    }
  }

  onClick() {
    let csv = 'Type,Name,Identifier\n';
    this.customers.forEach(row => {
      let values = Object.values(row);
      values.shift();
      row.vat ? values.unshift('Business') : values.unshift('Private');
      csv += values.join(',');
      csv += '\n';
    });

    const d = new Date();

    const hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = `${this.inputValue}-${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}.csv`;
    hiddenElement.click();
  }

  openNotification(message: string, action: string = 'Ok') {
    this.notification.open(message, action, {
      duration: 2000
    });
  }

  executeSearch(services = ['merchantService', 'usersService']) {
    if (!this.isFetching) {
      this.isFetching = true;
      this.customers = [];
      services.forEach((service, index) => {
        this[service]
          .search$(this.inputValue)
          .subscribe(
            data => {
              data.forEach(customer => this.customers.push(customer));
              this.customers = this.customers.sort((a, b) =>
                (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
              this.table.renderRows();
            },
            error => this.openNotification(error),
            () => {
              if (index >= services.length - 1) {
                this.customers = this.customers.sort((a, b) =>
                  (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
                this.isFetching = false;
                this.table.renderRows();
              }
            }
          );
      });
    }
  }

  clearSearch() {
    this.customers = [];
    this.inputValue = '';
  }
}
