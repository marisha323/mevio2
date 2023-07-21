import {useEffect, useState} from "react";
import {Link} from "@inertiajs/react";
import {useFavoriteArchive} from "@/Hooks/useFavoriteArchive.js";
import {useActions} from "@/Hooks/useActions.js";


export const ArchiveDesks = ({mainTheme}) => {

    const {isArchiveToggle} = useFavoriteArchive();
    const {toggleArchiveTrue, toggleArchiveFalse} = useActions();

    const [archiveDesks, setArchiveDesks] = useState([]);

    useEffect(()=>{
        if (isArchiveToggle){
            getFavoritesHandle()
        }
    },[isArchiveToggle])

    useEffect(()=>toggleArchiveTrue,[]);


    function getFavoritesHandle () {
        axios.get("/get-archive-desks")
            .then((resp)=>{
                setArchiveDesks(resp.data);
                toggleArchiveFalse();
            })
    }


    const archives = archiveDesks.map((desk)=>(
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
            {archives}
        </>
    )
}
