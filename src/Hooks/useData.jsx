import { useContext } from "react";
import { DataContext } from "../contexts/DataProvider/DataProvider";


const useData = () => {
    const {data} = useContext(DataContext);
    return data;
};

export default useData;