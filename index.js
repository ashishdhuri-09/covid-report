const { response } = require('express');
const express = require('express') 
const exhbs = require('express-handlebars')

const api = require('novelcovid');
 
// you can choose which URL to use, this will not change the behaviour of the API
api.settings({
    baseUrl: 'https://disease.sh' 
})

api.countries().then(response)   // gives data of countries



const app = express()

app.set('view engine','hbs');

app.engine('hbs',exhbs({   //expres hanldler
    extname:'hbs',
    defaultView: 'home',
    
}));



app.get('/countries',(req,res)=>{    // render info to app
    api.countries()
.then((response)=>{
    res.render('home',{info:response})   //app engine home data render krun webpage janar
})

})



app.listen(4000,()=>{       //  http://localhost:4000/countries
    console.log("server start")
})