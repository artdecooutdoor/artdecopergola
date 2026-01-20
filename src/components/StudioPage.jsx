import React from 'react'
import { Studio } from 'sanity'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

// Re-export your schema types
import { schemaTypes } from '../sanity/schemaTypes'

const studioConfig = defineConfig({
  name: 'default',
  title: 'artdeco',
  projectId: 'py6y7j4v',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})

export default function StudioPage() {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Studio config={studioConfig} />
    </div>
  )
}
