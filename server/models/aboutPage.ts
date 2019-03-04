import mongoose = require('mongoose');

function setImages(input: Array<any>): Array<string> {
  return input.map(imageObj => JSON.stringify(imageObj))
}

function getImages(input: Array<string>): Array<any> {
  return input.map(imageStr => JSON.parse(imageStr))
}

const schema = new mongoose.Schema({
    header: {type: String, required: true},
    body: {type: String, required: true},
    items: {type: [String], required: false, set: setImages, get: getImages},
    language: {type: String, required: true}
});

export const AboutPage = mongoose.model('AboutPage', schema);
