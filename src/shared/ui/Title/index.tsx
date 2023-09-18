import React from 'react'

import styles from './Title.module.scss'
import { useNavigate } from 'react-router-dom'

import { routes } from '../../../infrastructure/config'

interface ITitle {
    title: string
}

export const Title: React.FC<ITitle> = ({title}) => {
    const navigate = useNavigate()
    const onClickHandler = () => {
        navigate(routes.main.goto())
    }

    return (
        <div className={styles.title} onClick={onClickHandler}>
            {title}
        </div>
    )
}
