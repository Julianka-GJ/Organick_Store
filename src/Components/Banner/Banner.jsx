import "./Banner.scss"
import Button from "../Button/Button";


function Banner() {

    return (
        <div className="banner">
            <div className="banner_background">
                <img srcSet="./images/banner.jpg" alt="banner"/>
            </div>
            <div className="banner_content">
                <h3>Made with nature</h3>
                <h1>Welcome to the world of nature and organic.</h1>
                <Button colorButton={"#EFD372"}
                titleButton={"Explore Now"}
                typeButton={"button"}
                colortitle={"#274C5B"}/>
            </div>
        </div>
    )
}

export default Banner;