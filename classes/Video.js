class Video{
    constructor(){
        this.title = '';
        this.description = '';
        this.channel = '';
        this.length = 0;
        this.size = 0;
        this.maker = '';
    }
    Play(){
        console.log("Play the Video...");
    }
    Pause(){
        console.log("Pause the Video ||");
    }
    Skip(){
        console.log("Skip >>");
    }
    Close(){
        console.log("Close X");
    }
}