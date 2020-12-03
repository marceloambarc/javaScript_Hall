class SocialUser{
    constructor(){
        this.name = '';
        this.surname = '';
        this.password = '';
        this.age = 0;
        this.email = '';
        this.about = '';
        this.friends = [];
        this.family = [];
    }
    Register(){
        console.log("Register...")
    }
    Login(){
        console.log("Login into your account");
    }
    Edit(){
        console.log("Edit your data");
    }
    UsePlatform(){
        console.log("Use the platform...");
    }
    uploadFiles(){
        console.log("Upload photos and text");
    }
    Logout(){
        console.log("Logout... See you latter...");
    }
}