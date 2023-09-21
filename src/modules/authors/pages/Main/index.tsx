import React, { useState } from 'react'

import styles from './Main.module.scss'
import { Button, Title } from '../../../../shared/ui'
import { SimpleBookList } from '../../../../shared/ui/SimpleBookList'
import { IBook, IPublisher } from '../../../../infrastructure/server/http/modules'
import { Portal } from '../../../../shared/ui/Portal'

export const AuthorMainPage = () => {
    const books: IBook[] = [
        {
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
        },
        {
            id: '2',
            bookName: 'book', 
            bookFileUrl: 'book url',
            bookCoverFileUrl: 'book cover url',
            isbn10: 'isbn 10',
            isbn13: 'isbn 13',
            pagesCount: 10,
            publishYear: '2023',
            language: 'language',
            publisher: 'publisher',
            category: 'category',
            authors: ['author1', 'author2']
        },
        {
            id: '3',
            bookName: 'book', 
            bookFileUrl: 'book url',
            bookCoverFileUrl: 'book cover url',
            isbn10: 'isbn 10',
            isbn13: 'isbn 13',
            pagesCount: 10,
            publishYear: '2023',
            language: 'language',
            publisher: 'publisher',
            category: 'category',
            authors: ['author1', 'author2']
        },
        {
            id: '4',
            bookName: 'book', 
            bookFileUrl: 'book url',
            bookCoverFileUrl: 'book cover url',
            isbn10: 'isbn 10',
            isbn13: 'isbn 13',
            pagesCount: 10,
            publishYear: '2023',
            language: 'language',
            publisher: 'publisher',
            category: 'category',
            authors: ['author1', 'author2']
        },
        {
            id: '1',
            bookName: 'book', 
            bookFileUrl: 'book url',
            bookCoverFileUrl: 'book cover url',
            isbn10: 'isbn 10',
            isbn13: 'isbn 13',
            pagesCount: 10,
            publishYear: '2023',
            language: 'language',
            publisher: 'publisher',
            category: 'category',
            authors: ['author1', 'author2']
        },
        {
            id: '2',
            bookName: 'book', 
            bookFileUrl: 'book url',
            bookCoverFileUrl: 'book cover url',
            isbn10: 'isbn 10',
            isbn13: 'isbn 13',
            pagesCount: 10,
            publishYear: '2023',
            language: 'language',
            publisher: 'publisher',
            category: 'category',
            authors: ['author1', 'author2']
        },
        {
            id: '3',
            bookName: 'book', 
            bookFileUrl: 'book url',
            bookCoverFileUrl: 'book cover url',
            isbn10: 'isbn 10',
            isbn13: 'isbn 13',
            pagesCount: 10,
            publishYear: '2023',
            language: 'language',
            publisher: 'publisher',
            category: 'category',
            authors: ['author1', 'author2']
        },
        {
            id: '4',
            bookName: 'book', 
            bookFileUrl: 'book url',
            bookCoverFileUrl: 'book cover url',
            isbn10: 'isbn 10',
            isbn13: 'isbn 13',
            pagesCount: 10,
            publishYear: '2023',
            language: 'language',
            publisher: 'publisher',
            category: 'category',
            authors: ['author1', 'author2']
        }
    ]
    const publishers: IPublisher[] = [
        {
            id: '1',
            email: 'publisher 1',
            firstName: 'publisher 1',
            lastName: 'publisher 1'
        }
    ]
    const [publisher, setPublisher] = useState('')
    const [createRequestWindow, openCreateRequestWindow] = useState(false)
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();

    const saveFile = (e:any) => {
        const file = e.target.files[0];
        console.log(file);
        setFile(file);
        setFileName(file.name);
    }

    return (
        <div className={styles.wrapper}>
            <Title title='Book Store Author' />
            <div className={styles.widgets}>
                <div className={styles.widgetsName}>Published books</div>
                <div className={styles.button} onClick={() => openCreateRequestWindow((value) => !value)}>
                    <Button title='Create request' />
                </div>
            </div>
            <SimpleBookList books={books}/>
            {
                createRequestWindow && 
                <Portal>
                    <div className={styles.background} onClick={() => openCreateRequestWindow((value) => !value)} />
                    <div className={styles.portalWrapper}>
                        <Title title='Request' />
                        <div className={styles.textInput}>
                            <div className={styles.additionalInfo}>
                                <div className={styles.row}>
                                    <div className={styles.column}>    
                                        <div className={styles.info}>
                                            <div className={styles.infoTitle}>Publisher</div>
                                            <select className={styles.selectField}>
                                                <option selected disabled>Choose a publisher</option>
                                                {
                                                    publishers.map((publisher) => {
                                                        return (
                                                            <option className={styles.option} onClick={() => setPublisher(publisher.id)}>{publisher.lastName}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div> 
                                        <div className={styles.info}>
                                            <div className={styles.infoTitle}>File</div>
                                            <input className={styles.fileInput} accept='.pdf' name='file' type="file" onChange={saveFile}/>
                                        </div>
                                    </div>
                                    <div className={styles.column}>
                                        <div className={styles.info}>
                                            <div className={styles.infoTitle}>Choose cover</div>
                                            <input className={styles.fileInput} accept='.jpg' name='file' type="file" onChange={saveFile}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.publishButton}>
                            <Button title='Create request' />
                        </div>
                    </div>
                </Portal>
            }
        </div>
    )
}
