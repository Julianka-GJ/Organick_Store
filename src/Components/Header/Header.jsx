import "./Header.scss";
import Menu from "../Menu/Menu";
import { useContext } from 'react';
import { MyStoreContext } from '../../App';


function Header() {

    const countCart = useContext(MyStoreContext);

    return (
        <div className="header">
            <div className="wrapper-menu">
                <div className="header-logo">
                    <picture>
                        <source media="(max-width: 480px)" srcSet="./images/logomob.png"/>
                        <img srcSet="./images/logo.png" alt="logo" />
                    </picture>
                </div>
                <Menu />
            </div>
            <div className="cart">
                <div className="burger-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="cart-img">
                    <svg width="26" height="24" viewBox="0 0 26 24" fill="none">
                        <path d="M10.7779 23.0001C11.4529 23.0001 12.0001 22.4529 12.0001 21.7779C12.0001 21.1029 11.4529 20.5557 10.7779 20.5557C10.1029 20.5557 9.55566 21.1029 9.55566 21.7779C9.55566 22.4529 10.1029 23.0001 10.7779 23.0001Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19.3336 23.0001C20.0086 23.0001 20.5558 22.4529 20.5558 21.7779C20.5558 21.1029 20.0086 20.5557 19.3336 20.5557C18.6585 20.5557 18.1113 21.1029 18.1113 21.7779C18.1113 22.4529 18.6585 23.0001 19.3336 23.0001Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1 1H4.7819L7.61832 17.0731H22.7459" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.11121 13.1837L22.3584 13.2907C22.4677 13.2908 22.5737 13.2529 22.6583 13.1837C22.7429 13.1144 22.8008 13.0179 22.8223 12.9107L24.5241 4.40145C24.5378 4.33283 24.5362 4.26203 24.5192 4.19414C24.5023 4.12625 24.4705 4.06297 24.4261 4.00886C24.3817 3.95476 24.3259 3.91118 24.2626 3.88128C24.1993 3.85138 24.1302 3.83589 24.0602 3.83594H5.56738" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <p>Cart</p>
                <span>{countCart.count}</span>
            </div>
        </div>
    )
}

export default Header;