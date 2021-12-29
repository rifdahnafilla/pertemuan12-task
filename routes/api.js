// import Student Controller
const StudentController = require("../controllers/StudentController");
// import express
const express = require("express");

//buat routing modular
const router = express.Router();

// definisikan routing
// callback function
router.get("/", (req, res) => {
    res.send("Hello Jasmin");
});

router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);


module.exports = router;