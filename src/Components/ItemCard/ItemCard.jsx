import "./ItemCard.scss"
import { useContext } from 'react';
import { MyStoreContext } from '../../App';
import Rating from "../Rating/Rating";


function ItemCard(props) {
    const countCart = useContext(MyStoreContext);

    const addToCart = (e) => {
        countCart.setCount(prev => prev + 1);
      }

    return (
        <div className="item">
            <div className="item_category">
                <p>{props.category}</p>
            </div>
            <div className="item_img">
                <img srcSet={props.img} alt={props.alt} />
            </div>
            <div className="item_heading">
                <p className="item_title">{props.title}</p>
                <button onClick={addToCart} type="button">Add to </button>
            </div>
            <div className="item_price">
                <div className="price">
                    <p className="price_old">{props.priceOld}</p>
                    <p className="price_new">{props.priceNew}</p>
                </div>
                <Rating/>
            </div>
        </div>
    )
}

export default ItemCard;