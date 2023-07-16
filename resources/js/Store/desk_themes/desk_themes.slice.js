import { createSlice} from "@reduxjs/toolkit";

async function fetchThemes() {
    if (themesState.length === 0){
        const resp = await axios.get("api/themes");
        themesState = resp.data;
    }

}

let themesState = [];

let initialState = {};



const deskThemesSlice
    = createSlice({
    name: 'defaultTheme',
    initialState,
    reducers: {
        fillThemes: (state) => {
            fetchThemes();
        },
        getThemeById: (state, {payload: id}) => {
            const index = themesState.findIndex(t => t.id === id);
            if (index !== -1){
                return themesState[index];
            }
            return state;
        },
        setDefaultTheme: (state, {payload: id}) => {
            const index = themesState.findIndex(t => t.id === id);
            if (index !== -1){
                return themesState[index];
            }
            return state;
        },
        getDefaultTheme: (state) => {
            return state;
        }
    },
})


export const {actions, reducer} = deskThemesSlice;
