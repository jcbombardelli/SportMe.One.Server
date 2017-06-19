module.exports = function (app, _db) {

    app.get('/api/clubs', function (req, res) {

        _db.collection('clube').find().project({ Clube: 1, _id: 0 }).toArray(function (err, result) {
            if (err) {
                throw err;
            }
            res.send(result);
        });

    });
}