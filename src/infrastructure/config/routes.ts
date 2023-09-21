import { IBook } from '../../infrastructure/server/http/modules'

export const routes = {
    basepath: '/',
    goto() {
        return '/'
    },
    main: {
        path: '/book-store',
        goto: () => '/book-store'
    },
    auth: {
        login: {
            path: 'sign-in',
            goto: () => '/sign-in'
        },
        register: {
            path: 'sign-up',
            goto: () => '/sign-up'
        }
    },
    users: {
        main: {
            path: 'user',
            goto: () => '/user'
        },
        bookinfo: {
            path: 'book-store/:bookId',
            goto: (bookId: IBook['id']) => `${bookId}`
        }
    },
    authors: {
        main: {
            path: 'author',
            goto: () => '/author'
        },
        books: {
            path: 'books',
            goto: () => '/books'
        }
    },
    publishers: {
        main: {
            path: 'publisher',
            goto: () => '/publisher'
        }
    }
}
