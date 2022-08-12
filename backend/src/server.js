const app = require('./index');
const connect = require('./config/db')

app.listen(process.env.PORT || 4000, async () => {
    try {
        await connect();
        console.log('Port is running on 4000')
    }
    catch (err) {
        console.log("error", err)
    }
})