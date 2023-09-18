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
            bookCoverFileUrl: 'https://images.unsplash.com/photo-1682685797229-b2930538da47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
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
            bookCoverFileUrl: 'https://images.unsplash.com/photo-1679629595664-87d8ab6f56cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
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
            bookCoverFileUrl: 'https://images.unsplash.com/photo-1679629595664-87d8ab6f56cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
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
            bookCoverFileUrl: 'https://images.unsplash.com/photo-1682685797229-b2930538da47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
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
            bookCoverFileUrl: 'https://images.unsplash.com/photo-1682685797229-b2930538da47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
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
            bookCoverFileUrl: 'https://images.unsplash.com/photo-1682685797229-b2930538da47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
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
            bookCoverFileUrl: 'https://images.unsplash.com/photo-1682685797229-b2930538da47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
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
            bookCoverFileUrl: 'https://images.unsplash.com/photo-1679629595664-87d8ab6f56cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
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
            <Title title='Book Store'/>
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
