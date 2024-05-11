import { createStoreWithProducer } from "@xstate/store";
import { create } from "mutative";
import { StoreContext } from "../models/store-context.model.ts";
import { DonutFlavor } from "../models/donut-flavor.type.ts";
import { getRandomFlavor } from "../services/store.service.ts";

const storeContext: StoreContext = {
  donuts: 0,
  favoriteFlavor: "blueberry",
};

export const mutativeStore = createStoreWithProducer(create, storeContext, {
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
