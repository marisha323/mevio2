import {useSelector} from "react-redux";

export const useAddDeskModalVisibility = () => {
    const {addDeskModalVisibility} = useSelector(state => state);

    return {addDeskModalVisibility};
}
