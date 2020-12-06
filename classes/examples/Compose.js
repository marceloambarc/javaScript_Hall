class Reader{
    Read(path){
        return "File Content"
    }
}

class Writer{
    Write(file,content){
        console.log("written content");
    }
}

class Creator{
    Create(name){
        console.log("File Created!");
    }
}

class Destroyer{
    Delete(name){
        console.log("File Deleted!");
    }
}

class FileManipulator{
    constructor(name){
        this.file = name;
        this.reader = new Reader;
        this.writer = new Writer;
        this.creator = new Creator;
        this.destroyer = new Destroyer;
    }
}

var manipulator = new FileManipulator("myfile.txt");

manipulator.reader.Read();
manipulator.writer.Write();
manipulator.creator.Create();
manipulator.destroyer.Delete();