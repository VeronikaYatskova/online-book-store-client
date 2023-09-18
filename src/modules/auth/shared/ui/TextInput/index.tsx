import React, { useState } from 'react'
import styles from './TextInput.module.scss'

interface TextInputProps {
	placeholder?: string
	value?: string
	onChange?: (value: string) => void
	type?: React.HTMLInputTypeAttribute
	required?: boolean,
	errorMessage?: string,
	pattern?: string
}

export const TextInput: React.FC<TextInputProps> = ({ placeholder, type, onChange, value, required, errorMessage, pattern }) => {
    const [inputFocus, setInputFocus] = useState(false)
	const onInputBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => setInputFocus(!!e.target.value || false)
	const onInputFocus = () => setInputFocus(true)
	
    return (
		<fieldset className={styles.textInput}>
			{inputFocus && <legend>{placeholder}</legend>}
			<input
				className={styles.input}
				value={value}
				onBlur={onInputBlur}
				onFocus={onInputFocus}
				onChange={(e) => onChange && onChange(e.target.value)}
				type={type}
				placeholder={inputFocus ? '' : placeholder}
				required = {required}
			/>
			<span>{errorMessage}</span>
		</fieldset>
    )
}
