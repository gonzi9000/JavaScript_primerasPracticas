const app = require('./app');

async function main() {
    await app.listen(app.get('port'));
    console.log('Run Server on Port 3000');
};
 main();