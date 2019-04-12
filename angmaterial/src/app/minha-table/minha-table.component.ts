import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MinhaTableDataSource } from './minha-table-datasource';

@Component({
  selector: 'minha-table',
  templateUrl: './minha-table.component.html',
  styleUrls: ['./minha-table.component.css']
})
export class MinhaTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MinhaTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new MinhaTableDataSource(this.paginator, this.sort);
  }
}
