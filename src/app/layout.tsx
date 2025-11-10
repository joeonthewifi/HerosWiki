import { RootProvider } from 'fumadocs-ui/provider/next'
import './global.css'
import { Bebas_Neue, Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({
	subsets: ['latin'],
})

const bebasNeue = Bebas_Neue({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-bebasNeue',
})

const upheaval = localFont({
	src: '../fonts/upheaval.ttf',
	variable: '--font-upheaval',
})

const minecraft = localFont({
	src: '../fonts/minecraft.woff2',
	variable: '--font-minecraft',
})

export default function Layout({ children }: LayoutProps<'/'>) {
	return (
		<html
			lang="en"
			className={`${inter.className} ${bebasNeue.variable} ${upheaval.variable} ${minecraft.variable} font-sans`}
			suppressHydrationWarning
		>
			<body className="flex flex-col min-h-screen">
				<RootProvider>
					{children}
					<Analytics />
				</RootProvider>
			</body>
		</html>
	)
}
