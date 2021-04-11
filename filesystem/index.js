const fs = require('fs');
const { resolve } = require('path');

const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};
 
fs.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallback); 
// Dari core modules path dalam menetapkan alamat berkas secara lengkap dan dinamis.
// fs.readFile('todo.txt', 'UTF-8', fileReadCallback);