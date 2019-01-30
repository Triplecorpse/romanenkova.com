import {Schedule} from "../../models/schedule";
import {Database} from "../../../_interface/IMongooseSchema";

export function createSchedule(): Promise<any> {
  return Schedule.create();
}

export function readSchedule(isAdmin: boolean = false): Promise<Array<Database.ISchedule>> {
  return Schedule.find()
    .then((schedule: any): Array<Database.ISchedule> => schedule.map((scheduleItem: Database.ISchedule): Database.ISchedule => {
      if (!isAdmin) {
        return {
          availableHours: scheduleItem.availableHours,
          date: scheduleItem.date,
          weekday: scheduleItem.weekday
        };
      }

      return scheduleItem;
    }));
}

export function updateSchedule(_id: string, schedule: Database.ISchedule): Promise<any> {
  return Schedule.findByIdAndUpdate(_id, schedule).then();
}

export function deleteSchedule(_id: string): Promise<any> {
  return Schedule.findByIdAndDelete(_id).then();
}
