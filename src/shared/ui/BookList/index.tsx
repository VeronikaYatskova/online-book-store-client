import React from 'react'

import styles from './BookList.module.scss'
import { IBook } from '../../../infrastructure/server/http/modules'
import { BookCardWidget } from '../BookCard'

interface IBookList {
   books: Array<IBook> 
}

export const BookList: React.FC<IBookList> = (props: IBookList) => {
    const { books } = props
    
    return (
        <div className={styles.wrapper}>
            {
                books.map((book) => {
                    return (
                        <BookCardWidget book={book} />
                    )
                })
            }
        </div>
    )
}
