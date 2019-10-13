const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const categorySchema = new Schema({
  name: String,
  image: String,
  description: String,
  organizations: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  ]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
