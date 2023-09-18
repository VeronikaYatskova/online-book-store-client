import React from 'react'
import { IBook } from '../../../infrastructure/server/http/modules'

import styles from './SimpleBookList.module.scss'
import { ShortBookCard } from '../../../shared/ui/ShortBookCard'
import { Button } from '../Button'

interface ISimpleBookList {
    books: IBook[],
    onClick?: () => void
}

export const SimpleBookList: React.FC<ISimpleBookList> = (props: ISimpleBookList) => {    
    const {books, onClick} = props;
    
    return (
        <div className={styles.wrapper}>
            {
                books.map((book) => {
                    return <ShortBookCard book={book} onClick={onClick}/>
                })
            }
        </div>
    )
}
