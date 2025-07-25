import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const context = createContext();

const ContextProvider = (props) => {
    const [activated, setActivated] = useState('Home');
    const [notesData, setNotesData] = useState([])
    const [titleToEdit, setTitleToEdit] = useState(null)
    const [idToEdit, setIdToEdit] = useState(null)
    const [NoteState, setNoteState] = useState(null)

    // to fetch data
    const getData = async () => {
        const token = localStorage.getItem('NoteToken')
        try {
            const response = await axios({
                method: 'get',
                url: 'http://localhost:3000/notes/fetch',
                headers: {
                    Authorization: token
                }
            })
            const { message, success, error, user } = response.data
            console.log(message)
            if (success) {
                setNotesData(user)
            }
        }
        catch (error) {
            console.log("there is an error", error)
        }
    }

    useEffect(() => {
        getData()
    }, [])



    const value = { activated, setActivated, notesData, setNotesData, refetchNotes: getData, titleToEdit, setTitleToEdit, idToEdit, setIdToEdit, NoteState, setNoteState };
    return (
        <context.Provider value={value}>
            {props.children}
        </context.Provider>
    );
};

export default ContextProvider;