

const EventEmitter = require('events');
const LogEvents = require('./logEvents');
 
const eventEmitter = new EventEmitter();
 
eventEmitter.on('log', async (message) => {
    await LogEvents(message);
});
 
setTimeout(() => {
    const message = 'New successfully log event emitted';
    eventEmitter.emit('log', message);
}, 2000);
 


