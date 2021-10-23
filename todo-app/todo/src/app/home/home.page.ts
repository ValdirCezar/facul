import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface PeriodicElement {
  id: number;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  ELEMENT_DATA: PeriodicElement[] = [
    { id: 1, name: 'Estudar Ionic' },
    { id: 2, name: 'Estudar React Native' },
  ];

  task = '';
  count = 2;

  displayedColumns: string[] = ['id', 'task', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private router: Router) {}

  done(id: number) {
    this.ELEMENT_DATA = this.ELEMENT_DATA.filter((obj) => obj.id !== id);
    this.dataSource = new MatTableDataSource<PeriodicElement>(
      this.ELEMENT_DATA
    );
  }

  addTask() {
    if (this.task !== '') {
      this.count = this.count + 1;

      const x: PeriodicElement = {
        id: this.count,
        name: this.task,
      };

      this.ELEMENT_DATA.push(x);
      this.dataSource = new MatTableDataSource<PeriodicElement>(
        this.ELEMENT_DATA
      );
      this.task = '';
    }
  }
  
}
