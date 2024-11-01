import styles from './Button.module.css';
import cn from 'classnames';

function Button({ children, ...props }) {
	return (
		<button {...props} className={cn(styles.button, styles.accent)}>
			{children}
		</button>
	);
}

export default Button;
