import React from 'react'

import styles from './RequestCard.module.scss'
import { IRequest } from '../../../../infrastructure/server/http/modules'
import { Button } from '../../../../shared/ui'

interface IRequestCard {
    request: IRequest
}

export const RequestCard: React.FC<IRequestCard> = (props:IRequestCard) => {
    const { request } = props

    return (
        <div className={styles.wrapper}>
            <div className={styles.bookCover}>
                <img src="" alt=""/>
            </div>
            <div className={styles.bookInfo}>
                <div className={styles.title}>{request.id}</div>
                <div className={styles.user}>{request.user}</div>
            </div>
            <div className={styles.buttons}>
                <div className={styles.button}><Button title='Publish'/></div>
                <div className={styles.button}><Button title='Declaim'/></div>
            </div>
        </div>
    )
}