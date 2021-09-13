const brands = {
    sony : 4.7,
    samsung : 4.8,
    vigio : 4.5,
    philips : 3.5,
    videocon : 5.0
}

const starsTotal = 5;

const getRatings = () =>{
    for(const brand in brands)
    {
        const percentage = (brands[brand]/starsTotal)*100;
        // we need to round it to its nearest tenth because value can excessively long
        // this will also include (%) symbol so we need to use template string for that
    
        const percentageeRounded = `${Math.round(percentage/10)*10}%`;
        document.querySelector(`.${brand} .inner-star`).style.width = percentageeRounded;

    }
}
// This will ensure the ratings will be initiated when the document is perfecrtly loaded
document.addEventListener('DOMContentLoaded',getRatings);


