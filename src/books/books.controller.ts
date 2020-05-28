import { Controller, Get, Param, Post, Body, Delete, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Get()
  async getBooks() {
    const books = await this.bookService.getBooks();
    return books;
  }

  @Get(':bookID')
  async getBook(@Param('bookID') bookID) {
    const book = await this.bookService.getBook(bookID);
    return book;
  }

  @Post()
  async addBook(@Body() createBookDTO: CreateBookDTO) {
    console.log({createBookDTO})
    const book = await this.bookService.addBook(createBookDTO)
    return book;
  }

  @Delete()
  async deleteBook(@Query() query) {
    const book = await this.bookService.deleteBook(query.bookID);
    return book;
  }

}
