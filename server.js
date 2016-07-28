var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var nbas = [];
var id = 0;

app.get('/nbas', function(req, res){
  res.json(nbas);
});


app.get('/nbas/:id', function(req, res){
    var nba = _.find(nbas, {id: req.params.id});
    res.json(nba || {});
});

app.post('/nbas', function(req, res){
   var lion = req.body;
    id++;
    nba.id = id + '';
    
    nbas.push(nba);
    
    res.json(nba);
    
});

app.put('/nbas/:id', function(req, res){
    var update = req.body;
    if (update.id){
        delete update.id
    }
    
    var nba = _.findindex(nbas, {id: req.params.id});
    if(!nbas[nba]){
        res.send();
        
    }else{
        var updatedNba = _.assign(nbas[nba], update);
        res.json(updatedNba);
    }
});

app.delete('/nbas/id:', function(req, res){
    var stock = _.findIndex(nbas, {id: req.params.id});
    
    if (!nbas[nba]){
        res.send();
        
    } else{
        var deletedStock = nbas[nba];
        nbas.splice(nba, 1);
        res.json(deletedNba);
    }
});

app.listen(3002);
console.log('on port 3002'); 