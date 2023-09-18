import React from 'react'
import styles from './BookInfoCard.module.scss'

import { IBook } from '../../../../infrastructure/server/http/modules'
import { observer } from 'mobx-react'
import { Button } from '../../../../shared/ui'

interface IBookInfo {
    book: IBook
    commentsCount: number
}

export const BookInfoCardWidget: React.FC<IBookInfo> = observer(({book, commentsCount}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.bookCover}>
                <img className={styles.bookCover} src={book.bookCoverFileUrl} alt='cover' />
            </div>
            <div className={styles.bookInfo}>
                <div className={styles.bookName}>{book.bookName}</div>
                <div className={styles.authors}>
                    {
                        book.authors.map((author) => {
                            return (
                                <div className={styles.author}>
                                    <div className={styles.smallText}>{author}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.smallText}>Count of comments: {commentsCount}</div>
                <div className={styles.additionalInfo}>
                    <div className={styles.row}>
                        <div className={styles.column}>    
                            <div className={styles.info}>
                                <div className={styles.infoTitle}>Category:</div>
                                <div className={styles.infoPoint}>{book.category}</div>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.infoTitle}>Language:</div>
                                <div className={styles.infoPoint}>{book.language}</div>
                            </div> 
                            <div className={styles.info}>
                                <div className={styles.infoTitle}>ISBN10:</div>
                                <div className={styles.infoPoint}>{book.isbn10}</div>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.infoTitle}>ISBN13:</div>
                                <div className={styles.infoPoint}>{book.isbn13}</div>
                            </div>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.info}>
                                <div className={styles.infoTitle}>Publish year:</div>
                                <div className={styles.infoPoint}>{book.publishYear}</div>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.infoTitle}>Publisher:</div>
                                <div className={styles.infoPoint}>{book.publisher}</div>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.infoTitle}>Pages:</div>
                                <div className={styles.infoPoint}>{book.pagesCount}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.button}>
                        <Button title='Download'/>
                    </div>
                    <div className={styles.button}>
                        <Button title='Add to Favorites'/>
                    </div>
                </div>
            </div>
        </div>
    )
})
