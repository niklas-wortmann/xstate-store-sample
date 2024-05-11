import React from "react";
import "./app.css";

import { useSelector } from "@xstate/store/react";
import { basicStore } from "./stores/basic-store.ts";
import { immerStore } from "./stores/immer-store.ts";
import { mutativeStore } from "./stores/mutative-store.ts";
import { DonutFlavor } from "./models/donut-flavor.type.ts";

type CardProps = {
  title: string;
  count: number;
  flavor: DonutFlavor;
  add: () => void;
  eatAll: () => void;
  randomizeFlavor: () => void;
};

const Card: React.FC<CardProps> = ({
  title,
  count,
  flavor,
  add,
  eatAll,
  randomizeFlavor,
}) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <span>Count: {count}</span> <span>Flavor: {flavor}</span>
      <div className="buttonGroup">
        <button onClick={add}>Add donut</button>
        <button disabled={count < 1} onClick={eatAll}>
          Eat all donuts
        </button>
        <button onClick={randomizeFlavor}>Get random flavor</button>
      </div>
    </div>
  );
};

export function App() {
  const basicDonutCount = useSelector(
    basicStore,
    (state) => state.context.donuts,
  );
  const basicDonutFlavor = useSelector(
    basicStore,
    (state) => state.context.favoriteFlavor,
  );

  const immerDonutCount = useSelector(
    immerStore,
    (state) => state.context.donuts,
  );
  const immerDonutFlavor = useSelector(
    immerStore,
    (state) => state.context.favoriteFlavor,
  );

  const mutativeDonutCount = useSelector(
    mutativeStore,
    (state) => state.context.donuts,
  );
  const mutativeDonutFlavor = useSelector(
    mutativeStore,
    (state) => state.context.favoriteFlavor,
  );

  return (
    <div className="cards">
      <Card
        title="Basic Store"
        count={basicDonutCount}
        flavor={basicDonutFlavor}
        add={() => basicStore.send({ type: "addDonut" })}
        eatAll={() => basicStore.send({ type: "eatAllDonuts" })}
        randomizeFlavor={() => basicStore.send({ type: "randomizeFlavor" })}
      />
      <Card
        title="Immer Store"
        count={immerDonutCount}
        flavor={immerDonutFlavor}
        add={() => immerStore.send({ type: "addDonut" })}
        eatAll={() => immerStore.send({ type: "eatAllDonuts" })}
        randomizeFlavor={() => immerStore.send({ type: "randomizeFlavor" })}
      />
      <Card
        title="Mutative Store"
        count={mutativeDonutCount}
        flavor={mutativeDonutFlavor}
        add={() => mutativeStore.send({ type: "addDonut" })}
        eatAll={() => mutativeStore.send({ type: "eatAllDonuts" })}
        randomizeFlavor={() => mutativeStore.send({ type: "randomizeFlavor" })}
      />
    </div>
  );
}
