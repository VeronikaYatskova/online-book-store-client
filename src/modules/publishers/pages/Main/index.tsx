import React, { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../store/hooks/useTypedSelector';

import styles from './Main.module.scss'
import { Title } from '../../../../shared/ui/Title'
import { SimpleBookList } from '../../../../shared/ui/SimpleBookList';
import { IBook, IRequest } from '../../../../infrastructure/server/http/modules';
import { SimpleRequestsList } from '../../widgets/SimpleRequestsList';
import { fetchRequests } from '../../../../store/action-creator/request';

export const PublisherPage = () => {

    const [currentWidget, setCurrentWidget] = useState(false);
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

    const dispatch = useDispatch()
    const {requests, loading, error} = useTypedSelector(state => state.request)

    useEffect(() => {
        dispatch(fetchRequests())
    }, [])

    const [toDelete, setToDelete] = useState(false);

    return (
        <div className={styles.wrapper}>
            <Title title='Book Store Publisher' />
            <div className={styles.widgets}>
                <div className={currentWidget === false ? styles.activeWidget : styles.widgetsName} onClick={() => setCurrentWidget(false)}>Published books</div>
                <div className={currentWidget === true ? styles.activeWidget : styles.widgetsName} onClick={() => setCurrentWidget(true)}>Requests</div>
            </div>
            {
                currentWidget && <SimpleRequestsList requests={requests} />
            }
            {
                !currentWidget && <SimpleBookList books={books} onClick={() => setToDelete(true)}/>
            }
        </div>
    )
}
