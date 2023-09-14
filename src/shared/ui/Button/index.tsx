import React from 'react'
import styles from './Button.module.scss'

interface IButtonProps {
    title: string,
    onClick?: () => void
}

export const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
    const { title, onClick } = props

    return (
        <div className={styles.button} onClick={onClick}>
            <div className={styles.buttonText}>{title}</div>
        </div>
    )
}
