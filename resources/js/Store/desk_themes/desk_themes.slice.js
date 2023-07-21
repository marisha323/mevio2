import { createSlice} from "@reduxjs/toolkit";

async function fetchThemes() {
    if (themesState.length === 0){
        const resp = await axios.get("api/themes");
        themesState = resp.data;
    }

}

let themesState = [];

let initialState = {
    left_sidebar_bg_color: "linear-gradient(180deg, #000046 0%, #1CB5E0 100%, rgba(27, 37, 56, 0.00) 100%)",
    id: "default",
    logo_font_color: "#84B7CE",
    sidebar_category_bg_color: "#2B5876",
    left_sidebar_font_color: "#84B7CE",
    layout_header_bg_color: "#2B5876",
    page_header_bg_color: "#086E9C",
    create_button_bg_color: "aqua",
    filter_input_bg_color: "aqua"
};



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
