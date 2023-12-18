import { FakeDb } from "../db/FakeDb.js"

class MagicItemService {
  getMagicItems(){
    const magicitems = FakeDb.magicItems
    return magicitems
  }
  createMagicItem(payload){
    const magicItem = payload
    magicItem.id = FakeDb.magicItems[FakeDb.magicItems.length -1].id + 1
    FakeDb.magicItems.push(magicItem)
    return magicItem
  }
  deleteMagicItem(thisItem){
    const indexToRemove = FakeDb.magicItems.findIndex(magicItem => magicItem.id == thisItem)
    if (!FakeDb.magicItems[indexToRemove]) throw new Error(`No can do chief. Alas, there are no magical items at id: ${thisItem} within this treasure hoard.`)
    FakeDb.magicItems.splice(indexToRemove, 1)
    return `this loot has been banished to the ✨🌌Astral Realm🌌✨. Hope you're happy.`
  }
  updateMagicItem(thisPayload){
    // const indexToRemove = FakeDb.magicItems.findIndex(magicItem => magicItem.id == thisPayload)
    // if (!FakeDb.magicItems[indexToRemove]) throw new Error(`No can do chief. Alas, there are no magical items at id: ${thisPayload} within this treasure hoard.`)
    // FakeDb.magicItems.splice(indexToRemove, 1)
    // return `this loot has been banished to the ✨🌌Astral Realm🌌✨. Hope you're happy.`
  }
}
export const magicItemService = new MagicItemService()

