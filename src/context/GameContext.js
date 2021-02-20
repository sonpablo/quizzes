import React, { createContext, useReducer } from 'react'
import { gameReducer } from 'reducers/gameReducer'

const Context = createContext({})

export function GameContext({ children }) {

    const [game, dispatch] = useReducer(gameReducer, {
        earnedPoints: 0,
        difficulty: null,
        category: null,
        configured: false,
    })

    return (
        <Context.Provider value={{
            game,
            dispatch
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context