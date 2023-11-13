import ItemCard from "../ItemCard/ItemCard";
import "./OurProducts.scss";
import { useContext } from 'react';
import { MyStoreContext } from '../../App';



function OurProducts() {

  const dataStore = useContext(MyStoreContext);
  

    return (
        <div className="products_wrapper">
            <h3>Organic</h3>
            <h2>Our Products</h2>
            <div className="products_list">
            {dataStore.data.map(function (item, index) {
                if (index < 6) {
                    return <ItemCard key={item.id} 
                        category={item.category} 
                        priceOld={item.priceOld} 
                        priceNew={item.priceNew} 
                        img={item.img} 
                        alt={item.alt} 
                        title={item.title}/>
                }   
                    })}
            </div>
        </div>


    )
}

export default OurProducts;