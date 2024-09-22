import { build, copyAssets } from '@redwoodjs/auth-supabase-framework-tools'

await build()

await copyAssets({
  buildFileUrl: import.meta.url,
  patterns: ['templates/**/*.template'],
})
