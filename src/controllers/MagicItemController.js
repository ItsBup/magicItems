import { magicItemService } from '../services/MagicItemService.js';
import BaseController from '../utils/BaseController'

export class MagicItemController extends BaseController {
  constructor() {
    console.log('🪄 Loaded')
    super('api/magicitem');
    this.router
    .get('',this.getMagicItems)
    .post('',this.createMagicItems)
    .delete('/:thisItem',this.deleteMagicItems)
    .post('/:thisPayload', this.updateMagicItem)
  }

  getMagicItems(request, response, next){
    try {
      const magicItems = magicItemService.getMagicItems()
      response.send(magicItems)
    } catch (error) {
      next(error)
    }
  }
  createMagicItems(request, response, next){
    try {
      const payload = request.body
      const magicItem = magicItemService.createMagicItem(payload)
      response.send(magicItem)
    } catch (error) {
      next(error)
    }

  }
  deleteMagicItems(request, response, next){
    try {
      const thisItem = request.param.thisItem
      const message = magicItemService.deleteMagicItem(thisItem)
      response.send(message)
    } catch (error) {
      next(error)
    }

  }
  updateMagicItem(request, response, next){
    try {
      const thisPayload = request.param.thisPayload
      const updatedMagicItem = magicItemService.updateMagicItem(thisPayload)
      response.send(updatedMagicItem)
    } catch (error) {
      next(error)
    }
  }
}