import React, { useEffect, useState } from "react"

export function Home() {
  const [num, setNum] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setNum((c) => c + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  })

  return <div>Home Page {num}</div>
}
