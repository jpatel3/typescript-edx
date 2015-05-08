
//class logic
class Recipes {
    recipeType: RecipeItem[];

    get recipeItem() {
        return this.recipeType;
    }

    set recipeItem(_recipeItems: RecipeItem[]) {
        this.recipeType = _recipeItems;
    }
}

class RecipeItem {
    name: string;
    class: RecipeClass[];

    get recipeItemName() {
        return this.name;
    }

    set recipeItemName(recipeTypeName: string) {
        this.name = recipeTypeName;
    }

    get recipeItemClass() {
        return this.class;
    }

    set recipeItemClass(recipeItemClass: RecipeClass[]) {
        this.class = recipeItemClass;
    }
}

class RecipeClass {
    //member variable goes here:
    type: string;

    get recipeType() {
        return this.type;
    }

    set recipeType(_type: string) {
        this.type = _type;
    }
}





