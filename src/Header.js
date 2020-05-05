import React, { useEffect, useState } from 'react'
import './Header.css'

import getBrazilianStates from './api/brazilianStates'

function Header({ handleStateChange }) {
    const [fetchStates, setFetchStates] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchStates(await getBrazilianStates())
        }

        fetchAPI();
    }, [setFetchStates]);


    return(
        <header>
            <h2>CORONAVÍRUS BRASIL</h2>
            <select defaultValue="" onChange={(e) => handleStateChange(e.target.value)}>
                <option value="World">Mundo</option>
                <option value="Brazil">Brasil</option>
                {fetchStates.map((state, i) => <option key={i} value={state}>{state}</option>)}
            </select>
        </header>
    );
}

export default Header;