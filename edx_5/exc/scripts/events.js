/// <reference path="recipesClass.ts"/>
/// <reference path="initializer.ts"/>
//event handler to load recipes for a given type for the RecipeType select control
function loadRecipes() {
    var el = document.getElementById('RecipeType');
    try {
        var result = recipes.recipeType
            .filter(function (i) { return i.name === el.value; })
            .map(function (i) { return ({ rType: i.class }); });
    }
    catch (ex) {
        return;
    }
    var classList = document.getElementById('RecipeClass');
    var len = result[0].rType.length;
    classList.value = "";
    for (var i = 0; i < len; i++) {
        classList.value = classList.value + result[0].rType[i].type;
        classList.value = ((i + 1 == len) ? classList.value : classList.value + "\n");
    }
}
