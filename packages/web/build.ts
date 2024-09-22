import { buildCjs, buildEsm } from '@redwoodjs/auth-supabase-framework-tools'
import {
  generateTypesCjs,
  generateTypesEsm,
  insertCommonJsPackageJson,
} from '@redwoodjs/auth-supabase-framework-tools/generateTypes'

// ESM build and type generation
await buildEsm()
await generateTypesEsm()

// CJS build, type generation, and package.json insert
await buildCjs()
await generateTypesCjs()
await insertCommonJsPackageJson({
  buildFileUrl: import.meta.url,
})
