import styles from './Input.module.css';
import cn from 'classnames';
import { forwardRef } from 'react';

const Input = forwardRef(function Input({ isValid = true, name, ...props}, ref) {
	return (
		<input {...props} name={name} ref={ref} className={cn(styles.input, {
			[styles.invalid]: !isValid,
			[styles.title]: name === 'title',
			[styles.date]: name === 'date',
		})}/>
	);
});

export default Input;
