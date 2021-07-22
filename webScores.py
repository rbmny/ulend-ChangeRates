import pymongo
from bson.objectid import ObjectId

client = pymongo.MongoClient("mongodb+srv://admin1:qJfVOmdw5uXTSkRl@cluster0.0dv92.mongodb.net/scoresData?retryWrites=true&w=majority")
db = client.scoresData

# Search by id, return score
def findById(i):
    i = i+2
    id = ObjectId(f"60df218dc6dbe102e72a7b6{i}")
    score = db.Data.find_one({"_id":ObjectId(id)}, {"Score":1, "_id":0})
    score = score.get("Score")

    return int(score)

# def getScoreCredito():
#     scoreCredito = 700
#     return int(scoreCredito)

def getScorePre():
    return document.getElementById("scorePre").value

def getScoreCredito():
    return document.getElementById("scoreCredito").value

scorePre = getScorePre()
scoreCredito = getScoreCredito()

def scoreCredito():
    for i in range(0, 19):
        if getScoreCredito() >= findById(i):
            print(findById(i))
            compRow = i
            newScore = findById(i)
            # rating = db.Data.find_one({"_id":ObjectId(f"60df218dc6dbe102e72a7b6{i+2}")}, {"Rating":1, "_id":0}).get("Rating")
            # print(f'Rating = {rating}')
            return i+2

indexScore = scoreCredito()

def find(name):
    index = db.Data.find_one({"_id":ObjectId(f"60df218dc6dbe102e72a7b6{indexScore}")}, {name:1, "_id":0})
    returnable = index.get(name)
    return returnable

def gi120():
    garantiaImovel120 = find("Imovel 120")
    document.getElementById("2").innerHTML = (garantiaImovel120) + "% + CDI a.m"

def gi80():
  garantiaImovel80 = find("Imovel 80")
  document.getElementById("2").innerHTML = (garantiaImovel80) + "% + CDI a.m"

def gr50():
  garantiaRecebiveis50 = find("Recebiveis 50")
  document.getElementById("3").innerHTML = (garantiaRecebiveis50) + "% a.m"

def gr150():
  garantiaRecebiveis150 = find("Recebiveis 150")
  document.getElementById("4").innerHTML = (garantiaRecebiveis150) + "% a.m"

def ga20():
  garantia20 = find("Garantia 20")
  document.getElementById("5").innerHTML =(garantia20) + "% a.m"

def ga50():
  garantia50 = find("Garantia 50")
  document.getElementById("6").innerHTML =(garantia50) + "% a.m"

def av():
  aval = find("Aval")
  document.getElementById("7").innerHTML =(aval) + "% a.m"

def rating():
  document.getElementById("rating").innerHTML = find("Rating")

def scorePreCheck():
    if getScorePre() < 1e3:
        document.getElementById("cobertura").innerHTML = "0%"
        # document.getElementById("garantia").innerHTML = "Garantias Disponíveis:";
        document.getElementById("erro").innerHTML = ""
        document.getElementById("table1").style.visibility= "visible"
        document.getElementById("7").style.visibility= "visible"
        document.getElementById("aval").style.visibility= "visible"
        document.getElementById("3").style.visibility= "visible"
        document.getElementById("4").style.visibility= "visible"
        document.getElementById("gr50").style.visibility= "visible"
        document.getElementById("gr150").style.visibility= "visible"
        rating()
        gi120()
        gi80()
        gr50()
        gr150()
        ga20()
        ga50()
        av()

    if getScorePre() >= 1e3 and getScorePre() < 1500:
        document.getElementById("cobertura").innerHTML = "25%"
        # document.getElementById("garantia").innerHTML = "Garantias Disponíveis:";
        document.getElementById("erro").innerHTML = ""
        document.getElementById("table1").style.visibility= "visible"
        document.getElementById("7").style.visibility= "hidden"
        document.getElementById("aval").style.visibility= "hidden"
        document.getElementById("3").style.visibility= "visible"
        document.getElementById("4").style.visibility= "visible"
        document.getElementById("gr50").style.visibility= "visible"
        document.getElementById("gr150").style.visibility= "visible"
        rating()
        gi120()
        gi80()
        gr50()
        gr150()
        ga20()
        ga50()

    if getScorePre() >= 1500 and getScorePre() < 2100:
        document.getElementById("cobertura").innerHTML = "100%"
        # document.getElementById("garantia").innerHTML = "Garantias Disponíveis:";
        document.getElementById("erro").innerHTML = ""
        document.getElementById("table1").style.visibility= "visible"
        document.getElementById("7").style.visibility= "hidden"
        document.getElementById("3").style.visibility= "hidden"
        document.getElementById("4").style.visibility= "visible"
        document.getElementById("gr50").style.visibility= "hidden"
        document.getElementById("gr150").style.visibility= "visible"
        document.getElementById("aval").style.visibility= "hidden"
        document.getElementById("6").style.visibility= "hidden"
        document.getElementById("5").style.visibility= "hidden"
        document.getElementById("ga50").style.visibility= "hidden"
        document.getElementById("ga20").style.visibility= "hidden"
        rating()
        gi120()
        gi80()
        gr150()

    if getScorePre() >= 2100:
        document.getElementById("erro").innerHTML = "Crédito Reprovado"
        document.getElementById("cobertura").innerHTML = ""
        document.getElementById("rating").innerHTML = ""
        # document.getElementById("garantia").innerHTML = "";
        document.getElementById("1").innerHTML = ""
        document.getElementById("2").innerHTML = ""
        document.getElementById("3").innerHTML = ""
        document.getElementById("4").innerHTML = ""
        document.getElementById("5").innerHTML = ""
        document.getElementById("6").innerHTML = ""
        document.getElementById("7").innerHTML = ""
        document.getElementById("3").style.visibility= "hidden"
        document.getElementById("4").style.visibility= "hidden"
        document.getElementById("gr50").style.visibility= "hidden"
        document.getElementById("gr150").style.visibility= "hidden"
        document.getElementById("table1").style.visibility= "hidden"
        document.getElementById("aval").style.visibility= "hidden"

def runAll():
    scorePreCheck()
    scoreCredito()
