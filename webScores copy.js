const MongoClient = require('mongodb');
var ObjectID = require("bson-objectid");
const uri = 'mongodb+srv://admin1:qJfVOmdw5uXTSkRl@cluster0.0dv92.mongodb.net/scoresData?retryWrites=true&w=majority'

function range(start, stop, step) {
    var length, idx, range;
    if (arguments.length <= 1) {
        stop = start || 0;
        start = 0;
    }
    step = arguments[2] || 1;
    length = Math.max(Math.ceil((stop - start) / step), 0);
    idx = 0;
    range = new Array(length);
    while (idx < length) {
        range[idx++] = start;
        start += step;
    }
    return range;
}

const client = new MongoClient(uri);
client.connect();
const db = client.scoresData;

// Search by id, return score
function findById(i) {
    i = i+2;
    id = ObjectId(`60df218dc6dbe102e72a7b6${i}`);
    score = db.Data.find_one({'_id':ObjectId(id)}, {'Score':1, '_id':0});
    score = score.get('Score');

    return Number(score);
}
// def getScoreCredito():
//     scoreCredito = 700
//     return int(scoreCredito)

function getScorePre() {
    return document.getElementById('scorePre').value;
}
function getScoreCredito() {
    return document.getElementById('scoreCredito').value;
}

function changeValue() {
for (i in range(1, 7)) {
  if (document.getElementById(`edit${i}`).value != nil) {
    refValue = document.getElementById(`${i}`).value;
    if (i == 1) {
      refField = "Imovel 120"
      db.Data.update({refField: refValue}, {$set: {refField: find(refField)}});
    } else if (i == 2) {
      refField = "Imovel 80"
      db.Data.update({refField: refValue}, {$set: {refField: find(refField)}});
    } else if (i == 3) {
      refField = "Recebiveis 50"
      db.Data.update({refField: refValue}, {$set: {refField: find(refField)}});
    } else if (i == 4) {
      refField = "Recebiveis 150"
      db.Data.update({refField: refValue}, {$set: {refField: find(refField)}});
    } else if (i == 5) {
      refField = "Garantia 20"
      db.Data.update({refField: refValue}, {$set: {refField: find(refField)}});
    } else if (i == 6) {
      refField = "Garantia 50"
      db.Data.update({refField: refValue}, {$set: {refField: find(refField)}});
    } else if (i == 7) {
      refField = "Aval"
      db.Data.update({refField: refValue}, {$set: {refField: find(refField)}});
  }
}
}
}

scorePre = getScorePre();
scoreCredito = getScoreCredito();

function scoreCredito() {
    for (i in range(0, 19)) {
        if (getScoreCredito() >= findById(i)) {
            console.log(findById(i));
            compRow = i;
            newScore = findById(i);
            // rating = db.Data.find_one({"_id":ObjectId(f"60df218dc6dbe102e72a7b6{i+2}")}, {"Rating":1, "_id":0}).get("Rating")
            // print(f'Rating = {rating}')
            return i+2;
        }
      }
    }

indexScore = scoreCredito();

function find(name) {
    index = db.Data.find_one({'_id':ObjectId(`60df218dc6dbe102e72a7b6${indexScore}`)}, {name:1, '_id':0});
    returnable = index.get(name);
    return returnable;
}
function gi120() {
    garantiaImovel120 = find('Imovel 120');
    document.getElementById('1').innerHTML = (garantiaImovel120) + '% + CDI a.m';
}
function gi80() {
  garantiaImovel80 = find('Imovel 80');
  document.getElementById('2').innerHTML = (garantiaImovel80) + '% + CDI a.m';
}
function gr50() {
  garantiaRecebiveis50 = find('Recebiveis 50');
  document.getElementById('3').innerHTML = (garantiaRecebiveis50) + '% a.m';
}
function gr150() {
  garantiaRecebiveis150 = find('Recebiveis 150');
  document.getElementById('4').innerHTML = (garantiaRecebiveis150) + '% a.m';
}
function ga20() {
  garantia20 = find('Garantia 20');
  document.getElementById('5').innerHTML =(garantia20) + '% a.m';
}
function ga50() {
  garantia50 = find('Garantia 50');
  document.getElementById('6').innerHTML =(garantia50) + '% a.m';
}
function av() {
  aval = find('Aval');
  document.getElementById('7').innerHTML =(aval) + '% a.m';
}
function rating() {
  document.getElementById('rating').innerHTML = find('Rating');
}
function scorePreCheck() {
    if (getScorePre() < 1e3) {
        document.getElementById('cobertura').innerHTML = '0%';
        // document.getElementById("garantia").innerHTML = "Garantias Disponíveis:";
        document.getElementById('erro').innerHTML = '';
        document.getElementById('table1').style.visibility= 'visible';
        document.getElementById('7').style.visibility= 'visible';
        document.getElementById('aval').style.visibility= 'visible';
        document.getElementById('3').style.visibility= 'visible';
        document.getElementById('4').style.visibility= 'visible';
        document.getElementById('gr50').style.visibility= 'visible';
        document.getElementById('gr150').style.visibility= 'visible';
        rating();
        gi120();
        gi80();
        gr50();
        gr150();
        ga20();
        ga50();
        av();
    }
    if (getScorePre() >= 1e3 && getScorePre() < 1500) {
        document.getElementById('cobertura').innerHTML = '25%';
        // document.getElementById("garantia").innerHTML = "Garantias Disponíveis:";
        document.getElementById('erro').innerHTML = '';
        document.getElementById('table1').style.visibility= 'visible';
        document.getElementById('7').style.visibility= 'hidden';
        document.getElementById('aval').style.visibility= 'hidden';
        document.getElementById('3').style.visibility= 'visible';
        document.getElementById('4').style.visibility= 'visible';
        document.getElementById('gr50').style.visibility= 'visible';
        document.getElementById('gr150').style.visibility= 'visible';
        rating();
        gi120();
        gi80();
        gr50();
        gr150();
        ga20();
        ga50();
    }
    if (getScorePre() >= 1500 && getScorePre() < 2100) {
        document.getElementById('cobertura').innerHTML = '100%';
        // document.getElementById("garantia").innerHTML = "Garantias Disponíveis:";
        document.getElementById('erro').innerHTML = '';
        document.getElementById('table1').style.visibility= 'visible';
        document.getElementById('7').style.visibility= 'hidden';
        document.getElementById('3').style.visibility= 'hidden';
        document.getElementById('4').style.visibility= 'visible';
        document.getElementById('gr50').style.visibility= 'hidden';
        document.getElementById('gr150').style.visibility= 'visible';
        document.getElementById('aval').style.visibility= 'hidden';
        document.getElementById('6').style.visibility= 'hidden';
        document.getElementById('5').style.visibility= 'hidden';
        document.getElementById('ga50').style.visibility= 'hidden';
        document.getElementById('ga20').style.visibility= 'hidden';
        rating();
        gi120();
        gi80();
        gr150();
    }
    if (getScorePre() >= 2100) {
        document.getElementById('erro').innerHTML = 'Crédito Reprovado';
        document.getElementById('cobertura').innerHTML = '';
        document.getElementById('rating').innerHTML = '';
        // document.getElementById("garantia").innerHTML = "";
        document.getElementById('1').innerHTML = '';
        document.getElementById('2').innerHTML = '';
        document.getElementById('3').innerHTML = '';
        document.getElementById('4').innerHTML = '';
        document.getElementById('5').innerHTML = '';
        document.getElementById('6').innerHTML = '';
        document.getElementById('7').innerHTML = '';
        document.getElementById('3').style.visibility= 'hidden';
        document.getElementById('4').style.visibility= 'hidden';
        document.getElementById('gr50').style.visibility= 'hidden';
        document.getElementById('gr150').style.visibility= 'hidden';
        document.getElementById('table1').style.visibility= 'hidden';
        document.getElementById('aval').style.visibility= 'hidden';
    }
  }
function runAll() {
  scorePreCheck();
  scoreCredito();

}
