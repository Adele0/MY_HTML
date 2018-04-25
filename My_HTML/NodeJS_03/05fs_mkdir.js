var fs = require('fs');

fs.mkdir(new Date().toLocaleDateString(),function (err) {
    if(err) {
        throw err;  // file already exists
    }else {
        console.log('success');
    }
})