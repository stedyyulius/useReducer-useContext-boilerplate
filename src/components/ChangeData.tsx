import { useContext, useState } from "react"

import { AppContext } from "../context/ContextProvider"

export const ChangeData: React.FC = () => {
    const [data, setData] = useState('');

    const { dispatch } = useContext(AppContext);

    const handleAddData = () => {
        dispatch({
            type: 'DATA',
            payload: data
        })
    }

    return (
        <>
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData(e.target.value)} />
            <button onClick={() => handleAddData()}>Change Data</button>
        </>
    )
}