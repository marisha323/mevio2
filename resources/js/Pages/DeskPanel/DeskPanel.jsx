import {Link} from "@inertiajs/react";

import {useEffect, useLayoutEffect, useState} from "react";

import {DashBoardLayout} from "@/Layouts/DashBoardLayout.jsx";
import {DesksContainer} from "@/Pages/DeskPanel/DesksContainer.jsx";
import {useActions} from "@/Hooks/useActions.js";
import {useThemes} from "@/Hooks/useThemes.js";

export default function DeskPanel ({desksData}) {
    const [mainTheme, setMainTheme] = useState({});

    const {setDefaultTheme} = useActions();
    const {defaultTheme} = useThemes();

    useEffect( () => {
        setMainTheme(defaultTheme);
    },[defaultTheme])

    const desksItems = desksData.map((desk) =>(
        <Link key={desk.id} href={`/current-desk?desk_id=${desk.id}`} className="group_container"
              onClick={()=>{setDefaultTheme(desk.id)}}>
            <p>{desk.deskName}</p>
            <img src={desk.deskTheme.backGroundImage} alt="" />
        </Link>
    ))

    return(
        <DashBoardLayout>
            <DesksContainer desksItems={desksItems} mainTheme={mainTheme}  />
        </DashBoardLayout>
    )
}
