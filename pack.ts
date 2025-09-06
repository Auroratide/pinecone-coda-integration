import * as coda from "@codahq/packs-sdk"
import { EmbedVector } from "./pack/EmbedVector"
import { QuerySimilar } from "./pack/QuerySimilar"
import { version as PACK_VERSION } from "./pack/version"

export const pack = coda.newPack()

pack.setVersion(PACK_VERSION)
pack.addNetworkDomain("pinecone.io")

pack.setUserAuthentication({
  type: coda.AuthenticationType.CustomHeaderToken,
  headerName: "Api-Key",
  instructionsUrl: "https://docs.pinecone.io/docs/quickstart",
})

EmbedVector(pack)
QuerySimilar(pack)
