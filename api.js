const { application } = require("express");
const express = require("express");

const { Router } = express;
const router = new Router();

const arr = [
  {
    
    name: "Celular",
    price: 3000,
    stock: true,
    id:0
  },
  {
    
    name: "Cargador",
    price: 2000,
    stock: true,
    id:1
  },
  {
    
    name: "Audifonos",
    price: 1000,
    stock: true,
    id:2
  },
];

router.get("/productos", (req, res) => {
  res.send(arr);
});

router.get("/productos/:id", (req, res) => {
  let idNum= req.params.id
  let arrNew= arr.filter((x)=> x.id == idNum)
  let cond= arrNew.find((x)=> x.id == idNum)
  if ( cond === null){
    res.json({
        message: "Objeto no encontrado"
    });
  } else{
    res.send(arrNew[0])
  }
  
  
});
router.get("/products/:id", (req, res) => {
    let idNum= req.params.id
    let arrNew= arr.filter((x)=> x.id == idNum)
    if ( idNum> arrNew.length ||arrNew.id=== null){
      res.json({
          message: "Objeto no encontrado"
      });
    } else{
      res.json({
          message: "Objeto encontrado",
          data:arrNew[0]
        })
      
    }
    
    
});

router.post("/productos", (req, res) => {
 
  let { name, price, stock } = req.body;
  let id= arr.length
  let obj = {
    name,
    price,
    stock, 
    id
  };

  arr.push(obj)
  res.json({
    message: "Objeto guardado con éxito"
  })
});

//router.use("/productos");

module.exports = router;