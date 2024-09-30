// PreventDefault() : Prevents The Default Behaviour Of Elements

function handle(event){
    event.preventDefault();
    console.log("The From Is Submitted.");
}

export function Form(){
    return (
        <form onSubmit={handle}>
            <input placeholder="Write Something" />
            <button>
                Submit
            </button>
        </form>
    )
}