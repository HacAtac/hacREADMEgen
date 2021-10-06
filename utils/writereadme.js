const fs = require('fs');

const writeReadMe = readmeContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', readmeContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message: 'README created!'
            });
            console.log(writeReadMe);
        })
    });
};

module.exports = {writeReadMe};