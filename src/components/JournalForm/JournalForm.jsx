import styles from './JournalForm.module.css';
import Button from '../Button/Button.jsx';
import { useContext, useEffect, useReducer, useRef } from 'react';
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './JournalForm.state.js';
import Input from '../Input/Input.jsx';
import { ItemContext } from '../../context/item.context.jsx';

function JournalForm({ onSubmit, items, onDelete }) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { validation, isReady, values } = formState;

	const { itemId, setItemId } = useContext(ItemContext);
	useEffect(() => {
		if (itemId) {
			dispatchForm({type: 'SET', payload: items.find(x => x.id === itemId)});
		} else {
			dispatchForm({ type: 'CLEAR' });
		}
	}, [itemId, items]);

	const titleRef = useRef();
	const dateRef = useRef();
	const textRef = useRef();

	const focusError = ({ title, date, text }) => {
		switch (false) {
			case title:
				titleRef.current.focus();
				return;
			case date:
				dateRef.current.focus();
				return;
			case text:
				textRef.current.focus();
				return;
		}
	};

	useEffect(() => {
		let timerId;

		if (!validation.title || !validation.date || !validation.text) {
			focusError(validation);
			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET_VALIDATION' });
			}, 2000);
		}

		return () => clearTimeout(timerId);
	}, [validation]);

	useEffect(() => {
		if (isReady) {
			onSubmit(values);
			dispatchForm({ type: 'CLEAR' });
			setItemId(null);
		}
	}, [isReady, onSubmit, values]);

	const onChange = ({ target }) => {
		dispatchForm({ type: 'SET', payload: { [target.name]: target.value } });
	};

	const addJournalItem = (event) => {
		event.preventDefault();
		dispatchForm({ type: 'SUBMIT' });
	};

	const deleteItem = () => {
		onDelete(formState.values);
		dispatchForm({ type: 'CLEAR' });
		setItemId(null);
	};

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<div className={styles.header}>
				<Input type='text' name='title' ref={titleRef}
					   placeholder='Заголовок'
					   value={values.title} onChange={onChange}
					   isValid={validation.title}/>
				<div className={cn(styles.delete, {
					[styles.hidden]: !itemId,
				})} onClick={deleteItem}>
					<svg width='20' height='20' viewBox='0 0 20 20'
						 fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M16.6667 3.33334H3.33335C2.41288 3.33334 1.66669 4.07954 1.66669 5.00001V5.83334C1.66669 6.75382 2.41288 7.50001 3.33335 7.50001H16.6667C17.5872 7.50001 18.3334 6.75382 18.3334 5.83334V5.00001C18.3334 4.07954 17.5872 3.33334 16.6667 3.33334Z'
							stroke='white' strokeWidth='2'
							strokeLinecap='round' strokeLinejoin='round'/>
						<path
							d='M3.33331 7.5V15C3.33331 15.442 3.50891 15.866 3.82147 16.1785C4.13403 16.4911 4.55795 16.6667 4.99998 16.6667H15C15.442 16.6667 15.8659 16.4911 16.1785 16.1785C16.4911 15.866 16.6666 15.442 16.6666 15V7.5'
							stroke='white' strokeWidth='2'
							strokeLinecap='round' strokeLinejoin='round'/>
						<path d='M8.33331 10.8333H11.6666' stroke='white'
							  strokeWidth='2' strokeLinecap='round'
							  strokeLinejoin='round'/>
					</svg>
				</div>
			</div>
			<fieldset className={styles.fieldset}>
				<div className={styles.row}>
					<label htmlFor='date' className={styles.label}>Дата</label>
					<Input type='date' name='date' id='date' ref={dateRef}
						   value={values.date ? new Date(values.date).toISOString().slice(0, 10) : ''} onChange={onChange}
						   isValid={validation.date}/>
				</div>
				<div className={styles.row}>
					<label htmlFor='tag' className={styles.label}>Метки</label>
					<Input type='text' name='tag' id='tag' placeholder='Метка'
						   value={values.tag} onChange={onChange}/>
				</div>
			</fieldset>
			<textarea name='text' ref={textRef} value={values.text}
					  placeholder='Текст воспоминания'
					  onChange={onChange}
					  className={cn(styles.textarea, {
						  [styles.invalid]: !validation.text,
					  })}/>
			<Button>Сохранить</Button>
		</form>
	);
}

export default JournalForm;