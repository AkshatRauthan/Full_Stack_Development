import {Product1, Product2, Product3, Product4} from "./Product.jsx"

function ProductTab() {
    let options = [ "Fast", "Durable", "Latest", "Hi-Tech"];
    return (
        <> 
            {/* Rendering Array : Method 01 => Passing List Items In Array */}
            <Product1 title="Laptop" price={2e4} features={[<li>Powerfull</li>, <li>Durable</li>, <li>Latest</li>]}/>

            {/* Rendering Array : Method 02 => Converting Elements Into List Items Using Array.map() Function Just Before Rendering */}
            <Product2 title="Phone" price={3.5e4} features={options} />

            {/* Using Conditionals : Method 01 => Return Statements According To Conditions */}
            <Product3 title="Nissan GTR" price={1e6} />


            <Product4 title="Computer" price={4.5e4} />
            <Product4 title="Monitor" price={2.5e4} />
        </>
    );
};

export {ProductTab};