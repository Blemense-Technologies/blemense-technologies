"use client"
import * as React from "react"
import { ThemeProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function Provider({ children }: ThemeProviderProps) {
  return <ThemeProvider enableSystem attribute="class" defaultTheme="system">{children}</ThemeProvider>
}
