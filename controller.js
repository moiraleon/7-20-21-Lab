const houses = require('./db.json');
const houseId = 4;

// getHouses, deleteHouse, createHouse, updateHouse.

module.exports = {
    getHouses: function(req,res){
        res.status(200).send(houses)
    },
    deleteHouse: function(req,res){
        const{id} = req.params;
        const trgtIndex = houses.findIndex(function(houseObj){
            return houseObj.id ===+id;
        });
         houses.splice(trgtIndex, 1)
         res.status(200).send(houses)
    },
    createHouse: function(req,res){
        let {address, price,imageURL} =req.body
        let newHouse = {id: houseId, address, price, imageURL}
        houses.push(req.body)
        res.status(200).send(houses)
        houseid++
    },
    updateHouse: function(req,res){
        const id = +req.params.id;
        const {type} =req.body;

        const trgtIndex = houses.findIndex(function(houseObj){
        return houseObj.id === id;
     })
     if(type ==='plus'){
         houses[trgtIndex].price+=10000
         res.status(200).send(houses)
     } else if (type ==='minus'){
         houses[trgtIndex].price-=10000
         res.status(200).send(houses)
     }  else{
         res.status(400).send('Please indicate a value')
     }
    },


}


// //  createUser: (req, res) => {
//     userDatabase.push(req.body)
//     res.status(200).send('User successfully added.')
//   },
