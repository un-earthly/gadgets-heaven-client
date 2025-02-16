import React from "react"
import "./globals.css"
import { ThemeProvider } from "next-themes"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" >
            <head>
                <meta charSet="UTF-8" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Gadgets Heaven - Keep Moving Forward</title>
                < meta name="description" content="Web site created..." />
            </head>
            <body >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div id="root" > {children} </div>
                </ThemeProvider>
            </body>
        </html>
    )
}