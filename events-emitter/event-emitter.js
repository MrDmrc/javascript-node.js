const { EventEmitter } = require('events');
const events =require('events');
const eventEmitter = new events.EventEmitter();


eventEmitter.on('selamla', (object) => {
    console.log(`merhaba ${object.name} ${object.surname}`);
});

eventEmitter.emit('selamla',{name :'beytullah',surname: 'demirci' } );
 
//on istediğin kadar tetiklenir / once 1 kere tetiklenir

/*
eventEmitter.once('merhabaDe',() =>{
    console.log('merhaba');
});

eventEmitter.emit('merhabaDe');

eventEmitter.emit('merhabaDe'); */