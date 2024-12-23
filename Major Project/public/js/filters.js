let filterTag = null;
const allTags = document.getElementsByClassName("filter");
const allListings = document.getElementsByClassName('listing-links');

let filterListings = () => {
    let tagName = (filterTag) ? filterTag.dataset.tags : null;
    for (listing of allListings){
        listing.style.display = 'block';
    }
    if (tagName){
        for (listing of allListings){
            if (!listing.dataset.tags.includes(tagName)){
                listing.style.display = 'none';
            }
        };
    }
}

for (let tag of allTags){
    tag.addEventListener("click", (event) => {
        event.stopPropagation();
        if (filterTag) filterTag.classList.remove('selected-filter');
        if (filterTag == event.currentTarget){
            filterTag = null;
        } else {
            filterTag = event.currentTarget;
            filterTag.classList.add('selected-filter');
        }
        filterListings();
    });
}