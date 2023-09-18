import React from 'react'

import styles from './ShortBookCard.modules.scss'
import { IBook } from '../../../infrastructure/server/http/modules'
import { Button } from '../Button'

interface IShortBookCard {
    book: IBook,
    onClick?: () => void
}

export const ShortBookCard: React.FC<IShortBookCard> = (props:IShortBookCard) => {
    const { book, onClick } = props
    console.log(onClick)

    return (
        <div className='wrapper'>
            <div className={styles.bookCover}>
                <img src="" alt=""/>
            </div>
            <div className='bookInfo'>
                <div className='title'>{book.bookName}</div>
                <div className='authors'>
                    {
                        book.authors.map((author) => {
                            return (
                                <div className='author'>{author}</div>
                            )

                        })
                    }
                </div>
                <div className='category'>{book.category}</div>
            </div>
            { (onClick !== undefined )  && <div className='button'><Button title='Delete' onClick={onClick} />  </div>}
        </div>
    )
}
