import React from 'react'
import { observer } from 'mobx-react'

import { IBook } from '../../../infrastructure/server/http/modules'
import styles from './BookCard.module.scss'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../../infrastructure/config'

interface IBookCard {
    book: IBook
}

export const BookCardWidget: React.FC<IBookCard> = observer(({ book }) => {

    const navigate = useNavigate()

    const onClickHandler = () => {
        navigate(routes.users.bookinfo.goto(book.id))
    }

    return (
        <div className={styles.card} onClick={onClickHandler}>
            <img src={book.bookCoverFileUrl} alt="image"/>
        </div>
    )
})
