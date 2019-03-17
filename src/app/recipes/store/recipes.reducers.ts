import { Recipe } from "../recipe.model";
import { Ingredient } from "../../shared/ingredient.model";
import * as RecipeActions from './recipes.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState{
    recipes: State
}

export interface State {
    recipes: Recipe[];
}

const initialState: State = {
    recipes: [
        new Recipe('A Biryani Recipe', 'This is Chicken Biryani',
         'https://i1.wp.com/media.hungryforever.com/wp-content/uploads/2017/06/14111008/fish-biryani-recipes.jpg?ssl=1?w=356&strip=all&quality=80',
        [
            new Ingredient('Chicken', 1),
            new Ingredient('Tomatoes', 10)
        ]),
         new Recipe('Mughlai Chicken', 'This is Mughlai Chicken',
         'http://www.theflavourtrip.com/wp-content/uploads/2018/01/Mughlai-Chicken-Recipe-Step-28-595x432.jpg',
        [
            new Ingredient('Chicken', 4),
            new Ingredient('Onions', 3)
        ])
      ]
};

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
    switch(action.type) {
        case (RecipeActions.SET_RECIPES):
            return {
                ...state,
                recipes: [...action.payload]
            };
        case (RecipeActions.ADD_RECIPE):
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            };
        case (RecipeActions.UPDATE_RECIPE):
            const recipe = state.recipes[action.payload.index];
            const updatedRecipe = {
                ...recipe,
                ...action.payload.updatedRecipe
            };
            const recipes = [...state.recipes];
            recipes[action.payload.index] = updatedRecipe;
            return {
                ...state,
                recipes: recipes
            };
        case (RecipeActions.DELETE_RECIPE):
            const oldRecipes = [...state.recipes];
            oldRecipes.splice(action.payload, 1);
            return {
                ...state,
                recipes: oldRecipes
            };
        default:
            return state;
    };
}