class Movie {
    constructor(title, director, year) {
        this.title = title;
        this.director = director;
        this.year = year;
    }

    getDetails() {
        return `${this.title} (${this.year}) by ${this.director}`;
    }
}

class ComedyMovie extends Movie {
    constructor(title, director, year, leadComedian) {
        super(title, director, year);
        this.leadComedian = leadComedian;
    }

    getDetails() {
        return `${super.getDetails()} - Comedy starring ${this.leadComedian}`;
    }
}

class ActionMovie extends Movie {
    constructor(title, director, year, stuntCoordinator) {
        super(title, director, year);
        this.stuntCoordinator = stuntCoordinator;
    }

    getDetails() {
        return `${super.getDetails()} - Action with stunts by ${this.stuntCoordinator}`;
    }
}

const movieLibrary = [];

// 15 Regular Movies
movieLibrary.push(new Movie("The Silent Echo", "Jane Smith", 2010, "https://media.istockphoto.com/id/483232763/photo/youtube-logo.jpg?s=612x612&w=0&k=20&c=JjGpvabBYTfbvaZGTxzZsjZd30tlrcdvRJueeP8VVCQ="));
movieLibrary.push(new Movie("Beyond the Horizon", "Alan Rickman", 2011, "https://media.istockphoto.com/id/2186789147/photo/3d-render-cyborg-woman-stands-in-an-attacking-pose-with-an-assault-gun-in-one-hand.jpg?s=612x612&w=0&k=20&c=HCacXJiqEMTnHkEX5EJAzQkqB0DAzbManQHfjMn1Vbg="));
movieLibrary.push(new Movie("Whispers of Time", "Mia Turner", 2012, "https://media.istockphoto.com/id/1393151713/vector/karate-kick-martial-arts-inscription-on-illustration-is-a-hieroglyphs-of-karate-japanese.jpg?s=612x612&w=0&k=20&c=Xd7wqBohRhJBNkeAWwJvvo1fQupuU2qJPmUzkbSjRMM="));
movieLibrary.push(new Movie("Echoes of War", "Jake Carson", 2013, "https://media.istockphoto.com/id/1520056460/photo/thriller.jpg?s=612x612&w=0&k=20&c=mCyJukUXEkhWYZl8dIGXfiWv68aqUarJdVWZnCB9OLs="));
movieLibrary.push(new Movie("Moonlight Diary", "Zara Holt", 2014, "https://cdn.pixabay.com/photo/2023/07/22/04/15/motorbike-8142649_640.jpg"));


movieLibrary.push(new Movie("Winter’s Code", "Leo Grant", 2015));
movieLibrary.push(new Movie("Glass Veil", "Emily Rhodes", 2016));
movieLibrary.push(new Movie("Chronicles of Now", "Dean Wallace", 2017));
movieLibrary.push(new Movie("Seasons Apart", "Nina Fields", 2018));
movieLibrary.push(new Movie("Fading Colors", "Jules Bennett", 2019));
movieLibrary.push(new Movie("Shadows of Light", "Claire Reign", 2020));
movieLibrary.push(new Movie("Frozen Fire", "Darren Cole", 2021));
movieLibrary.push(new Movie("Digital Mirage", "Olivia Young", 2022));
movieLibrary.push(new Movie("Traces", "Marcus Vale", 2023));
movieLibrary.push(new Movie("Silent Symphony", "Rita Black", 2024));

// 12 Comedy Movies
movieLibrary.push(new ComedyMovie("Laugh Riot", "Tony Hale", 2015, "Jim Carrey"));
movieLibrary.push(new ComedyMovie("Oops! Again", "Helen Joy", 2016, "Kevin Hart"));
movieLibrary.push(new ComedyMovie("The Clown Job", "Roger Steele", 2017, "Will Ferrell"));
movieLibrary.push(new ComedyMovie("Bachelor Bros", "Nina Love", 2018, "Seth Rogen"));
movieLibrary.push(new ComedyMovie("House of Jokes", "Marvin Gold", 2019, "Adam Sandler"));
movieLibrary.push(new ComedyMovie("Fool’s Gold", "Derek Kane", 2020, "Jack Black"));
movieLibrary.push(new ComedyMovie("The Funny One", "Tina Bell", 2021, "Amy Schumer"));
movieLibrary.push(new ComedyMovie("Party Crashers", "Lance Mack", 2022, "Owen Wilson"));
movieLibrary.push(new ComedyMovie("Giggle Town", "Sally Moon", 2023, "Rebel Wilson"));
movieLibrary.push(new ComedyMovie("Smile Please", "Jerry Finn", 2024, "Ken Jeong"));
movieLibrary.push(new ComedyMovie("Comedy of Errors", "Tammy Sharp", 2020, "John Mulaney"));
movieLibrary.push(new ComedyMovie("Belly Laughs", "Ricky Drew", 2021, "Melissa McCarthy"));

// 13 Action Movies
movieLibrary.push(new ActionMovie("Steel Fist", "Zane Marshal", 2015, "Chad Scott"));
movieLibrary.push(new ActionMovie("Blood Drift", "Lara Stone", 2016, "Alex Cage"));
movieLibrary.push(new ActionMovie("Final Strike", "Bruce Long", 2017, "Terry Doone"));
movieLibrary.push(new ActionMovie("Bullet Code", "Rick Wayne", 2018, "Kelly Moss"));
movieLibrary.push(new ActionMovie("The Trigger Point", "Tom Hardy", 2019, "Luke Diesel"));
movieLibrary.push(new ActionMovie("Firestorm", "Alexa Cruz", 2020, "Jack Blaze"));
movieLibrary.push(new ActionMovie("Crimson Order", "Ron Burke", 2021, "Max Payne"));
movieLibrary.push(new ActionMovie("Night Hunter", "Sasha Wolfe", 2022, "Jet Li"));
movieLibrary.push(new ActionMovie("Storm Blade", "Dana Rex", 2023, "Lara Drake"));
movieLibrary.push(new ActionMovie("Zero Gravity", "Dean Frost", 2024, "Vic Shadows"));
movieLibrary.push(new ActionMovie("Dark Pursuit", "Nico Ray", 2021, "Stunt King"));
movieLibrary.push(new ActionMovie("Ghost Ops", "Finn Moore", 2022, "Rico Silva"));
movieLibrary.push(new ActionMovie("Battle Core", "Tracy Miles", 2023, "Eva Flash"));


console.log(movieLibrary)


const actionMovies = movieLibrary.filter(movie => movie instanceof ComedyMovie);
actionMovies.forEach(movie => {
    console.log(movie.getDetails());
});

const movies = movieLibrary.movie.map(item, index)
console.log(movies)
