module.exports = function (app, _db) {

    app.get('/leads', function (req, res) {

        _db.collection('leads').find().toArray(function (err, result) {
            if (err) {
                throw err;
            }
            res.render("leads/lista", { lista: result})
        });


    });

    app.get('/api/leads', function (req, res) {

        _db.collection('leads').find().toArray(function (err, result) {
            if (err) {
                throw err;
            }
            res.send(result);
        });

    });

    app.post('/api/leads', function (req, res) {

        try {

            var collection = _db.collection('leads')
            collection.save(req.body);

            res.send(200);

            //.then(function(result) {
            //    res.statusCode(200).send(res.statusCode);
            //})

        } catch (error) {
            res.status(500).send(error);

        }
    })
}