import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatIconModule, MatToolbarModule, MatToolbar } from '@angular/material';
import { PublicApiService } from '../../services/public-api.service';
import { PublicApi } from '../../model/api';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {

  publicApis: PublicApi[] = [];
  publicApisLoaded: boolean;

  displayedColumns = ['API', 'Description', 'Category', 'Auth', 'HTTPS', 'CORS'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  // for errors
  loadError: boolean;
  errorText: string;

  constructor(private publicApiService: PublicApiService) {
  }

  ngOnInit() {
    this.publicApiService.getAllPublicApis()
      .then((publicApis) => {

        // default sort by API
        publicApis.sort((left, right): number => {
          return ((left.API === right.API) ? 0 : ((left.API > right.API) ? 1 : -1));
        });

        this.publicApis = publicApis;
        this.publicApisLoaded = true;
        this.dataSource.data = this.publicApis;
      })
      .catch((err) => {
        this.loadError = true;
        const body = JSON.parse(err._body);
        this.errorText = body.message;
      });
  }

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    console.log('ngAfterViewInit sort: ' + this.sort);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
