import mongoose from 'mongoose';
import {TPageId} from "../types/types";
import {IMongooseSchema} from "./IMongooseSchema";

export interface IDiploma extends IMongooseSchema {
  picture: string;
  header: string;
  graduateYear: number;
  description: string;
  itemId?: string;
  entityId?: TPageId;
  isPublished?: boolean;
}

const schema = new mongoose.Schema({
  itemId: {type: String, required: false},
  picture: {type: String, required: true},
  header: {type: String, required: true},
  graduateYear: {type: Number, required: true},
  description: {type: String, required: false},
  isPublished: {type: Boolean, required: true, default: true},
  entityId: {type: String, required: false}
});

export const Diploma = mongoose.model('Diploma', schema);
