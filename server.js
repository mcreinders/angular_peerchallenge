/**
 * Created by user on 1/8/16.
 */

var express = require('express');
var path = require('path');
var democrats = require('./public/json_data/democrats.json');
var republicans = require('./public/json_data/republican.json');
var app = express();

app.use(express.static('public'));

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '/public/views/index.html'));
});

app.get('/getDemocrats', function(request, response){
    response.sendFile(path.join(__dirname, 'public/json_data/democrats.json'));

});

app.get('/getRepublicans', function(request, response){
    response.sendFile(path.join(__dirname, 'public/json_data/republican.json'));

});

app.get('/getPresident', function(request, response){
    var jimmyCarter = presidentGenerator();
    response.send(jimmyCarter);
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log("listening on port", port);
});

var presidentGenerator = function(){
    var allCandidates = [];
    for(var i=0; i<democrats.candidates.length; i++){
        allCandidates.push(democrats.candidates[i]);
    }
    for(var i=0; i<republicans.candidates.length; i++){
        allCandidates.push(republicans.candidates[i]);
    }
    var candidateNumber = randomNumber(0, allCandidates.length-1);

    return allCandidates[candidateNumber];
};

function randomNumber (min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

