import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  ProductListSchematicDataSource,
  ProductListSchematicItem,
} from './product-list-schematic-datasource';

@Component({
  selector: 'app-product-list-schematic',
  templateUrl: './product-list-schematic.component.html',
  styleUrls: ['./product-list-schematic.component.css'],
})
export class ProductListSchematicComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ProductListSchematicItem>;
  dataSource: ProductListSchematicDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new ProductListSchematicDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
