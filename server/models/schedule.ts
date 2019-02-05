import mongoose = require('mongoose');
import {TWeekday} from "../../_interface/types";

function validateWeekday(weekday: TWeekday): boolean {
    const weekdays: Array<TWeekday> = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
    return weekdays.indexOf(weekday) > -1;
}

const schema = new mongoose.Schema({
    weekday: {type: String, validate: validateWeekday},
    date: {type: String},
    availableHours: {type: [String]}
});

export const Schedule = mongoose.model('Schedule', schema);
