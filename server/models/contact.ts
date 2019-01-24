import mongoose from 'mongoose';
import {TPageId} from "../types/types";
import {IMongooseSchema} from "./IMongooseSchema";

const schema = new mongoose.Schema({
  key: {type: String, required: true},
  value: {type: String, required: true}
});

export const Contact = mongoose.model('Contact', schema);
