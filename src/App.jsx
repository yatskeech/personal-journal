import './App.css';
import Panel from './layouts/Panel/Panel.jsx';
import Body from './layouts/Body/Body.jsx';
import Header from './components/Header/Header.jsx';
import ListButton from './components/ListButton/ListButton.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import JournalForm from './components/JournalForm/JournalForm.jsx';
import { useLocalStorage } from './hooks/useLocalStorage.hook.js';
import ItemProvider from './context/item.context.jsx';

function App() {
	const [items, setItems] = useLocalStorage('data');

	const mapItems = items => items?.map(item => ({
		...item,
		date: new Date(item.date),
	})) || [];
	const pushItem = (item) => {
		if (!item.id) {
			setItems(mapItems([...items, {
				id: Math.max(...items.map(x => x.id), 0) + 1,
				...item,
			}]));
			return;
		}

		setItems(mapItems(items.map(x => {
			if (x.id === item.id) {
				return item;
			}

			return x;
		})));
	};

	const deleteItem = (item) => {
		setItems(mapItems(items).filter(x => x.id !== item.id));
	};

	return (
		<ItemProvider>
			<div className='app'>
				<Panel>
					<Header/>
					<ListButton/>
					<JournalList items={mapItems(items)}/>
				</Panel>
				<Body>
					<JournalForm items={items} onSubmit={pushItem} onDelete={deleteItem}/>
				</Body>
			</div>
		</ItemProvider>
	);
}

export default App;
