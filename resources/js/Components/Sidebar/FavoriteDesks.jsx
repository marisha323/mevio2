import {useEffect, useState} from "react";
import {Link} from "@inertiajs/react";
import {useFavoriteArchive} from "@/Hooks/useFavoriteArchive.js";
import {useActions} from "@/Hooks/useActions.js";


export const FavoriteDesks = ({mainTheme}) => {

    const {isFavoriteToggle} = useFavoriteArchive();
    const {toggleFavoriteTrue, toggleFavoriteFalse} = useActions();

    const [favoriteDesks, setFavoriteDesks] = useState([]);

    useEffect(()=>{
        if (isFavoriteToggle){
            getFavoritesHandle()
        }
    },[isFavoriteToggle])

    useEffect(()=>toggleFavoriteTrue,[]);


    function getFavoritesHandle () {
        axios.get("/get-favorite-desks")
            .then((resp)=>{
                setFavoriteDesks(resp.data);
                toggleFavoriteFalse();
            })
    }


    const favorites = favoriteDesks.map((desk)=>(
        <Link key={desk.id} href={`/current-desk?desk_id=${desk.id}`} className="my-desk-item"
              onClick={()=>{setDefaultTheme(desk.themeId)}}
              style={{borderBottom: `5px solid ${mainTheme.sidebar_category_bg_color}`}}>
          <span className="my-desk-item-span">
            <img className="my-desk-item-image" src={desk.deskTheme.backGroundImage} alt=""/>
            <span className="my-desk-item-title"
                  style={{color: mainTheme.left_sidebar_font_color}}>{desk.deskName}</span>
          </span>
        </Link>
    ))

    return(
        <>
            {favorites}
        </>
    )
}
