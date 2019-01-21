import {Diploma, IDiploma} from "../../models/diploma";

export function readDiploma(typeId?: string, isAdmin = false): Promise<Array<IDiploma>> {
  return Diploma.find({typeId: typeId})
    .then((diplomaItems: any) => diplomaItems.map((diplomaItem: IDiploma): IDiploma => {
        if (isAdmin) {
          return {
            description: diplomaItem.description,
            itemId: diplomaItem.itemId,
            header: diplomaItem.header,
            entityId: diplomaItem.entityId,
            graduateYear: diplomaItem.graduateYear,
            picture: diplomaItem.picture,
            isPublished: diplomaItem.isPublished,
            _id: diplomaItem._id
          }
        }

      return {
          description: diplomaItem.description,
          header: diplomaItem.header,
          graduateYear: diplomaItem.graduateYear,
          picture: diplomaItem.picture,
          entityId: diplomaItem.entityId
        }
      })
    );
}

export function createDiploma(diploma: IDiploma): Promise<IDiploma> {
  return Diploma.create(diploma)
    .then(() => diploma)
    .catch(err => {throw new Error(err.message)});
}

export function updateDiploma(id: string, newDiploma: IDiploma): Promise<IDiploma> {
  return Diploma.updateOne(id, newDiploma)
    .then(() => newDiploma)
    .catch(err => {throw new Error(err.message)});
}

export function removeDiploma(_id: string): Promise<any> {
  return Diploma.findOneAndDelete({_id})
    .then(result => result)
    .catch(err => {throw new Error(err.message)});
}
