class RecipeCategory extends BaseRecipeCategory{

    constructor(name: string, foodGroups: FoodGroup[], public description: string){
        super(name, foodGroups);
    }

} 