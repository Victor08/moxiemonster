var mongoose = require('mongoose');

var MoxieSchema = new mongoose.Schema({
    name: String,
    dueDate: Date,
    done: Boolean,
    comment: String,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Moxie', MoxieSchema);