import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  key: {type: String, required: true},
  value: {type: String, required: true},
  name: {type: String, required: false}
});

export const Contact = mongoose.model('Contact', schema);
