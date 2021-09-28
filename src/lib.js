const ask = (question) => {
    return new Promise((resolve, reject) => {
        fetch('https://google.com', {
            data: JSON.stringify({ question: question }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'XXX'
            }
        }).then((success) => {
            resolve(success);

        }).catch((error) => {
            reject(error);
        });
    });

};

module.exports = {
    ask
}