import {useSelector} from "react-redux";


export const useFavoriteArchive = () =>{
    const {favoriteArchiveSlice} = useSelector(state=>state)

    return favoriteArchiveSlice;
}
