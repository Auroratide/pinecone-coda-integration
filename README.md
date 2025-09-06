# Pinecone + Coda

This is a [Coda Pack](https://coda.io/product/packs) that lets you integrate with a [Pinecone Vector Store](https://www.pinecone.io/). Put in more eloquent terms, this lets you do some mild AI shenanigans on data, within Coda.

> [!CAUTION]
> Please do not use this yet, it's still in development. Unless you're an adrenaline junkie, then you can do whatever you want.

## Development

**Start with this**: `pnpm install`

To develop locally, you need an API key from a Pinecone instance you have. Provide it by running this command:

```
pnpm coda auth pack.ts
```

> [!NOTE]
> Todo maybe add docker or whatevers so you don't need a real pinecone. Real pinecones in nature are pretty cool tho~

You can test formulas manually:

```
pnpm coda execute pack.ts FormulaName "param1" "param2" ...
```

## Deployment

New versions of the pack are uploaded to Coda whenever a Release of the project is created on Github. This is done through a Workflow.
