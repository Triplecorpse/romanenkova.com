import mongoose from 'mongoose';
import {TPageId} from "../types/types";
import {IMongooseSchema} from "./IMongooseSchema";

export interface IDiploma extends IMongooseSchema {
  picture: string;
  header: string;
  graduateYear: number;
  description: string;
  isPublished?: boolean;
  order: number;
}

const schema = new mongoose.Schema({
  picture: {type: String, required: true},
  header: {type: String, required: true},
  graduateYear: {type: Number, required: true},
  description: {type: String, required: false},
  isPublished: {type: Boolean, required: true, default: true},
  order: {type: Number, required: false}
});

export const Diploma = mongoose.model('Diploma', schema);
