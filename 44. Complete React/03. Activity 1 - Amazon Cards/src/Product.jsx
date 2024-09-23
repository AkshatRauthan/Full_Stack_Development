import './Product.css'
import {ProductTitle} from './ProductTitle.jsx'
import {ProductFeatures} from './ProductFeatures.jsx';
import {ProductPrices} from './ProductPrices.jsx'

function Product({title=" Product Title", features=['Feature No 01', 'Freature No 02'] , prices}){
    return (
        <div className="Product">
            <ProductTitle title={title} />
            <ProductFeatures features={features} />
            <ProductPrices prices={prices} />
        </div>
    )
}

export {Product};