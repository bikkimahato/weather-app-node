const path = require('path')

const express = require('express')
const hbs = require('hbs')

const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Bikki Mahato'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Bikki Mahato'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'This is some helpful text',
        name: 'Bikki Mahato'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Sunny',
        location: 'Boston'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title:'404',
        name:'Bikki Mahato',
        errorMessage:'Help article not found Found!'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title:'404',
        name:'Bikki Mahato',
        errorMessage:'404 Page not Found!'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})