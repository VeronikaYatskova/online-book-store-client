import React from 'react'

import styles from './Comments.module.scss'
import { observer } from 'mobx-react'
import { IComment } from '../../../../infrastructure/server/http/modules/comments'

interface ICommentsWidget {
    comments: IComment[]
}

export const CommentsWidget: React.FC<ICommentsWidget> = observer(({comments}) => {
    return (
        <div className={styles.wrapper}>
            {
                comments.map((comment) => {
                    return (
                        <div className={styles.commentWrapper}>
                            <div className={styles.row}>
                                <div className={styles.author}>{comment.user}</div>
                                <div className={styles.date}>{comment.date}</div>
                            </div>
                            <div className={styles.text}>{comment.text}</div>
                        </div>
                    )
                })
            }
        </div>
    )
})
