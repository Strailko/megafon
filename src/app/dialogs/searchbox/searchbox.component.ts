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

  constructor(private dialogRef : MatDialogRef<SearchboxComponent>) { }

  ngOnInit(): void {
  }

  search() {
    if(this.searchQuery != "") {
      this.dialogRef.close(this.searchQuery);
    }
    else {
      this.dialogRef.close(null);
    }
  }
  
  query = new FormControl('', [Validators.required]);
}
