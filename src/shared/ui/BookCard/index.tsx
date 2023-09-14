import React from 'react'
import { observer } from 'mobx-react'

import { IBook } from '../../../infrastructure/server/http/modules'
import styles from './BookCard.module.scss'

interface IBookCard {
    book: IBook
}

export const BookCardWidget: React.FC<IBookCard> = observer(({ book }) => {
    
    return (
        <div className={styles.card}>
            <img src={book.bookCoverFileUrl} alt="image"/>
        </div>
    )
})
