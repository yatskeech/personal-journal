import { createContext, useState } from 'react';

export const ItemContext = createContext(null);

function ItemProvider({ children }) {
	const [itemId, setItemId] = useState(null);

	return (
		<ItemContext.Provider value={{itemId, setItemId}}>
			{children}
		</ItemContext.Provider>
	);
}

export default ItemProvider;
