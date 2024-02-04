import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

// eslint-disable-next-line react/prop-types
const DataProvider = ({children}) => {

    const [data, setData] = useState([]);
    
    useEffect(()=>{
        fetch('MOCK_DATA.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    const dataInfo = {
        data
    }

    return (
        <DataContext.Provider value={dataInfo}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;