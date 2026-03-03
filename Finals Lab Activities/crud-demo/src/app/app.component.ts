import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'booksapp'; //
  readonly APIUrl = "http://localhost:5038/api/books/"; //
  books: any = [];
  isEditMode = false;
  currentEditId: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() { this.refreshBooks(); } //

  refreshBooks() {
    this.http.get(this.APIUrl + 'GetBooks').subscribe(data => { this.books = data; }); //
  }

  saveBook() {
    const title = (<HTMLInputElement>document.getElementById("newBook")).value;
    const author = (<HTMLInputElement>document.getElementById("newAuthor")).value;
    const category = (<HTMLInputElement>document.getElementById("newCategory")).value;
    const price = (<HTMLInputElement>document.getElementById("newPrice")).value;
    const desc = (<HTMLInputElement>document.getElementById("newDesc")).value;

    const formData = new FormData(); //
    formData.append("title", title); //
    formData.append("author", author);
    formData.append("category", category);
    formData.append("price", price); //
    formData.append("description", desc); //

    if (this.isEditMode) {
      formData.append("id", this.currentEditId);
      this.http.post(this.APIUrl + 'UpdateBook', formData).subscribe(() => {
        alert("Updated!");
        this.resetForm();
        this.refreshBooks();
      });
    } else {
      this.http.post(this.APIUrl + 'AddBook', formData).subscribe(() => {
        alert("Added!");
        this.resetForm();
        this.refreshBooks();
      });
    }
  }

  editBook(book: any) {
    this.isEditMode = true;
    this.currentEditId = book.id;
    (<HTMLInputElement>document.getElementById("newBook")).value = book.title;
    (<HTMLInputElement>document.getElementById("newAuthor")).value = book.author || '';
    (<HTMLInputElement>document.getElementById("newCategory")).value = book.category || '';
    (<HTMLInputElement>document.getElementById("newPrice")).value = book.price;
    (<HTMLInputElement>document.getElementById("newDesc")).value = book.desc;
  }

  resetForm() {
    this.isEditMode = false;
    this.currentEditId = null;
    (<HTMLInputElement>document.getElementById("newBook")).value = "";
    (<HTMLInputElement>document.getElementById("newAuthor")).value = "";
    (<HTMLInputElement>document.getElementById("newCategory")).value = "";
    (<HTMLInputElement>document.getElementById("newPrice")).value = "";
    (<HTMLInputElement>document.getElementById("newDesc")).value = "";
  }

  deleteBook(id: any) {
    this.http.delete(this.APIUrl + 'DeleteBook?id=' + id).subscribe(() => { this.refreshBooks(); }); //
  }
}
