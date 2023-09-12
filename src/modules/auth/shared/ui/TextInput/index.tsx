import React, { useState } from 'react'
import styles from './TextInput.module.scss'

interface TextInputProps {
	placeholder?: string
	value?: string
	onChange?: (value: string) => void
	type?: React.HTMLInputTypeAttribute
}

export const TextInput: React.FC<TextInputProps> = ({ placeholder, type, onChange, value }) => {
    const [inputFocus, setInputFocus] = useState(false)

	const onInputBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => setInputFocus(!!e.target.value || false)
	const onInputFocus = () => setInputFocus(true)

    return (
		<fieldset className={styles.textInput}>
			{inputFocus && <legend>{placeholder}</legend>}
			<input
				value={value}
				onBlur={onInputBlur}
				onFocus={onInputFocus}
				onChange={(e) => onChange && onChange(e.target.value)}
				type={type}
				placeholder={inputFocus ? '' : placeholder}
			/>
		</fieldset>
    )
}
