function ProductFeatures({features}){
    return(
        <div>{
            features.map((feature) => <p>{feature}</p> )
        }</div>
    )
}

export {ProductFeatures};