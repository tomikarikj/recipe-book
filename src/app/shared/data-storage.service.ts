import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const token = this.authService.getToken();
    const req = new HttpRequest(
      'PUT',
      'https://ng-recipe-book-8a2f9.firebaseio.com/recipes.json?auth=' + token,
      this.recipeService.getRecipes(),
      { reportProgress: true }
    );
    return this.http.request(req);
  }

  getRecipes() {
    const token = this.authService.getToken();
    this.http
      .get<Recipe[]>(
        'https://ng-recipe-book-8a2f9.firebaseio.com/recipes.json?auth=' +
          token,
        {
          observe: 'body',
          responseType: 'json'
        }
      )
      .pipe(
        map(recipes => {
          console.log(recipes);
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        })
      )
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
