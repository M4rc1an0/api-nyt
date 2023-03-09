import React, { createContext, useState } from "react";

const INITIAL_FAVORITES_VALUE = []

export const GlobalContext = createContext({})

export const GlobalProvider = (props) => {
    const [favoriteBooks, setFavoriteBooks] = useState(INITIAL_FAVORITES_VALUE)

    return (
        <GlobalContext.Provider value={{favoriteBooks, setFavoriteBooks}}>
            {props.children}
        </GlobalContext.Provider>
    )
}