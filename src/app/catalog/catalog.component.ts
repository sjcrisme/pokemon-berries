import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material';
import { StoreService } from '../store.service';

@Component({
  selector: 'catalog-root',
  templateUrl: './catalog.component.html',
  styles: [
    'table { width: 100%; }',
    'th.mat-sort-header-sorted { color: black; } ',
    'img { size: 50px;}',
    '.filter { float: right; }'
  ]
})
export class CatalogComponent implements OnInit {
  berries;
  displayedColumns: string[] = ['id', 'image', 'name', 'growth_time', 'max_harvest', 'firmness'];
  dataSource = new MatTableDataSource([]);

  filter = {
    options: [
      'very-soft', 'soft', 'hard', 'very-hard', 'super-hard'
    ]
  };

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public stor: StoreService) {
    this.berries = this.stor.db;
  }

  ngOnInit() {
    this.dataSource.data = this.berries;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  search(value: string) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  filterChange(filter, event) {
    this.dataSource.data = this.stor.db;
    if (event.target.value !== '') {
      this.dataSource.data = this.stor.db.filter(berry => berry.firmness.name === event.target.value);
    }
  }

}
