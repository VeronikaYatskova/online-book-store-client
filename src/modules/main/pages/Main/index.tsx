import React from 'react'

import { BookList, Title } from '../../../../shared/ui'
import styles from './Main.module.scss'
import { IBook } from '../../../../infrastructure/server/http/modules/books'
import { SearchInputWidget } from '../../widgets/SearchInput'

export const MainPage = () => {

    const books: IBook[] = [
        {
            id: '1',
            bookName: 'book', 
            bookFileUrl: 'book url',
            bookCoverFileUrl: 'https://unsplash.com/photos/Lsm5HOu3vik',
            isbn10: 'isbn 10',
            isbn13: 'isbn 13',
            pagesCount: 10,
            publishYear: '2023',
            language: 'language',
            publisher: 'publisher',
            category: 'category',
            authors: ['author1', 'author2']
        },
        {
            id: '2',
            bookName: 'book', 
            bookFileUrl: 'book url',
            bookCoverFileUrl: 'book cover url',
            isbn10: 'isbn 10',
            isbn13: 'isbn 13',
            pagesCount: 10,
            publishYear: '2023',
            language: 'language',
            publisher: 'publisher',
            category: 'category',
            authors: ['author1', 'author2']
        },
        {
            id: '3',
            bookName: 'book', 
            bookFileUrl: 'book url',
            bookCoverFileUrl: 'book cover url',
            isbn10: 'isbn 10',
            isbn13: 'isbn 13',
            pagesCount: 10,
            publishYear: '2023',
            language: 'language',
            publisher: 'publisher',
            category: 'category',
            authors: ['author1', 'author2']
        },
        {
            id: '4',
            bookName: 'book', 
            bookFileUrl: 'book url',
            bookCoverFileUrl: 'book cover url',
            isbn10: 'isbn 10',
            isbn13: 'isbn 13',
            pagesCount: 10,
            publishYear: '2023',
            language: 'language',
            publisher: 'publisher',
            category: 'category',
            authors: ['author1', 'author2']
        },
        {
            id: '1',
            bookName: 'book', 
            bookFileUrl: 'book url',
            bookCoverFileUrl: 'book cover url',
            isbn10: 'isbn 10',
            isbn13: 'isbn 13',
            pagesCount: 10,
            publishYear: '2023',
            language: 'language',
            publisher: 'publisher',
            category: 'category',
            authors: ['author1', 'author2']
        },
        {
            id: '2',
            bookName: 'book', 
            bookFileUrl: 'book url',
            bookCoverFileUrl: 'book cover url',
            isbn10: 'isbn 10',
            isbn13: 'isbn 13',
            pagesCount: 10,
            publishYear: '2023',
            language: 'language',
            publisher: 'publisher',
            category: 'category',
            authors: ['author1', 'author2']
        },
        {
            id: '3',
            bookName: 'book', 
            bookFileUrl: 'book url',
            bookCoverFileUrl: 'book cover url',
            isbn10: 'isbn 10',
            isbn13: 'isbn 13',
            pagesCount: 10,
            publishYear: '2023',
            language: 'language',
            publisher: 'publisher',
            category: 'category',
            authors: ['author1', 'author2']
        },
        {
            id: '4',
            bookName: 'book', 
            bookFileUrl: 'book url',
            bookCoverFileUrl: 'book cover url',
            isbn10: 'isbn 10',
            isbn13: 'isbn 13',
            pagesCount: 10,
            publishYear: '2023',
            language: 'language',
            publisher: 'publisher',
            category: 'category',
            authors: ['author1', 'author2']
        }
    ]

    return (
        <div className={styles.wrapper}>
            <Title />
            <SearchInputWidget />
            <div className={styles.title}>
                <div className={styles.text}>Most popular</div>
            </div>
            <div className={styles.bookList}>
                <BookList books={books}/>
            </div>
        </div>
    )
}
