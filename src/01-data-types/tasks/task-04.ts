/**
 *
 * The school library is building a digital catalog to help students search for books.
 * Every book must store its ISBN number, title, author's name, total number of pages,
 * book category, and whether the book is currently available for borrowing.
 *
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 *
 * display the book data using console.log.
 */

type Book = {
  ISBN: number;
  title: string;
  author: string;
  totalPages: number;
  category: string;
  isAvailable: boolean;
};
const book1 = {
  ISBN: 978,
  title: "Bumi",
  author: "Tia Bestari",
  totalPages: 181,
  category: "Novel",
  isAvailable: true,
};

const book2 = {
  ISBN: 786,
  title: "3728 mdpl",
  author: "Gerry Pratama",
  totalPages: 321,
  category: "Novel",
  isAvailable: false,
};

const book3 = {
  ISBN: 537,
  title: "Bumi",
  author: "Syifa Hadju",
  totalPages: 765,
  category: "Novel",
  isAvailable: true,
};

console.log("Data Book");
console.log({ book1, book2, book3 });
