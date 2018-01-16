var express = require("express")
var Sequelize = require("sequelize")
var nodeadmin = require("nodeadmin")

//connect to mysql database
var sequelize = new Sequelize('catalog2', 'root', '', {
    dialect:'mysql',
    host:'localhost'
})

sequelize.authenticate().then(function(){
    console.log('Success')
})

//define a new Model
var Utilizatoris = sequelize.define('utilizatoris', {
    name: Sequelize.STRING,
    description: Sequelize.STRING
})

var Citates = sequelize.define('citates', {
    name: Sequelize.STRING,
    category_id: Sequelize.INTEGER,
    description: Sequelize.STRING,
    // price: Sequelize.INTEGER,
    // image: Sequelize.STRING
})

Citates.belongsTo(Utilizatoris, {foreignKey:"category_id", targetKey:"id"})

var app = express()

app.use('nodeadmin', nodeadmin(app));

//access static files
app.use(express.static('public'))
app.use('/admin', express.static('admin'))

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

// get a list of utilizatori
app.get('/utilizatoris', function(request, response) {
    Utilizatoris.findAll().then(function(utilizatoris){
        response.status(200).send(utilizatoris)
    })
        
})

// get one category by id
app.get('/utilizatoris/:id', function(request, response) {
    Utilizatoris.findOne({where: {id:request.params.id}}).then(function(category) {
        if(category) {
            response.status(200).send(category)
        } else {
            response.status(404).send()
        }
    })
})

//create a new category
app.post('/utilizatoris', function(request, response) {
    Utilizatoris.create(request.body).then(function(category) {
        response.status(201).send(category)
    })
})

app.put('/utilizatoris/:id', function(request, response) {
    Utilizatoris.findById(request.params.id).then(function(category) {
        if(category) {
            category.update(request.body).then(function(category){
                response.status(201).send(category)
            }).catch(function(error) {
                response.status(200).send(error)
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

app.delete('/utilizatoris/:id', function(request, response) {
    Utilizatoris.findById(request.params.id).then(function(category) {
        if(category) {
            category.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

app.get('/citates', function(request, response) {
    Citates.findAll().then(
            function(citates) {
                response.status(200).send(citates)
            }
        )
})

app.get('/citates/:id', function(request, response) {
    Citates.findAll().then(
            function(citates) {
                response.status(200).send(citates)
            }
        )
})

app.post('/citates', function(request, response) {
    //todo: implement POST /citate method
     Citates.create(request.body).then(function(citates) {
        response.status(201).send(citates)
    })
})

app.put('/citates/:id', function(request, response) {
    //todo: implement PUT /citate/:id method
    Citates.findById(request.params.id).then(function(citates) {
        if(citates) {
            citates.update(request.body).then(function(citates){
                response.status(201).send(citates)
            }).catch(function(error) {
                response.status(200).send(error)
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

app.delete('/citates/:id', function(request, response) {
    //todo: implement DELETE /citate/:id method
    Citates.findById(request.params.id).then(function(citates) {
        if(citates) {
            citates.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

app.get('/utilizatoris/:id/citates', function(request, response) {
    Citates.findAll({where:{category_id: request.params.id}}).then(
            function(citates) {
                response.status(200).send(citates)
            }
        )
})

app.listen(8080)