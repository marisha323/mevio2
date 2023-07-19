import {useSelector} from "react-redux";


export const useThemes = () => {
    const {defaultTheme} = useSelector(state => state);

    return {defaultTheme};
}
