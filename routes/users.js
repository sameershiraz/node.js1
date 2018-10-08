var express = require('express');
var router = express.Router();

/*
 * GET userlist.
 */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

// GET productlist.
router.get('/productlist', function(req, res) {
    var db = req.db;
    var collection = db.get('productlist');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

/*
 * GET employeelist.
 */
router.get('/employeelist', function(req, res) {
    var db = req.db;
    var collection = db.get('employeelist');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

/*
 * GET supplierlist.
 */
router.get('/supplierlist', function(req, res) {
    var db = req.db;
    var collection = db.get('supplierlist');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

/*
 * DELETE to deleteuser.
 */
router.delete('/deleteuser/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    var userToDelete = req.params.id;
    collection.remove({ '_id' : userToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});

// DELETE to deleteproduct.
router.delete('/deleteproduct/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('productlist');
    var productToDelete = req.params.id;
    collection.remove({ '_id' : productToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});

// DELETE to employee.
router.delete('/deleteemployee/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('employeelist');
    var employeeToDelete = req.params.id;
    collection.remove({ '_id' : employeeToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});

// DELETE to supplier.
router.delete('/deletesupplier/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('supplierlist');
    var supplierToDelete = req.params.id;
    collection.remove({ '_id' : supplierToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});

module.exports = router;

/*
 * POST to adduser.
 */
router.post('/adduser', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

//POST to addproduct.
router.post('/addproduct', function(req, res) {
    var db = req.db;
    var collection = db.get('productlist');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

//POST to addemployee.
router.post('/addemployee', function(req, res) {
    var db = req.db;
    var collection = db.get('employeelist');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

//POST to addsupplier.
router.post('/addsupplier', function(req, res) {
    var db = req.db;
    var collection = db.get('supplierlist');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});
