import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  image: {type: String, required: true},
  institute: {type: String, required: true},
  graduateYear: {type: Number, required: true},
  isPublished: {type: Boolean, required: true, default: true},
  order: {type: Number, required: false}
});

export const Diploma = mongoose.model('Diploma', schema);
