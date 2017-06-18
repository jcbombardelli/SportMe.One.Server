module.exports = function (app, _db) {

    app.get('/api/feeder', function (req, res) {

        _db.collection('feeder').find().toArray(function (err, result) {
            if (err) {
                throw err;
            }
            res.send(result);
        });

    });
}