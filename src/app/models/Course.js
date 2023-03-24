const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String },
    description: { type: String },
    image: { type: String },
    videoId: { type: String },
    slug: { type: String, slug: 'name' },
}, {
    timestamps: true,
});

mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    overrideMethods: true,
    deletedAt: true
});

module.exports = mongoose.model('Course', Course);