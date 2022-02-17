var event = require('events')

var eventEmitter1=new event.EventEmitter();

var connect =function Connection()
{
    console.log("Connection Done.....")
    eventEmitter1.emit("Data")
}

eventEmitter1.on("myconnect",connect);


eventEmitter1.on("Data ",function()
{
    console.log("data recieved....")
});

eventEmitter1.emit('myconnect');

console.log('Done')