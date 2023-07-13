import { Children, createContext, useEffect, useState } from "react";
import axios from "axios";

export const Provider = createContext();
const AppProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const data = await axios.get(
                    "https://jsonplaceholder.typicode.com/todos"
                );
                setUser(data.data);
                console.log(data.data);
            };

            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, []);

    const value = { user, isOpen, setIsOpen };

    return <Provider.Provider value={{ value }}>{children}</Provider.Provider>;
};

export default AppProvider;
