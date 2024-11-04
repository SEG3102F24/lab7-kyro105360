import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BooksService } from '../books/service/books.service';
import { Author } from '../books/model/book';

@Component({
  selector: 'app-authors',
  standalone: true,
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  imports: [FormsModule, CommonModule]
})
export class AuthorsComponent {
  authorId: number = 0;
  authorDetails: Author | null = null;
  message: string = '';

  constructor(private booksService: BooksService) {}

  onSubmit() {
    this.booksService.getAuthorById(this.authorId).subscribe({
      next: (author: Author) => {
        this.authorDetails = author;
        this.message = '';
      },
      error: () => {
        this.authorDetails = null;
        this.message = 'Author not found';
      }
    });
  }
}
