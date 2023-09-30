import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { Navbar } from './Components/navbar/Navbar'
import { RegisterModal } from './Components/modals/RegisterModal'
import { LoginModal } from './Components/modals/LoginModal'
import { ToasterProvider } from './providers/ToasterProvider'
import getCurrentUser from './actions/getCurrentUser'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Airbnb',
	description: 'Airbnb Clone',
}

export default async function RootLayout({ children }: {
	children: React.ReactNode
}) {
	const currentUser = await getCurrentUser()
	return (
		<html lang="en">
			<body className={font.className}>
				<ToasterProvider />
				<LoginModal />
				<RegisterModal />
				<Navbar currentUser={currentUser} />
				{children}
			</body>
		</html>
	)
}
