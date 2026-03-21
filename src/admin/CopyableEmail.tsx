'use client'
import React, { useState } from 'react'
import { useField } from '@payloadcms/ui'

export const CopyableEmail: React.FC<{ path: string; label?: string }> = ({ path, label }) => {
  const { value } = useField<string>({ path })
  const [copied, setCopied] = useState(false)

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault()
    if (value) {
      navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div style={{ marginBottom: '2rem' }}>
      <label
        style={{
          display: 'block',
          marginBottom: '0.5rem',
          color: 'var(--theme-elevation-500)',
          fontSize: '0.875rem',
        }}
      >
        {label || 'Email'}
      </label>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div
          style={{
            padding: '0.5rem 1rem',
            background: 'var(--theme-elevation-50)',
            border: '1px solid var(--theme-elevation-150)',
            borderRadius: '4px',
            flex: 1,
            fontFamily: 'monospace',
          }}
        >
          {value || 'No email provided'}
        </div>

        {value && (
          <button
            onClick={handleCopy}
            type="button"
            style={{
              padding: '0.5rem 1rem',
              background: copied ? 'var(--theme-success-400)' : 'var(--theme-elevation-100)',
              color: copied ? 'white' : 'inherit',
              border: '1px solid var(--theme-elevation-200)',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.2s',
            }}
          >
            {copied ? 'Copied!' : 'Copy Email'}
          </button>
        )}
      </div>
    </div>
  )
}
