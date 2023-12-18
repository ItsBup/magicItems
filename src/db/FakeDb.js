import { MagicItem } from "../models/MagicItem.js";

export const FakeDb = {
  magicItems: [
      new MagicItem({
          id: 0,
          name: 'Double Double 💗 Stopper',
          value: 100,
          rarity: 'Rare',
          attunement: false,
          description: 'As an action, you may consume this delicious whopper in order to gain all the benefits of a Long Rest. If you do so, you must immediately make a Constitution saving throw (DC 20) suffering cardiac arrest of a fail (drop to 1 hit point).'
          //...
      })
  ]
}