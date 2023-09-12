import React from 'react'
import styles from './Button.module.scss'

interface IButtonProps {
    title: string
}

export const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
    const { title } = props

    return (
        <div className={styles.button}>
            <div className={styles.buttonText}>{title}</div>
        </div>
    )
}
