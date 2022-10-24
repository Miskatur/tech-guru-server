const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors())


app.get('/', (req, res) => {
    res.send('Educational Courses API running')
})






app.listen(port, () => {
    console.log('Educational Courses server running on :', port)
})