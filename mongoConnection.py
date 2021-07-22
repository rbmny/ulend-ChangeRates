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

# Search by id, return rating
def rating(i):
    i = i+2
    id = ObjectId(f"60df218dc6dbe102e72a7b6{i}")
    rating = db.Data.find_one({"_id":ObjectId(id)}, {"Rating":1, "_id":0})
    rating = rating.get("Rating")

    return rating

def getScore():
    scoreCredito = 700
    return int(scoreCredito)

def scoreCredito():
    for i in range(0, 19):
        if getScore() >= findById(i):
            print(findById(i))
            compRow = i
            newScore = findById(i)
            rating = db.Data.find_one({"_id":ObjectId(f"60df218dc6dbe102e72a7b6{i+2}")}, {"Rating":1, "_id":0}).get("Rating")
            print(f'Rating = {rating}')
            return i+2

indexScore = scoreCredito()
print(f'Index Score: {indexScore}')

def find(name):
    index = db.Data.find_one({"_id":ObjectId(f"60df218dc6dbe102e72a7b6{indexScore}")}, {name:1, "_id":0})
    returnable = index.get(name)
    return returnable

# var scorePre = getScorePre()
# var scoreCredito = getScoreCredito()

def gi120():
    garantiaImovel120 = find("Imovel 120")
    print(garantiaImovel120)
gi120()

# result2 = db.Data.find_one({"_id":id})
# print(f"Found by ObjectId {result2}")
