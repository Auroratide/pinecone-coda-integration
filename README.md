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

New versions are released in two steps: create a GitHub Release locally, then the CI uploads that version to Coda.

1) One-time setup

- Ensure a GitHub Actions secret `CODA_API_TOKEN` exists (Coda API token).
- Install and log in to the GitHub CLI: `gh auth login`.

2) Cut a release

```
./scripts/release.sh 0.9
```

What this does:

- Overwrites `pack/version.ts` with `0.9` and commits it.
- Creates and pushes the tag `v0.9`.
- Creates the GitHub Release `v0.9` with generated notes.

3) CI upload to Coda

- The `Upload Coda Pack` workflow runs on the published release.
- It registers with Coda using `CODA_API_TOKEN`, uploads the Pack, and releases version `0.9` with the tag used as notes.
