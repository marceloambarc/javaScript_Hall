class Music{
    constructor(){
        this.title = '';
        this.artist = '';
        this.album = '';
        this.year = 0;
        this.style = '';
        this.duration = 0;
        this.size = 0;
    }
    Play(){
        console.log("Play >");
    }
    Pause(){
        console.log("Pause II");
    }
    Skip(){
        console.log("Skip >>");
    }
    Rewind(){
        console.log("<< Rewind");
    }
    Start(){
        console.log("Start Again");
    }
}