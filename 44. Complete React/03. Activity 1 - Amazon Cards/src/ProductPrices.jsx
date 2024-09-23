function OldPrice({oldPrice}){
    return (
        <span>
            <strike>{oldPrice}</strike>
        </span>
    )
}

function NewPrice({newPrice}){
    return (
        <span><b>
            {newPrice}
        </b></span>
    )
}

function ProductPrices({prices=[1200, 999]}){
    return (
        <div className="ProductPrices">
            <OldPrice oldPrice={prices[0].toLocaleString("en-IN")} />
            &nbsp;&nbsp;
            <NewPrice newPrice={prices[1].toLocaleString("en-IN")} />
        </div>
    )
};

export {ProductPrices};