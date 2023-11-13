import "./BannerAboutUs.scss"
import Button from "../Button/Button";


function BannerAboutUs() {

    return (
        <div className="banner_about">
            <div className="banner_about_img">
                <img srcSet="./images/bannerAboutUs.png" alt="fruits"/>
            </div>
            <div className="banner_about_content">
                <h3>About Us</h3>
                <h2>We Believe in Organic</h2>
                <h2>Foods For Strong Health</h2>
                <p className="content_text">Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition.</p>
                <div className="banner_about_img hide">
                     <img srcSet="./images/bannerAboutUs.png" alt="fruits"/>
                </div>
                <div className="banner_about_item">
                    <div className="item-title">
                        <div className="item_img">
                            <img srcSet="./images/aboutUs-item1.svg" alt="about us" />
                        </div>
                        <div className="item_content">
                            <h4>Organic Foods Only</h4>
                            <p className="item_text active">The Product that you ordered will be verified that we have or not if have we will start to move on with the next step.</p>
                        </div>
                    </div>
                    <div className="item-title">
                        <div className="item_img">
                            <img srcSet="./images/aboutUs-item2.svg" alt="about us" />
                        </div>
                        <div className="item_content">
                            <h4>Quality Standards</h4>
                            <p className="item_text active">Once your product is packed it will be delivered to your nearby locality you can directly visit the to buy the product.</p>
                        </div>
                    </div>
                </div>
                <Button colorButton={"#274C5B"}
                titleButton={"Shop Now"}
                widthButton={"200px"}
                typeButton={"button"}
                colortitle={"#FFFFFF"}/>
            </div>
        </div>
    )
}

export default BannerAboutUs;