import React, { useState } from 'react'

import styles from './RequestCard.module.scss'
import { IRequest, ICategory, IAuthor } from '../../../../infrastructure/server/http/modules'
import { Button, Title } from '../../../../shared/ui'
import { Portal } from '../../../../shared/ui/Portal'

interface IRequestCard {
    request: IRequest
}

export const RequestCard: React.FC<IRequestCard> = (props:IRequestCard) => {
    const { request } = props
    const [publishingPortal, openPublishingPortal] = useState(false)
    const categories:ICategory[] = [
        {
            id: '1',
            name: 'Fiction'
        },
        {
            id: '2',
            name: 'Science'
        }
    ]
    const [selectedCategory, setCategory] = useState('')
    const [selectedAuthors, setSelectedAuthors] = useState(null);
    const authors: IAuthor[] = [
        {
            id: '1',
            name: 'author 1'
        },
        {
            id: '2',
            name: 'author 2'
        },
        {
            id: '3',
            name: 'author 3'
        }
    ]
    const options = authors.map((author) => {
        return {type: author.name, label: author.name}
    })

    console.log(selectedAuthors)

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
                <div className={styles.button} onClick={() => openPublishingPortal((value) => !value)}>
                    <Button title='Publish'/>
                </div>
                <div className={styles.button}><Button title='Refuse'/></div>
            </div>
            {
                publishingPortal &&
                <Portal>
                    <div className={styles.background} onClick={() => openPublishingPortal((value) => !value)} />
                    <div className={styles.portalWrapper}>
                        <Title title='Book Publishing' />
                        <div className={styles.textInput}>
                            <div className={styles.additionalInfo}>
                                <div className={styles.row}>
                                    <div className={styles.column}>    
                                        <div className={styles.info}>
                                            <div className={styles.infoTitle}>Name</div>
                                            <input className={styles.inputField} />
                                        </div> 
                                        <div className={styles.info}>
                                            <div className={styles.infoTitle}>ISBN10:</div>
                                            <input className={styles.inputField} />
                                        </div>
                                        <div className={styles.info}>
                                            <div className={styles.infoTitle}>ISBN13:</div>
                                            <input className={styles.inputField} />
                                        </div>
                                        <div className={styles.info}>
                                            <div className={styles.infoTitle}>Count of pages:</div>
                                            <input className={styles.inputField} />
                                        </div>
                                        <div className={styles.info}>
                                            <div className={styles.infoTitle}>Publishing year:</div>
                                            <input className={styles.inputField} />
                                        </div>
                                    </div>
                                    <div className={styles.column}>
                                        <div className={styles.info}>
                                            <div className={styles.infoTitle}>Language</div>
                                            <input className={styles.inputField} />
                                        </div>
                                        <div className={styles.info}>
                                            <div className={styles.infoTitle}>Category</div>
                                            <select className={styles.selectField}>
                                                <option selected disabled>Choose a category</option>
                                                {
                                                    categories.map((category) => {
                                                        return (
                                                            <option className={styles.option} onClick={() => setCategory(category.id)}>{category.name}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <div className={styles.info}>
                                            <div className={styles.infoTitle}>Authors</div>
                                            
                                        </div>
                                        <div className={styles.info}>
                                            <div className={styles.infoTitle}>FileName</div>
                                            <input className={styles.inputField} />
                                        </div>
                                        <div className={styles.publishButton}>
                                            <Button title='Publish' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Portal>
            }
        </div>
    )
}
