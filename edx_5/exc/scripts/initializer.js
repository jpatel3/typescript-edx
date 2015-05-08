/// <reference path="recipesClass.ts"/>
//then populate drop-downs with items from the different classes
var request = new XMLHttpRequest();
//class logic
var recipes;
function recipeTypeLoader() {
    var recipeGetter;
    //class logic
    recipes = JSON.parse(request.responseText);
    var rType = document.getElementById('RecipeType');
    recipeGetter = new RecipeType(rType);
    recipeGetter.LoadRecipeTypes(recipes);
}
window.onload = function () {
    request.onload = recipeTypeLoader;
    request.open("get", "/JSON/recipeTypes.json", true);
    request.send();
};
var RecipeType = (function () {
    function RecipeType(recipeType) {
        this._recipeType = recipeType;
    }
    RecipeType.prototype.LoadRecipeTypes = function (types) {
        for (var i = 0; i < types.recipeType.length; i++) {
            var opt = document.createElement('option');
            opt.innerHTML = types.recipeType[i].name;
            this._recipeType.appendChild(opt);
        }
    };
    return RecipeType;
})();
