"use client"

import { useEffect, useRef } from "react"

export function CodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateSize()
    window.addEventListener("resize", updateSize)

    // Code snippets for background
    const codeSnippets = [
      "function hack() {",
      "const security = true;",
      'import { crypto } from "node:crypto";',
      "if (vulnerable) {",
      "exploit.execute();",
      "def decrypt(data):",
      "class Hacker:",
      "#!/bin/bash",
      "SELECT * FROM users;",
      "while(true) {",
      'console.log("pwned");',
      "async function attack() {",
      'const flag = "CTF{...}";',
      "sudo rm -rf /",
      "ssh root@target",
      "nmap -sV -p-",
      "0x4141414141414141",
      "buffer overflow",
      "__init__.py",
      "return payload;",
    ]

    interface CodeLine {
      text: string
      x: number
      y: number
      speed: number
      opacity: number
    }

    const lines: CodeLine[] = []

    // Create initial code lines
    for (let i = 0; i < 30; i++) {
      lines.push({
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.1 + Math.random() * 0.3,
        opacity: 0.1 + Math.random() * 0.2,
      })
    }

    let animationId: number

    function animate() {
      if (!ctx || !canvas) return

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = '14px "Geist Mono", monospace'

      lines.forEach((line) => {
        ctx.fillStyle = `rgba(34, 211, 238, ${line.opacity})`
        ctx.fillText(line.text, line.x, line.y)

        line.y += line.speed

        if (line.y > canvas.height + 20) {
          line.y = -20
          line.x = Math.random() * canvas.width
          line.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", updateSize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ opacity: 0.4 }} />
}
