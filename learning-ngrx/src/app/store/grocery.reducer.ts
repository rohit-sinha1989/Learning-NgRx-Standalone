import { createReducer } from "@ngrx/store";
import { Grocery } from "../../model/grocery.model";

const initialState: Grocery[] = [
  { id: 1, name: 'Apple', type: 'Fruit' },
  { id: 2, name: 'Banana', type: 'Fruit' },
  { id: 3, name: 'Orange', type: 'Fruit' },
  { id: 4, name: 'Tomato', type: 'Vegetable' },
  { id: 5, name: 'Potato', type: 'Vegetable' },
  { id: 6, name: 'Onion', type: 'Vegetable' }
]

export const groceryReducer  = createReducer(initialState);
