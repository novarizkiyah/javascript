const { EventEmitter } = require('events'); //TODO 1
     
const myEventEmitter = new EventEmitter(); // TODO 2
// fungsi yang akan dijalankan ketika event birthday terjadi
const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
  }


       
myEventEmitter.on('birthday', birthdayEventListener);      // TODO 3
       
// Memicu event 'coffee-order' terjadi.
myEventEmitter.emit('birthday', 'Nova' ); // TODO 4