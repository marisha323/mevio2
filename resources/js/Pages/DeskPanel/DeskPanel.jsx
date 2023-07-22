import {Link} from "@inertiajs/react";

import {useEffect, useLayoutEffect, useState} from "react";

import {DashBoardLayout} from "@/Layouts/DashBoardLayout.jsx";
import {DesksContainer} from "@/Pages/DeskPanel/DesksContainer.jsx";
import {useActions} from "@/Hooks/useActions.js";
import {useThemes} from "@/Hooks/useThemes.js";
import {DeskToolComponent} from "@/Pages/DeskPanel/DeskToolComponent.jsx";
import {useUserDesks} from "@/Hooks/useUserDesks.js";
import axios from "axios";

export default function DeskPanel ({desksData}) {
    const [mainTheme, setMainTheme] = useState({});

    const {setDefaultTheme} = useActions();
    const {defaultTheme} = useThemes();

    useEffect( () => {
        setMainTheme(defaultTheme);
    },[defaultTheme])

    const [desks, setDesks] = useState([]);
    useEffect(()=>{setDesks(desksData)},[]);

    const {toUpdate} = useUserDesks();
    const {toggleUpdateDesksFalse} = useActions();

    useEffect(()=>{
        axios.get("/api/user-desks")
            .then((resp)=>{
                setDesks(resp.data);
                toggleUpdateDesksFalse();
            })
            .catch((error)=>console.log(error));
    },[toUpdate])

    const desksItems = desks.map((desk) =>(
        <Link key={desk.id} href={`/current-desk?desk_id=${desk.id}`} className="group_container"
              onClick={()=>{setDefaultTheme(desk.themeId)}}>
            <p>{desk.deskName}</p>
            <img src={desk.deskTheme.backGroundImage} alt="" />
            <DeskToolComponent desk={desk} />
        </Link>
    ))

    return(
        <DashBoardLayout>
            <DesksContainer desksItems={desksItems} mainTheme={mainTheme}  />
        </DashBoardLayout>
    )
}
