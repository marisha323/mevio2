import "../../../css/desk_panel/desk_tool.css";
import {useState} from "react";

export const DeskToolComponent = ({desk}) => {

    const [isFavorite, setIsFavorite] = useState(desk.isFavorite);
    const [isArchive, setIasArchive] = useState(desk.isArchive);

    const favoriteImg = isFavorite
        ? "/images/desk_tool/favorite_true.svg"
        : "/images/desk_tool/favorite_false.svg";

    const archiveImg = isArchive
        ? "/images/desk_tool/archive_true.svg"
        : "/images/desk_tool/archive_false.svg";

    function ArchiveToggleHandler(e) {
        e.preventDefault();
        e.stopPropagation()
    }

    function FavoriteToggleHandler(e) {
        e.preventDefault();
        e.stopPropagation()
        const body={
            deskId: desk.id,
            isFavorite: isFavorite
        }

        axios.post("/change-desk-favorite", body)
            .then((resp) => {
                const message = resp.data.message;
                if (message === "success")
                {
                    setIsFavorite(!isFavorite);
                }
            })
            .catch((error)=>console.log(error.message))
    }

    return (
        <div className="desk-tool">
            <img title="favorite"
                 onClick={FavoriteToggleHandler}
                 src={favoriteImg}
                 alt="" className="desk-tool-img"/>

            <img title="archive"
                 onClick={ArchiveToggleHandler}
                 src={archiveImg}
                 alt="" className="desk-tool-img"/>
        </div>
    )

}

