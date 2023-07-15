import {createSlice} from "@reduxjs/toolkit";

const initialState = [];
export const deskThemesSlice
    = createSlice({
    name: 'desk_themes',
    initialState,
    reducers: {
        getAllThemes: (state) => {
            async function fetchData()  {
                const response = await axios.get("api/themes");
                if(response){
                    state = await response.data;
                }
            }
        }
    }
})
