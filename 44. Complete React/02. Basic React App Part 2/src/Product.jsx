import './Product.css'


//  01. Rendering Array : 

// Method 01 => Passing Each Element Of Array As List Items.
function Product1({title = 'Product', price = NaN, features = []}){
    return (
        <div className='Product'>
            <h3> {title} </h3>
            <h4>Price : {price} </h4>
            <p> {features} </p>
        </div>
    );
}

// Method 02 =>  Converting Elements Into List Items Using Array.map() Function Just Before Rendering
function Product2({title = 'Product', price = NaN, features = []}){
    return (
        <div className='Product'>
            <h3> {title} </h3>
            <h4>Price : {price} </h4>
            <p> {features.map((feature) => <li>{feature}</li>)}</p>
        </div>
    );
}


// 02. Using Conditionals And Adding Dynamic / Conditional Styling :

// Method 01 => Return Statements According To Conditions
function Product3({title = 'Product', price = NaN}){
    if (price >= 3e4){
        return (
            <div className='Product'>
                <h3> {title} </h3>
                <h4>Price : {price} </h4>
                <p> Discount : 5% </p>
            </div>
        );
    } else {
        return (
            <div className='Product'>
                <h3> {title} </h3>
                <h4>Price : {price} </h4>
            </div>
        );
    }
}

// Method 02 => Using Ternary Statement
// Paragraph Is Inside Ternary Statemenet So That An Empty Paragraph Is Not Appended In Case Of Null Discount
// {price >= 3e4 && <p> Discount : 5% </p>} <=> {price >= 3e4 ? <p> Discount : 5% </p> : null}
function Product4({title = 'Product', price = NaN}){
    let isDiscount = price>=3e4;
    let styles = { backgroundColor : isDiscount ? "pink" : "yellow"}; // CSS Components Will Always Be In Camel Case.
    return (
        <div className='Product' style={styles}>
            <h3> {title} </h3>
            <h4>Price : {price} </h4>
            { isDiscount && <p> Discount : 5% </p> }
        </div>
    );
}


export {Product1, Product2, Product3, Product4};