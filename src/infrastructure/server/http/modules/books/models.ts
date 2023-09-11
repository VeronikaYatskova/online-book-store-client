export interface IBook {
    id: string,
    bookName: string,
    isbn10: string,
    isbn13: string,
    pagesCount: number,
    publishYear: string,
    language: string,
    publisher: string,
    category: string,
    authors: string[]
}