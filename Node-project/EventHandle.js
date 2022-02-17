var events=require("events")

var eventEmitter=new events.EventEmitter();

var myEvent=function()
{
    console.log('in event... ')
} 

eventEmitter.on('test',myEvent);

eventEmitter.emit('test');