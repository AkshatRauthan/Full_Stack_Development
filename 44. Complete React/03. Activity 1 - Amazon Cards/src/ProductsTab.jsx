import { Product } from "./Product";
import './ProductsTab.css'

function ProductsTab({data}){
    return(
        <div className="ProductTab">
            {console.log(data)}
            <Product title={data[0].title} features={data[0].features} prices={data[0].price} />
            <Product title={data[1].title} features={data[1].features} prices={data[1].price} />
            <Product title={data[2].title} features={data[2].features} prices={data[2].price} />
            <Product title={data[3].title} features={data[3].features} prices={data[3].price} />
        </div>
    )
}

export {ProductsTab};