import * as coda from "@codahq/packs-sdk"
import { EmbedVector } from "./pack/EmbedVector"
import { QuerySimilar } from "./pack/QuerySimilar"
import { readFileSync } from "fs"

export const pack = coda.newPack()

try {
  const version = readFileSync("VERSION", "utf8").trim()
  if (version) {
    pack.setVersion(version)
  }
} catch {}
pack.addNetworkDomain("pinecone.io")

pack.setUserAuthentication({
  type: coda.AuthenticationType.CustomHeaderToken,
  headerName: "Api-Key",
  instructionsUrl: "https://docs.pinecone.io/docs/quickstart",
})

EmbedVector(pack)
QuerySimilar(pack)
