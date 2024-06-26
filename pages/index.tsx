import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Inter } from '@next/font/google'
import { motion, useScroll, useSpring } from 'framer-motion'
import React from 'react'
import About from '../components/About'
import Contacts from '../components/Contacts'
import Experience from '../components/Experience'
import MainLayout from '../components/Layout/MainLayout'
import MainSection from '../components/MainSection'
import Projects from '../components/Projects'

const inter = Inter({ subsets: ['latin'] })

const theme = createTheme({
	palette: {
		// primary: {
		//   light: '#757ce8',
		//   main: '#3f50b5',
		//   dark: '#002884',
		//   contrastText: '#fff',
		// },
		secondary: {
			light: 'black',
			main: 'black',
			dark: 'black',
			contrastText: 'black',
		},
	},
})

export default function Home() {
	const { scrollYProgress } = useScroll()
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	})

	return (
		<ThemeProvider theme={theme}>
			<motion.div
				style={{
					scaleX: scaleX,
					transformOrigin: 'left',
					background: 'black',
					position: 'sticky',
					top: '0',
					width: '100%',
					height: '6px',
					zIndex: '1000',
				}}
			/>
			<MainLayout>
				<MainSection />
				<About />
				{/* <Skills /> */}
				<Experience />
				<Projects />
				<Contacts />
			</MainLayout>
		</ThemeProvider>
	)
}
