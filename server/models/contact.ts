import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  key: {type: String, required: true},
  value: {type: String, required: true}
});

export const Contact = mongoose.model('Contact', schema);
