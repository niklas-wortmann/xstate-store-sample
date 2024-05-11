import { createStoreWithProducer } from "@xstate/store";
import { produce } from "immer";
import { StoreContext } from "../models/store-context.model.ts";
import { DonutFlavor } from "../models/donut-flavor.type.ts";
import { getRandomFlavor } from "../services/store.service.ts";

const storeContext: StoreContext = {
  donuts: 0,
  favoriteFlavor: "blueberry",
};

export const immerStore = createStoreWithProducer(produce, storeContext, {
  addDonut: (context) => {
    context.donuts++;
  },
  changeFlavor: (context, event: { flavor: DonutFlavor }) => {
    context.favoriteFlavor = event.flavor;
  },
  randomizeFlavor: (context) => {
    context.favoriteFlavor = getRandomFlavor(context.favoriteFlavor);
  },
  eatAllDonuts: (context) => {
    context.donuts = 0;
  },
});
