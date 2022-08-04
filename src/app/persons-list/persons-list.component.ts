import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css'],
})
export class PersonsListComponent implements OnInit {
  dataSource!: any;
  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'dob', 'id'];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.http
      .get('https://golang-crud-api.herokuapp.com/api/persons')
      .subscribe((data) => {
        this.dataSource = data;
      });
  }

  deletePerson(id: any) {
    this.http
      .delete(`https://golang-crud-api.herokuapp.com/api/persons/${id}`)
      .subscribe((data) => {
        this.getData();
      });
  }
}
