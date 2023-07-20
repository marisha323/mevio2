import {useActions} from "@/Hooks/useActions.js";

export const DesksContainer = ({desksItems, mainTheme}) => {
    const { showAddDeskModal } = useActions();
    return(
        <div className="middle_desks_container">
            <div className="middle_top_body"
                    style={{backgroundColor: mainTheme.page_header_bg_color}}>
                <button className="create_btn" onClick={()=>showAddDeskModal()}
                    style={{backgroundColor: mainTheme.create_button_bg_color,
                            color: mainTheme.layout_header_bg_color}}>Створити</button>
                <h1 style={{color: mainTheme.left_sidebar_font_color}}>Дошки</h1>
            </div>
            <div className="middle_middle_body">
                <h1 className="desks_amount"
                    style={{color: mainTheme.left_sidebar_font_color}}>Усього дощок : {desksItems.length}</h1>
                <div className="boards">
                    {desksItems}
                </div>
            </div>
        </div>
    )
}
