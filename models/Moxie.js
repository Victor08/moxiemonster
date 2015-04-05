var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
    name: String,
    dueDate: Date,
    done: Boolean,
    note: String,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Moxie', TodoSchema);