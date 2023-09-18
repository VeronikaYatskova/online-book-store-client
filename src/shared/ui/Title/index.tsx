import React from 'react'

import styles from './Title.module.scss'

interface ITitle {
    title: string
}

export const Title: React.FC<ITitle> = ({title}) => {
    return (
        <div className={styles.title}>
            {title}
        </div>
    )
}