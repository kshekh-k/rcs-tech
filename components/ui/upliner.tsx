import React from 'react'

interface UplinerProps {
  upline: string
}

function Upliner({ upline = '' }: UplinerProps) {
  return (
    <span className="inline-block rounded bg-accent/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-accent uppercase">
      {upline}
    </span>
  )
}

export default Upliner