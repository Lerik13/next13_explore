import { Poppins } from 'next/font/google';
import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header';

const poppins = Poppins({
	weight: ['400', '700'],
	subsets: ['latin']
})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'App Next.js 13',
	description: 'Explore Next.js 13',
	keywords: 'web development, react, next.js, javascript',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Header />
				<main className='container'>
					{children}
				</main>
			</body>
		</html>
	)
}
