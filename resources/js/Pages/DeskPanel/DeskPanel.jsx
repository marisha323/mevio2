import {Link} from "@inertiajs/react";

import { useLayoutEffect, useState } from "react";

import {DashBoardLayout} from "@/Layouts/DashBoardLayout.jsx";
import {DesksContainer} from "@/Pages/DeskPanel/DesksContainer.jsx";

export default function DeskPanel ({desksData}) {

    const desksItem = desksData.map((desk) =>(
        <Link key={desk.id} href={`/current-desk?desk_id=${desk.id}`} className="group_container">
            <p>{desk.deskName}</p>
            <img src={desk.deskTheme.backGroundImage} alt="" />
        </Link>
    ))

    return(
        <DashBoardLayout>
            <DesksContainer desksItems={desksItem} />
        </DashBoardLayout>
    )
}
