import {useSelector} from "react-redux";


export const useUserDesks = () =>{
    const {userDesksSlice} = useSelector(state => state);

    return userDesksSlice;
}
