import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {
  searchQuery: string = "";
  category: string = "";
  obj = {
    searchQuery: '',
    category: ''
  };

  constructor(private dialogRef : MatDialogRef<SearchboxComponent>) { }

  ngOnInit(): void {
  }

  search() {
    if(this.searchQuery == "") {
      this.searchQuery = "*";
    }
    this.obj.searchQuery = this.searchQuery;
    this.obj.category = this.category;
    this.dialogRef.close(this.obj);
  }
  
  query = new FormControl('', [Validators.required]);
}
