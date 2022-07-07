import { useEffect } from 'react';
import { createContext, useState } from 'react';

export const GlobalContext = createContext([]);

export const GlobalContextProvider = ({ children }) => {
    const [destinations, setDestinations] = useState('');
    const [language, setLanguage] = useState('');

    /* declaration cards content */
    const cards = [
        {
            id: 1,
            destination: 'Moscow',
            Text: 'Trip to moscow',
            price: '$600,86',
            image: 'moscow.jpg',
        },
        {
            id: 2,
            destination: 'Puerto Rico',
            Text: 'Trip to Puerto Rico',
            price: '$560,46',
            image: 'puerto-rico.jpg',
        },
        {
            id: 3,
            destination: 'Honduras',
            Text: 'Trip to Honduras',
            price: '$210,46',
            image: 'honduras.jpg',
        },
    ];


    return (
        <GlobalContext.Provider
            value={{
                cards,
                setDestinations,
                destinations,
                setLanguage,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
