import {
  buildExternalCjs,
  buildExternalEsm,
} from '@redwoodjs/auth-supabase-framework-tools'
import {
  generateTypesCjs,
  generateTypesEsm,
  insertCommonJsPackageJson,
} from '@redwoodjs/auth-supabase-framework-tools/generateTypes'

await buildExternalEsm()
await generateTypesEsm()

await buildExternalCjs()
await generateTypesCjs()

await insertCommonJsPackageJson({ buildFileUrl: import.meta.url })
