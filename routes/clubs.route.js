module.exports = function (app, _db) {

    app.get('/api/clubs', function (req, res) {

        _db.collection('clube').find().toArray(function (err, result) {
            if (err) {
                throw err;
            }
            res.send(result);
        });

    });
}