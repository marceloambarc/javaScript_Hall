class Movie{
    constructor(){
        this.title ='';
        this.year = 0;
        this.genre = '';
        this.director = '';
        this.actors = [];
        this.duration = 0;
    }
    Play(){
        console.log("Play the Movie...");
    }
    Pause(){
        console.log("Pause the Movie ||");
    }
    Skip(){
        console.log("Skip >>");
    }
    Close(){
        console.log("Close X");
    }
}

const avengers = new Movie();
avengers.title = "Avengers 2";
avengers.year = "2014";
avengers.genre = "Action";

console.log(avengers.year);

const batman = new Movie();
batman.title = "The Dark Knight";
batman.year = "2011";

console.log(batman.year);