import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A tasty burger',
      'Make a tasty burger with cheese and lettuce',
      'https://images.unsplash.com/photo-1536510233921-8e5043fce771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1371&q=80',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Cheese', 1),
        new Ingredient('Lettuce', 1)
      ]
    ),
    new Recipe(
      'Wienerschnitzel',
      'Make a traditional German Wienerschnitzel',
      'https://upload.wikimedia.org/wikipedia/commons/4/40/Wiener_Schnitzel.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Potatoes', 4)]
    ),
    new Recipe(
      'Napolitanian pizza',
      'Make an amazing pizza the way the people in Naples do it',
      'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      [
        new Ingredient('Dough', 1),
        new Ingredient('Tomatoes', 5),
        new Ingredient('Mushrooms', 3)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
