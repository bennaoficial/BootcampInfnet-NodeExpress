const CATEGORIES = {
    1: { name: "Cozinha" },
    2: { name: "Lanche" },
    3: { name: "Sala de Jantar" },
    4: { name: "Talheres" },
  };
  
class CategoryController{
  getCategories(params){
      return CATEGORIES;
  }
  CATEGORIESORIES(id){
      let result= CATEGORIES[id];
      if(result !== null && result !== undefined){
          return result; 
      }
      return{
          msg:`Categoria ${result} não encontrada!`
      };
  }
}


module.exports = CategoryController;