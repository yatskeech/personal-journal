import { useEffect, useState } from 'react';

export function useLocalStorage(key) {
	const [data, setData] = useState();

	useEffect(() => {
		const receivedData = JSON.parse(localStorage.getItem(key)) ?? [];
		if (receivedData) {
			setData(receivedData);
		}
	}, []);

	const saveData = (newData) => {
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	};

	return [data, saveData];
}