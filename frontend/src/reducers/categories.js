import { RETRIEVE_CAT, } from '../constatns/categoriesContants'

export function categories(state = {}, action) {
  switch (action.type) {
    case RETRIEVE_CAT:
      const category_object = {};

      for (let category of action.categories) {
        category_object[category.name] = category;
      }

      return category_object
    default:
      return state
  }
}

export default categories
