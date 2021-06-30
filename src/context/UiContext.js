import React, { createContext, useState } from 'react';

export const UiContext = createContext();

export const UiProvider = ({ children }) => {
    const [isMenuHidden, setIsMenuHidden] = useState(false);

    const showMenu = (params) => {
        setIsMenuHidden(false);
    };
    const hideMenu = (params) => {
        setIsMenuHidden(true);
    };

    return (
        <UiContext.Provider value={{ isMenuHidden, showMenu, hideMenu }}>
            {children}
        </UiContext.Provider>
    );
};
