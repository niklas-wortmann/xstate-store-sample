import { DonutFlavor } from "./donut-flavor.type.ts";

export interface StoreContext {
  donuts: number;
  favoriteFlavor: DonutFlavor;
}
