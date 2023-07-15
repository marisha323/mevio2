import "../../css/preloader.css";
export const Preloader = () => {
    const image = "/images/preloader/preload_background.png";

    return(
        <div style={{backgroundImage: `url(${image})`}} className={"preloader-box"}>
            <img className={"preloader-img"}
                src={"/images/preloader/preloader.svg"} alt="preloader"/>
        </div>
    )
}
