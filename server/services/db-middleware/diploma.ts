import {Diploma} from "../../models/diploma";
import {Database} from "../../../_interface/IMongooseSchema";

export function createDiploma(diploma: Database.IDiploma): Promise<Database.IDiploma> {
  return Diploma.create(diploma)
    .then(() => diploma)
    .catch(err => {
      throw new Error(err.message)
    });
}

export function readDiploma(isAdmin = false): Promise<Array<Database.IDiploma>> {
  return Diploma.find().sort({order: 1})
    .then((diplomaItems: any) => diplomaItems.map((diplomaItem: Database.IDiploma): Database.IDiploma => {
      if (!isAdmin) {
          return {
            institute: diplomaItem.institute,
            graduateYear: diplomaItem.graduateYear,
            image: diplomaItem.image,
            order: diplomaItem.order
          }
        }

        return diplomaItem
      })
    );
}

export function updateDiploma(_id: string, newDiploma: Database.IDiploma): Promise<Database.IDiploma> {
  return Diploma.findByIdAndUpdate(_id, newDiploma)
    .then((w: any) => {
      return newDiploma
    })
    .catch(err => {
      throw new Error(err.message)
    });
}

export function removeDiploma(_id: string): Promise<any> {
  return Diploma.findOneAndDelete({_id})
    .then(result => result)
    .catch(err => {
      throw new Error(err.message)
    });
}
