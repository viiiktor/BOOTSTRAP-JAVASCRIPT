let cars = [
    {
        name: "ferrari 2021",
        car_img: './images/andre-tan-LFF37AfrYDI-unsplash.jpg',
        Price: '$780,000',
    },
    {
        name: "Lamboghini",
        car_img: './images/john-vicente-CMzmQNU-DGE-unsplash.jpg',
        Price: '$380,000',
    },
    {
        name: "G-Wagon",
        car_img: './images/jorgen-hendriksen-5KiWbxxjucc-unsplash.jpg',
        Price: '$880,000',
    },
    {
        name: "Bugatti",
        car_img: './images/spencer-davis-iwFp5FvAUYE-unsplash.jpg',
        Price: '$240,000',
    },
    {
        name: "Lambo 2022, Experion",
        car_img: './images/marcus-p-oUBjd22gF6w-unsplash.jpg',
        Price: '$680,000',
    },
    {
        name: "Bugatti 2020, Spider",
        car_img: './images/viktor-theo-aIDkOU7eGgo-unsplash.jpg',
        Price: '$700,000',
    },
    {
        name: "Mustang 2020",
        car_img: './images/yuvraj-singh-phiAzHp5Nuo-unsplash.jpg',
        Price: '$500,000',
    },
    {
        name: "Audi-349 Hellhound",
        car_img: './images/tyler-clemmensen-4gSavS9pe1s-unsplash.jpg',
        Price: '$540,000',
    },
    {
        name: "Mustang Red-49",
        car_img: './images/yuvraj-singh-8Lymqsw5YV4-unsplash.jpg',
        Price: '$400,000',
    },
    {
        name: "Mercedes Benz",
        car_img: './images/dima-black-DwxlhTvC16Q-unsplash.jpg',
        Price: '$450,000',
    },
    {
        name: "Lamboghini-349",
        car_img: './images/brandon-atchison-eBJWhlqWR54-unsplash.jpg',
        Price: '$630,000',
    },
    {
        name: "maseratti 349",
        car_img: './images/serge-kutuzov-nm_UwlzQe_Q-unsplash.jpg',
        Price: '$260,000',
    },
];

for (let i = 0; i < cars.length; i++) {
   // const element = array[i];
    console.log(cars[i].name + cars[i].car_img + cars[i].Price);
    document.getElementById('gallery').innerHTML += `
        <div class="col-md-6 col-lg-3 col-sm-12 mt-5">
            <div class="card">
                <img class="card-img-top" src="`+cars[i].car_img+`" alt="Card image">
                <div class="card-body">
                    <h4 class="card-title">`+cars[i].name+`</h4>
                    <p class="card-text">`+cars[i].Price+`</p>
                    <a href="#" class="btn btn-block btn-primary stretched-link">View</a>
                </div>
            </div>
        </div>
    `;
    
}
