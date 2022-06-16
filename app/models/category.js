//~ IMPORTATION DATA CATEGORY
import { findAll, createData, findOne, updateData, deleteData } from '../datamapper/category.js';

class Category {
  constructor(categoryId, categoryData) {
    this.findAll = findAll();
    this.createData = createData(categoryData);
    this.findOne = findOne(categoryId);
    this.updateData = updateData(categoryId, categoryData);
    this.deleteData = deleteData(categoryId);
  }
}

export { Category };

//? Test notre instance ---> return "true" si ok
// const category = new Category();
// console.log(category instanceof Category);
