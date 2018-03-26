import { Injectable } from '@angular/core';

@Injectable()
export class BookLibraryService {

  libraryBooks = ['The Jungle Book', 'The Ramayan'];
  constructor() { }

  getLibraryBooks(){
    return this.libraryBooks;
  }

}
