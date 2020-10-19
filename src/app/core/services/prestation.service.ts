import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Category, Prestation } from '../models';

export class PrestationGroupByCategory {
  categoryId: string;
  prestations: Prestation[]
}

@Injectable({
  providedIn: "root",
})
export class PrestationService {
  constructor(private apollo: Apollo) {}

  /**
   * Recover all prestations's category
   */
  getAllCategories(): Category[] {
    return new Array<Category>();
  }
  /**
   * Recover prestations category with at least one prestation
   */
  getCategoriesWithPrestations(): Category[] {
    return new Array<Category>();
  }
  /**
   * Recover all prestations
   */
  getPrestations(): Prestation[] {
    return new Array<Prestation>();
  }

  getPrestationGroupByCategory(): PrestationGroupByCategory[] {
    return new Array<PrestationGroupByCategory>();
  }
}
