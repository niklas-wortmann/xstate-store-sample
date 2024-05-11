import { DonutFlavor } from "../models/donut-flavor.type.ts";

export function getRandomFlavor(currentFlavor: DonutFlavor): DonutFlavor {
  const flavors: DonutFlavor[] = ["raspberry", "strawberry", "blueberry"];
  const minIndex = 0;
  const maxIndex = flavors.length - 1;

  let newFlavor: DonutFlavor | null = null;

  do {
    const randomIndex =
      Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;

    newFlavor = flavors[randomIndex];
  } while (newFlavor === null || newFlavor === currentFlavor);

  return newFlavor;
}
