class Movie {
    constructor(id, title, director, year, image) {
        this.title = title;
        this.director = director;
        this.year = year;
        this.image = image;
        this.id = id;


    }

    getDetails() {
        return `${this.title} (${this.year}) by ${this.director}`;
    }
}

class ComedyMovie extends Movie {
    constructor(id, title, director, year, leadComedian, image) {
        super(id, title, director, year, image);
        this.leadComedian = leadComedian;
    }

    getDetails() {
        return `${super.getDetails()} - Comedy starring ${this.leadComedian}`;
    }
}

class ActionMovie extends Movie {
    constructor(id, title, director, year, stuntCoordinator, image) {
        super(id, title, director, year, image);
        this.stuntCoordinator = stuntCoordinator;
    }

    getDetails() {
        return `${super.getDetails()} - Action with stunts by ${this.stuntCoordinator}`;
    }
}

const movieLibrary = [];

// 15 Regular Movies
movieLibrary.push(new Movie(1, "The Silent Echo", "Jane Smith", 2010, "https://media.istockphoto.com/id/1075079406/photo/weapon-wielding-viking-inspired-black-warrior.jpg?s=612x612&w=0&k=20&c=Q9bbrDDCB2sCQQ2LcbgguberKOPZ1v9mn5y1Mma8-jE="));
movieLibrary.push(new Movie(2, "Beyond the Horizon", "Alan Rickman", 2011, "https://media.istockphoto.com/id/2186789147/photo/3d-render-cyborg-woman-stands-in-an-attacking-pose-with-an-assault-gun-in-one-hand.jpg?s=612x612&w=0&k=20&c=HCacXJiqEMTnHkEX5EJAzQkqB0DAzbManQHfjMn1Vbg="));
movieLibrary.push(new Movie(3, "Whispers of Time", "Mia Turner", 2012, "https://media.istockphoto.com/id/1393151713/vector/karate-kick-martial-arts-inscription-on-illustration-is-a-hieroglyphs-of-karate-japanese.jpg?s=612x612&w=0&k=20&c=Xd7wqBohRhJBNkeAWwJvvo1fQupuU2qJPmUzkbSjRMM="));
movieLibrary.push(new Movie(4, "Echoes of War", "Jake Carson", 2013, "https://media.istockphoto.com/id/1520056460/photo/thriller.jpg?s=612x612&w=0&k=20&c=mCyJukUXEkhWYZl8dIGXfiWv68aqUarJdVWZnCB9OLs="));
movieLibrary.push(new Movie(5, "Moonlight Diary", "Zara Holt", 2014, "https://cdn.pixabay.com/photo/2023/07/22/04/15/motorbike-8142649_640.jpg"));


movieLibrary.push(new Movie(6, "Winter’s Code", "Leo Grant", 2015, "https://media.istockphoto.com/id/973095856/photo/group-of-playful-colleagues-having-fun-on-a-break-at-casual-office.jpg?s=612x612&w=0&k=20&c=SunqgFUvgseISFI06Xk4MdyfhouAPVE3j5TQKtegGOk="));
movieLibrary.push(new Movie(7, "Glass Veil", "Emily Rhodes", 2016, "https://media.istockphoto.com/id/508555286/photo/girl-plays-superhero.jpg?s=612x612&w=0&k=20&c=un-Mrg2TWU_SRr2IUvNsdd8U8ZAV5nogj7akCyox0Sk="));
movieLibrary.push(new Movie(8, "Chronicles of Now", "Dean Wallace", 2017, "https://media.istockphoto.com/id/1199296914/vector/superhero-in-futuristic-city-2.jpg?s=612x612&w=0&k=20&c=yqq2RDBKDEgtARSwg9rMHAtQZFgcMMbWt79g52PEiSE="));
movieLibrary.push(new Movie(9, "Seasons Apart", "Nina Fields", 2018, "https://media.istockphoto.com/id/817388356/photo/burning-building-group-of-firemen-descend-on-burning-stairs-on-foreground-one-fireman-holds.jpg?s=612x612&w=0&k=20&c=noBsLfLjLgQsCBKMU1-WNvIYplbmXd45HmH9ll7AKcM="));
movieLibrary.push(new Movie(10, "Fading Colors", "Jules Bennett", 2019, "https://media.istockphoto.com/id/817389124/photo/brave-firefighter-runs-up-the-stairs-raging-fire-is-seen-everywhere.jpg?s=612x612&w=0&k=20&c=sAX_OGiZzbp6wu_lDgVUDfJTWFgKV2ZMxQQd3U49kHU="));
movieLibrary.push(new Movie(11, "Shadows of Light", "Claire Reign", 2020, "https://media.istockphoto.com/id/1184584198/photo/soldier.jpg?s=612x612&w=0&k=20&c=H0TtSc6QjcB1Y8VmI4067erfAsOqY2kAEqhQTRZSBJQ="));
movieLibrary.push(new Movie(12, "Frozen Fire", "Darren Cole", 2021, "https://media.istockphoto.com/id/1218221267/photo/post-apocalyptic-warrior-boy-outdoors-in-a-wasteland.jpg?s=612x612&w=0&k=20&c=RXgaclZK7eU5Wsab9uIY-NxvIClwT9I9BKeLToFI58A="));
movieLibrary.push(new Movie(13, "Digital Mirage", "Olivia Young", 2022, "https://media.istockphoto.com/id/2204516964/photo/a-valiant-warrior-in-shining-armor-raises-his-sword-high-ready-for-fierce-battle.jpg?s=612x612&w=0&k=20&c=8hW-xBUgheMP1mOeR1LhF-BOWdqTU95-trL25gZHfNo="));
movieLibrary.push(new Movie(14, "Traces", "Marcus Vale", 2023, "https://media.istockphoto.com/id/1257188824/photo/asian-people-in-police-vest-standing-with-a-baseball-bat-and-gun.jpg?s=612x612&w=0&k=20&c=mjr1Borx9_BETk29zrTo9ck7MTvemMSEZ88NTZdXLcc="));
movieLibrary.push(new Movie(15, "Silent Symphony", "Rita Black", 2024, "https://media.istockphoto.com/id/1006692370/photo/bearded-tattooed-viking-warrior-king-and-prince-in-front-of-warrior-hoard-and-background.jpg?s=612x612&w=0&k=20&c=eDpi6FyyWje3vFs7S_spd3qa6RuVZQ-n8zlKtLuvml4="));

// 12 Comedy Movies
movieLibrary.push(new ComedyMovie(16, "Laugh Riot", "Tony Hale", 2015, "Jim Carrey", "https://media.istockphoto.com/id/1299748822/photo/post-apocalyptic-woman-and-boy-outdoors-in-the-wasteland.jpg?s=612x612&w=0&k=20&c=aUdkWk6X6hREXR5fg3E_YawvQZj2pnZPfQg6GvNzNGc="));
movieLibrary.push(new ComedyMovie(17, "Oops! Again", "Helen Joy", 2016, "Kevin Hart", "https://media.istockphoto.com/id/1184584198/photo/soldier.jpg?s=612x612&w=0&k=20&c=H0TtSc6QjcB1Y8VmI4067erfAsOqY2kAEqhQTRZSBJQ="));
movieLibrary.push(new ComedyMovie(18, "The Clown Job", "Roger Steele", 2017, "Will Ferrell", "https://media.istockphoto.com/id/1232936150/photo/weapon-wielding-viking-warriors-in-formation.jpg?s=612x612&w=0&k=20&c=rDkT0C0lGHznKKMSFwfjHzrBcxAetgCVB1O0Xd1Icvo="));
movieLibrary.push(new ComedyMovie(19, "Bachelor Bros", "Nina Love", 2018, "Seth Rogen", "https://media.istockphoto.com/id/1232936150/photo/weapon-wielding-viking-warriors-in-formation.jpg?s=612x612&w=0&k=20&c=rDkT0C0lGHznKKMSFwfjHzrBcxAetgCVB1O0Xd1Icvo="));
movieLibrary.push(new ComedyMovie(20, "House of Jokes", "Marvin Gold", 2019, "Adam Sandler", "https://media.istockphoto.com/id/985143938/photo/young-laughing-couple-woman-and-man-in-3d-glasses-and-casual-clothes-watching-movie-film-on.jpg?s=612x612&w=0&k=20&c=a5PcBSENcBKEhZXMd5j-sWORcdA6b-eJgUuCDzFW6N0="));
movieLibrary.push(new ComedyMovie(21, "Fool’s Gold", "Derek Kane", 2020, "Jack Black", "https://media.istockphoto.com/id/936369412/photo/group-of-friends-watching-a-drama-movie.jpg?s=612x612&w=0&k=20&c=P7GN4gArY-Eh9VeKtYrG0xgeQ284HNwe7ZoB2rVuofA="));
movieLibrary.push(new ComedyMovie(22, "The Funny One", "Tina Bell", 2021, "Amy Schumer", "https://media.istockphoto.com/id/502353732/photo/kids-rebellion-led-to-strapping-the-father-on-wall.jpg?s=612x612&w=0&k=20&c=fRcXheWGNQ1Vki1exB-mLV1A3hEhA0rTeKqo0Mn-rbE="));
movieLibrary.push(new ComedyMovie(23, "Party Crashers", "Lance Mack", 2022, "Owen Wilson", "https://media.istockphoto.com/id/1439254695/photo/the-cabaret-artists.jpg?s=612x612&w=0&k=20&c=2oAm7r6N2Dm01wq-vaC0oPk-sr9OHZJDqtmMqfB-67Q="));
movieLibrary.push(new ComedyMovie(23, "Giggle Town", "Sally Moon", 2023, "Rebel Wilson", "https://media.istockphoto.com/id/506398419/photo/business-men-in-suits-holding-blank-banner-excited-copyspace.jpg?s=612x612&w=0&k=20&c=TTC8CvN9CYTi2iaDOzyxgEjIxpt2KD9CggfExVoOkc4="));
movieLibrary.push(new ComedyMovie(25, "Smile Please", "Jerry Finn", 2024, "Ken Jeong", "https://media.istockphoto.com/id/2151098290/photo/group-of-male-friends-interacting-playfully-on-the-beach-friendship-and-body-positivity.jpg?s=612x612&w=0&k=20&c=TeNG55D3x33mqPcxJMH-QvYEGdXNQtCnoQUJrhVnvf0="));
movieLibrary.push(new ComedyMovie(26, "Comedy of Errors", "Tammy Sharp", 2020, "John Mulaney", "https://media.istockphoto.com/id/1132124031/photo/group-of-design-professionals-brainstorm-ideas.jpg?s=612x612&w=0&k=20&c=EZRWr1i8EoGS2Ffo7AbsYFZyZIe6vcvHCnxXC35hvkk="));
movieLibrary.push(new ComedyMovie(27, "Belly Laughs", "Ricky Drew", 2021, "Melissa McCarthy", "https://media.istockphoto.com/id/1420356368/photo/indonesian-independence-day.jpg?s=612x612&w=0&k=20&c=sKQU2o-9SmDInp-k3wFiXSHUSezoaLdR_I6Y5f1d2_g="));

// 13 Action Movies
movieLibrary.push(new ActionMovie(28, "Steel Fist", "Zane Marshal", 2015, "Chad Scott", "https://media.istockphoto.com/id/165788170/photo/female-heroine-with-bow-and-arrow-on-a-rainy-night.jpg?s=612x612&w=0&k=20&c=2mzHCzTJx1JIvxFqWL-DDcYQOuMmUQPaku_whOYbRPc="));
movieLibrary.push(new ActionMovie(29, "Blood Drift", "Lara Stone", 2016, "Alex Cage", "https://media.istockphoto.com/id/1258044137/photo/confident-man-portrait-with-machine-gun.jpg?s=612x612&w=0&k=20&c=lkLo07Rdjimw35LERT_zQprkNtRfbGYdlGzj1eo7FhE="));
movieLibrary.push(new ActionMovie(30, "Final Strike", "Bruce Long", 2017, "Terry Doone", "https://media.istockphoto.com/id/1304416561/photo/portrait-of-action-hero-looking-man-in-studio-shot.jpg?s=612x612&w=0&k=20&c=uB5fL7_C1gqEgAfLuMovDxZASMUJGWXTbi17mf759SE="));
movieLibrary.push(new ActionMovie(31, "Bullet Code", "Rick Wayne", 2018, "Kelly Moss", "https://media.istockphoto.com/id/537317289/photo/young-detective-policeman-or-mobster-in-an-urban-setting-holding.jpg?s=612x612&w=0&k=20&c=Pih4KdL8_YT_Frg60sevomOSTgTfLgpk8TDtDF2o_d4="));
movieLibrary.push(new ActionMovie(32, "The Trigger Point", "Tom Hardy", 2019, "Luke Diesel", "https://media.istockphoto.com/id/537317289/photo/young-detective-policeman-or-mobster-in-an-urban-setting-holding.jpg?s=612x612&w=0&k=20&c=Pih4KdL8_YT_Frg60sevomOSTgTfLgpk8TDtDF2o_d4="));
movieLibrary.push(new ActionMovie(33, "Firestorm", "Alexa Cruz", 2020, "Jack Blaze", "https://media.istockphoto.com/id/150687910/photo/be-super.jpg?s=612x612&w=0&k=20&c=D5sjR_78Q1Pw0kNq8XlT4CyJd2KHep9PAOZ5X1JZZMQ="));
movieLibrary.push(new ActionMovie(34, "Crimson Order", "Ron Burke", 2021, "Max Payne", "https://media.istockphoto.com/id/1222756642/photo/secret-service-concept.jpg?s=612x612&w=0&k=20&c=iSC9EtyppAlasYBz_aT42AQVPA-4F9ooigBcxA-7xog="));
movieLibrary.push(new ActionMovie(35, "Night Hunter", "Sasha Wolfe", 2022, "Jet Li", "https://media.istockphoto.com/id/1222756642/photo/secret-service-concept.jpg?s=612x612&w=0&k=20&c=iSC9EtyppAlasYBz_aT42AQVPA-4F9ooigBcxA-7xog="));
movieLibrary.push(new ActionMovie(36, "Storm Blade", "Dana Rex", 2023, "Lara Drake", "https://media.istockphoto.com/id/1177591677/photo/giant-attack-on-golden-gate-bridge.jpg?s=612x612&w=0&k=20&c=z3rbs-b4o7QB826tXziRzcoySQaAst0nKei9ttJXFCU="));
movieLibrary.push(new ActionMovie(37, "Zero Gravity", "Dean Frost", 2024, "Vic Shadows", "https://media.istockphoto.com/id/1177591677/photo/giant-attack-on-golden-gate-bridge.jpg?s=612x612&w=0&k=20&c=z3rbs-b4o7QB826tXziRzcoySQaAst0nKei9ttJXFCU="));
movieLibrary.push(new ActionMovie(38, "Dark Pursuit", "Nico Ray", 2021, "Stunt King", "https://media.istockphoto.com/id/1191396661/photo/special-force-agent-concept.jpg?s=612x612&w=0&k=20&c=2ny7h8o1EExZE3Y-jMW8buy4IehUuxNWdt_D38GZ-Xs="));
movieLibrary.push(new ActionMovie(39, "Ghost Ops", "Finn Moore", 2022, "Rico Silva", "https://media.istockphoto.com/id/1214073825/photo/woman-with-airsoft-rifle.jpg?s=612x612&w=0&k=20&c=OGJX8A5KruRbCywsT_Mjq3AA6OLQfaLzfc9Ww019wvM="));
movieLibrary.push(new ActionMovie(40, "Battle Core", "Tracy Miles", 2023, "Eva Flash", "https://media.istockphoto.com/id/1190038392/photo/special-force-agent-concept.jpg?s=612x612&w=0&k=20&c=EmLqEjVJg9Hs7OmWKcWdioxYKBPzHIdR98pSDRKmESM="));


console.log(movieLibrary)


const actionMovies = movieLibrary.filter(movie => movie instanceof ComedyMovie);
actionMovies.forEach(movie => {
    console.log(movie.getDetails());
});

const movies = movieLibrary.map(movie => {
    document.getElementById("container").innerHTML += `
    <div>
    <a href=""><div><img src="${movie.image}" alt=""></div>
    
</a>
<div class="movie-desc">
<h1 class="title">${movie.title}</h1>
<p class="dir">Directed by ${movie.director}</p>
<p class="year">${movie.year}</p>
</div>
<button type="button" type="click" item="${movie.id}" onclick="addToLibrary(${movie.id})">Add to Library</button>

</div>
    `
})
console.log(movies)


const latestMovies = movieLibrary.slice().sort((a, b) => (b.year - a.year)).slice(0, 8)

latestMovies.map(movie => {
    document.getElementById("latest").innerHTML += `
    <div>
    <a href=""><div><img src="${movie.image}" alt=""></div>
    
</a>
<div class="movie-desc">
<h1 class="title">${movie.title}</h1>
<p class="dir">Directed by ${movie.director}</p>
<p class="year">${movie.year}</p>
</div>
<button type="button" type="click" item="${movie.id}" onclick="addToLibrary(${movie.id})">Add to Library</button>

</div>
    `
})

console.log(latestMovies)

const nextIcon = document.getElementById("nextIcon")

// ADD TO LIBRARY
let library = JSON.parse(localStorage.getItem("library")) || [];
// user = JSON.parse(localStorage.getItem("users"));
// console.log(user[22].cart);

console.log(movieLibrary)

function addToLibrary(id) {
    const libraryMovie = movieLibrary.find(movie => movie.id === id)
    if (!libraryMovie) {
        console.log("movie not found");
        return;
    }
    console.log(libraryMovie)

    const existingItem = library.find((movie) => movie.id === id);
    if (libraryMovie && library.includes(libraryMovie)) {
        // existingItem.quantity = "";
        console.log(" already in library")
        alert(libraryMovie.title + " is already in the library")

        // existingItem.quantity += 1;
    } else {
        console.log("no existing item")
        library.push(libraryMovie);
        alert(libraryMovie.title + " as been added to the library")

    }
    //   console.log(cart.unshift({ ...productL, quantity: 1 }));
    console.log(library.length);
    console.log(existingItem);
    //   user[22].cart = cart
    //   console.log(user);
    //   localStorage.setItem("users", JSON.stringify(user));
    localStorage.setItem("library", JSON.stringify(library));
    //   let storage = localStorage.getItem(cart);
    //   console.log(storage.length);
    //   removeCart();
    // cart.reduce(current, value)

    updateLibraryCount();
}

document.getElementById("libraryIcon").innerHTML = library.length;

function updateLibraryCount() {
    let count = library.reduce((total, movie) => total + movie.quantity, 0);
    localStorage.setItem("libraryLength", JSON.stringify(count));
    let updateLibrary = localStorage.getItem("libraryLength");
    console.log(count);

    console.log(updateLibrary);
    // document.getElementById("cartLength").innerHTML = updateLibrary;

    console.log(count)
    //   console.log(total);
}

// localStorage.setItem("cartLength", JSON.stringify(count));
let updateLibrary = localStorage.getItem("libraryLength");
// console.log(count);

// console.log(updateLibrary);
// document.getElementById("cartLength").innerHTML = updateLibrary;

// console.log(count);

// let specificUser = localStorage.getItem('loggedinUser');
// specificUser = JSON.parse(specificUser)
// document.getElementById('greeting').innerHTML = `Good day, ${specificUser.namee}`
