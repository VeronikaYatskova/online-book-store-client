import React from 'react'

import styles from './BookInfo.module.scss'

import { BookInfoCardWidget, CommentsWidget } from '../../widgets'
import { Button, Title } from '../../../../shared/ui'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../../../infrastructure/config'
import { IBook } from '../../../../infrastructure/server/http/modules'
import { IComment } from '../../../../infrastructure/server/http/modules/comments'

export const BookInfoPage = () => {
    
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate(routes.main.goto())
    }

    const book: IBook = {
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
    }

    const comments: IComment[] = [
        {
            id: '1',
            bookId: '1',
            user: 'user 1',
            date: '12.01.2012',
            text: 'Super cool book!'
        }
    ]

    return (
        <div className={styles.wrapper}>
            <Title title='Book Store'/>
            <div className={styles.mainLink} onClick={onClickHandler}>
                <div className={styles.text}>Main</div>
            </div>
            <BookInfoCardWidget book={book} commentsCount={comments.length}/>
            <div className={styles.commentsInput}>
                <textarea placeholder='Write a comment' />
            </div>
            <Button title='Publish'/>
            <CommentsWidget comments={comments} />
        </div>
    )
}
