import {Diploma, IDiploma} from "../../models/diploma";

export function createDiploma(diploma: IDiploma): Promise<IDiploma> {
  return Diploma.create(diploma)
    .then(() => diploma)
    .catch(err => {
      throw new Error(err.message)
    });
}

export function readDiploma(isAdmin = false): Promise<Array<IDiploma>> {
  return Diploma.find()
    .then((diplomaItems: any) => diplomaItems.map((diplomaItem: IDiploma): IDiploma => {
        if (!isAdmin) {
          return {
            description: diplomaItem.description,
            header: diplomaItem.header,
            graduateYear: diplomaItem.graduateYear,
            picture: diplomaItem.picture,
            order: diplomaItem.order
          }
        }

        return diplomaItem
      })
    );
}

export function updateDiploma(_id: string, newDiploma: IDiploma): Promise<IDiploma> {
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
