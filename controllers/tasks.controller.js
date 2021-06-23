module.exports = {
    create: function (req, res) {
        res.status(201).send();
    },

    getAll: function (req, res) {
        res.json([{id: 1, name: 'QA Test App 1'},{id: 2, name: 'QA Test App 2'},{id: 3, name: 'QA Test App 3'}]);
    },

    getById: function (req, res) {
        res.json({id: 1, name: 'QA Test App'});
    }
};
