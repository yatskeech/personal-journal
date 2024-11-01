import styles from './ListButton.module.css';
import CardButton from '../CardButton/CardButton.jsx';
import { useContext } from 'react';
import { ItemContext } from '../../context/item.context.jsx';

function ListButton() {
	const { setItemId } = useContext(ItemContext);

	return (
		<CardButton className={styles['list-button']} onClick={() => setItemId(null)}>
			<img src='/public/plus.svg' alt=''/>
			Новое воспоминание
		</CardButton>
	);
}

export default ListButton;
