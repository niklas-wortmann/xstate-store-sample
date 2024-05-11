# XState Store Sample

This React + TypeScript code sample shows how to use different types of stores with the [`@xstate/store` library](https://www.npmjs.com/package/@xstate/store).

## Setup

Execute the following command to install project dependencies after cloning the repository:

```bash
npm install
```

Execute the following command to run the code sample:

```bash
npm run dev
```

## Issues

### Basic store

The `src/stores/basic-store.ts` file creates a basic store that updates the state context object using the built-in capabilities of the `@xstate/store` library.

VS Code handles the code completion for the `context` and `event` objects in transition functions well.

However, WebStorm always autocompletes the properties of the `context` object as functions. For example, instead of autocompleting `context.donuts`, it autocompleted `context.donuts()`. WebStorm seems to identify the `context` properties as functions.

### Immer store

The `src/stores/immer-store.ts` file creates a store that uses the [`immer` library](https://www.npmjs.com/package/immer) to update the `context` object within transition functions in a pseudo-mutative way.

VS Code handles the code completion for the `context` and `event` objects in transition functions fine. However, it does not seem to offer true code completion based on defined TypeScript types; instead, it seems to "guesstimate," which is the property name that you'd like to use after typing the dot notation followed by a letter. For example, typing `context.d` would show the following as possible properties to use:

- `donut`
- `donuts`
- `doWhile`
- `DonutFlavor`
- and so on.

Typing `context.` alone does not produce any list of possible property names based on the context type definition.

On the other hand, WebStorm does not offer any suggestions at all. Typing `context.` or `context.d` on WebStorm doesn't render any meaningful suggestions other than baseline JavaScript object properties.

### Mutative store

As an alternative to `immer`, the `src/stores/mutative-store.ts` file creates a store that uses the [`mutative` library](https://www.npmjs.com/package/mutative) to update the `context` object within transition functions in a pseudo-mutative way.

Both WebStorm and VS Code show the same errors in relation to the typing of the `context` object.

There's a TypeScript error on the second parameter of the `createStoreWithProducer()` method, the `context` object:

```text
Argument of type 'StoreContext' is not assignable to parameter of type '[unknown, () => unknown]'.ts(2345)
```

There are TypeScript errors while accessing properties of the `context` object available in the transition functions:

```text
Property 'donuts' does not exist on type 'NoInfer<[unknown, () => unknown]>'.ts(2339)
```

Despite these errors, the store functions as expected&mdash;as you can see by running the code sample.