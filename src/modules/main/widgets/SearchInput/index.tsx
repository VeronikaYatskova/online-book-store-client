import React, { useState } from 'react'
import { observer } from 'mobx-react'

import styles from './SearchInput.module.scss'

export const SearchInputWidget = observer(() => {
    const [searchParameter, setSearchParameter] = useState('');

    return (
        <div className={styles.wrapper}>
            <input 
                placeholder='Search by name, author, category'
                onChange={(e) => setSearchParameter(e.target.value)}
            />
            <div className={styles.searchButton}>
                Search
            </div>
        </div>
    )
}) 