const fs = require('fs');
const path = require('path');

const taskList = [
    {
        "title": "Dec-1-2020",
        "file": "http://localhost:3000/uploads/5f491f0ddb1ed000297147e6-1607632100012.jpeg",
        "videoUrl": "https://www.youtube.com/watch?v=4UU4dCAQFfo",
        "createdAt": "Tue Dec 01 2020"
    },
    {
        "title": "Dec-2-2020",
        "file": "http://localhost:3000/uploads/image-2020-11-10t14-23-42-214z-1607632138461.png",
        "videoUrl": "https://www.youtube.com/watch?v=5eqPpc0nL6o",
        "createdAt":"Wed Dec 02 2020"
    }
]


exports.list = async(req, res, next) => {
    try {
        console.log(req.params.date)
        if (req.params.date === 'all') {
            res.jsonp(taskList);
        } else {
            res.jsonp(taskList.filter(item => item.createdAt === req.params.date));
        }
    }
    catch(error) {
        res.status(400).send({ message: error.message });
    }
}

exports.create = async(req, res, next) => {
    try {
       if(!req.file) throw new Error('file is required');
        const file = `http://${req.get("host")}/${req.file.path.split("public/")[1]}`;
        const task = {
            title: req.body.title,
            file: file,
            videoUrl: req.body.videoUrl,
            createdAt: new Date().toDateString()
        }
        taskList.push(task);
        res.status(200).send({ message: 'data added successfully'});
    }catch(error) {
        res.status(400).send({ message: error.message });
    }
   
}

exports.getjson = async(req,res,next) => {
    try {
        const x = JSON.stringify(taskList);
        fs.writeFileSync("test.json", x, function(err) {
            if (err) {
                console.log(err);
            }
        });
        const filepath = path.join(__dirname,'../../test.json');
        console.log(filepath);
        res.status(200).sendFile(filepath);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}