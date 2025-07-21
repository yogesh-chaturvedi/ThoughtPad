import { createContext, useState } from "react";

export const context = createContext();

const ContextProvider = (props) => {
    const [activated, setActivated] = useState('Home');

    const value = { activated, setActivated };

    return (
        <context.Provider value={value}>
            {props.children}
        </context.Provider>
    );
};

export default ContextProvider;