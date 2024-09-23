function MessageBox({userName, textColor}){
    return (
        <div style={{color : textColor}}>
            <h2> Hello! {userName} </h2>
        </div>
    )
};

export {MessageBox};