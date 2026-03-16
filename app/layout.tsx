import { Metadata } from "next";
import TopBar from "./components/lootlayout"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    template: '%s | Blog',
    default: 'Blog',
  },
  description: '初めてのNext.jsBlogサイト',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header className="bg-red-100">
          <TopBar />          
        </header>
        <main>
          {children}
        </main>
        
        </body>
    </html>
  )
}