import styles from './JournalList.module.css';
import JournalItem from '../JournalItem/JournalItem.jsx';
import { useContext, useMemo } from 'react';
import { ItemContext } from '../../context/item.context.jsx';
import cn from 'classnames';

function JournalList({ items }) {
	const { itemId, setItemId } = useContext(ItemContext);
	const filteredItems = useMemo(() => {
		return items
			.sort((a, b) => {
				if (a.date > b.date) {
					return -1;
				} else {
					return 1;
				}
			});
	}, [items]);

	if (!items.length) {
		return (
			<p className={styles.notification}>
				Записей пока нет, добавьте первую
			</p>
		);
	}

	return (
		<ul className={styles['journal-list']}>
			{filteredItems.map(({id, title, date, text}) => (
				<JournalItem key={id}
							 title={title}
							 date={date}
							 text={text}
							 onClick={() => setItemId(id)}
							 className={cn({
								 [styles.active]: id === itemId,
							 })}
				/>
			))}
		</ul>
	);
}

export default JournalList;
