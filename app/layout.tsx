import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <nav>
          <Link href="/">
            Home
          </Link>
          <Link href="/notes">
            Notes
          </Link>
        {children}
        </nav>
        </body>
    </html>
  )
}
