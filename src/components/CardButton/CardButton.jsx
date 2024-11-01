import styles from './CardButton.module.css';
import cn from 'classnames';

function CardButton({ children, className, ...props }) {
	return (
		<button {...props} className={cn(styles['card-button'], {
			[className]: className,
		})}>{children}</button>
	);
}

export default CardButton;
