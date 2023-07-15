import {useSelector} from "react-redux";


export const useThemes = () => {
    const {deskThemes} = useSelector(state => state);

    return {deskThemes};
}
