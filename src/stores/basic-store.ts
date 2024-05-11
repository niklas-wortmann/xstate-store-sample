import { createStore } from "@xstate/store";
import { StoreContext } from "../models/store-context.model.ts";
import { DonutFlavor } from "../models/donut-flavor.type.ts";
import { getRandomFlavor } from "../services/store.service.ts";

const storeContext: StoreContext = {
  donuts: 0,
  favoriteFlavor: "blueberry",
};

export const basicStore = createStore(
  storeContext,

  {
    addDonut: {
      donuts: (context) => context.donuts + 1,
    },
    changeFlavor: {
      favoriteFlavor: (_, event: { flavor: DonutFlavor }) => event.flavor,
    },
    randomizeFlavor: {
      favoriteFlavor: (context) => getRandomFlavor(context.favoriteFlavor),
    },
    eatAllDonuts: {
      donuts: 0,
    },
  },
);
