//~ IMPORTATION DATA CATEGORY
import { findAll, createData, findOne, updateData, deleteData, findArticlesByCategoryId } from '../datamapper/category.js';

class Category {

    static async findAllCategories() { return findAll(); };

    static async createCategory(categoryData) { return createData(categoryData); };
    
    static async findOneCategory(categoryId) { return findOne(categoryId); };
    
    static async updateCategory(categoryId, categoryData) { return updateData(categoryId, categoryData); }
    
    static async deleteCategory(categoryId) { return deleteData(categoryId); };

    static async findArticlesByCategory(categoryId) { return findArticlesByCategoryId(categoryId); }
}

export { Category };

//? Test notre instance ---> return "true" si ok
// const category = new Category();
// console.log(category instanceof Category);
