import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-catalog-root',
  templateUrl: './catalog.component.html',
  styles: [
    'table { width: 100%; }',
    'th.mat-sort-header-sorted { color: black; } ',
    'img { size: 50px;}',
    '.filter { float: right; }'
  ]
})
export class CatalogComponent implements OnInit {
  public berries;
  public displayedColumns: string[] = ['id', 'image', 'name', 'growth_time', 'max_harvest', 'firmness'];
  public dataSource = new MatTableDataSource([]);

  public filter = {
    options: [
      'very-soft', 'soft', 'hard', 'very-hard', 'super-hard'
    ]
  };

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(public stor: StoreService) {
    this.berries = this.stor.db;
  }

  public ngOnInit(): void {
    this.dataSource.data = this.berries;
    this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
  }

  public search(value: string): void {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  public filterChange(filter, event): void {
    console.log(filter);
    this.dataSource.data = this.stor.db;
    if (event.target.value !== '') {
      this.dataSource.data = this.stor.db.filter(berry => berry.firmness.name === event.target.value);
    }
  }

}
