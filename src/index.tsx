import React from 'react'
import { Provider } from 'react-redux'
import { Roles } from './infrastructure/auth/enums'
import ReactDOM from 'react-dom/client'
import { store } from './store'

const BookStoreApp = React.lazy(() => import('./modules/main'))

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BookStoreApp role={Roles.PUBLISHER} />
        </Provider>
    </React.StrictMode>
)
