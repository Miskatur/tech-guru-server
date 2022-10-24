const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors())

const courses = require('./data/courses.json');
const courseDetails = require('./data/courses-details.json');

app.get('/', (req, res) => {
    res.send('Educational Courses API running')
})
app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(c => c.id == id);
    res.send(course)
})

app.get('/course-details', (req, res) => {
    res.send(courseDetails)
})

app.get('/course-detail/:id', (req, res) => {
    const id = req.params.id;
    const courseDetail = courseDetails.find(c => c.id == id);
    res.send(courseDetail)
})






app.listen(port, () => {
    console.log('Educational Courses server running on :', port)
})