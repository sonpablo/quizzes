import Context from 'context/GameContext'
import { useContext } from 'react'

export default function useGame() {

    const { game, dispatch } = useContext(Context)

    return { game, dispatch }

}