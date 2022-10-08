import { useContext } from "react"

import { AppContext } from "../context/ContextProvider"

export const Data: React.FC = () => {

    const { state } = useContext(AppContext);

    return (
        <h1>{state.data}</h1>
    )
}