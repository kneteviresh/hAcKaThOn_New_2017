var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = { name: "kavitha.vikas@gmail.com", password: "kavitha" , womenProductName: "Soch : Traditional kurtas",
    womenPriceAlone: 699,
    womenPriceShare: 1000,
    womenQuantity: 1,
    womenPurchaseType: "simple"};
  db.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});