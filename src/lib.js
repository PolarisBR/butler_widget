const { env } = process.env;
const SAY_URL = env.BASE_URL + "/say";

const ask = (question, custmerId) => {
    return new Promise(async (resolve, reject) => {
        fetch(SAY_URL, {
            method: 'POST', body: JSON.stringify({ question: question }),
            headers: { 'Agent': 'Butler v0.1', 'User-agent': 'Butler v0.1', 'Accept': '*/*', 'Content-Type': 'application/json' }
        })
            .then(res => {
                if (res.ok) {
                    let response = res.text();
                    console.log(`In the component: ${response}`);
                    return resolve(response);
                }
                else {
                    console.log(`An error occurred: ${res}`);
                    return reject('An error occurred');
                }
            })
            .catch(err => {
                console.error(err);
                reject(err)
            });
    });
};

module.exports = {
    ask
}