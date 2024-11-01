import styles from './JournalItem.module.css';
import CardButton from '../CardButton/CardButton.jsx';
import cn from 'classnames';

function JournalItem({ title, date, text, onClick, className }) {
	const formatedDate = new Intl.DateTimeFormat('ru-RU').format(date);

	return (
		<li className={styles['journal-item']}>
			<CardButton className={cn(styles['journal-item__button'], className)} onClick={onClick}>
				<h2 className={styles['journal-item__header']}>{title}</h2>
				<div className={styles['journal-item__body']}>
					<span className={styles['journal-item__date']}>{formatedDate}</span>
					<p className={styles['journal-item__text']}>{text}</p>
				</div>
			</CardButton>
		</li>
	);
}

export default JournalItem;