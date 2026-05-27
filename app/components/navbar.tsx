import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import SelectionContext from '~/context/sectionContext';
import { sectionIds } from '~/sections';

export const NavBar = () => {
	const [activeSection, setActiveSection] = useState('about');
	const [isScrolled, setIsScrolled] = useState(false);
	const selectedSection = useContext(SelectionContext)
	const navRef = useRef(null);

	// adjust margin top as needed
	const scrollToSection = (sectionId: string) => {
		// creo que tengo que compartir el estado de que fue seleccionado con home
		// ver como pasar los props al 'children' o si con un context basta
		// https://stackoverflow.com/questions/71866403/using-a-ref-to-find-and-scroll-to-the-top-position-of-child-element-in-react
		
		const element = document.getElementById(sectionId);
		if (element) {
			const marginTop = 0;

			const scrollToY =
				element.getBoundingClientRect().top + window.scrollY - marginTop;

			console.log(
				'%c element.getBoundingClientRect().top',
				'color: blue; font-size: 20px',
				element.getBoundingClientRect().top,
			);
			console.log(
				'%c window.scrollY',
				'color: blue; font-size: 20px',
				window.scrollY,
			);
			console.log('%c scrollToY', 'color: blue; font-size: 20px', scrollToY);

			console.log('%c marginTop', 'color: hotpink; font-size: 20px', marginTop);
			console.log('%c scrollToY', 'color: hotpink; font-size: 20px', scrollToY);
			window.scrollTo({ 
				top: scrollToY,
				behavior: 'smooth' });
		}
	};

	// get the active section while scrolling
	const getActiveSection = () => {
		for (let i = sectionIds.length - 1; i >= 0; i--) {
			const section = document.getElementById(sectionIds[i]);
			if (section) {
				const rect = section.getBoundingClientRect();
				if (rect.top <= 120 && rect.bottom >= 120) {
					//set the active link based on the section ID
					setActiveSection(sectionIds[i]);
					break;
				}
			}
		}
	};

	useEffect(() => {
		// replace with useIsVisible? https://barcelonacodeschool.com/how-to-detect-if-element-is-in-view-with-react ???
		const handleScroll = () => {
			if (window.scrollY > 300) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
			//determine the active section while scrolling
			getActiveSection();
		};
		window.addEventListener('scroll', handleScroll);

		//remove the scroll event listener
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, []);

	return (
		<div style={{ background: 'cyan' }}>
			<nav
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100%',
					padding: '1.5rem 0',
				}}
				ref={navRef}
			>
				<div
					className='container'
					style={{
						maxWidth: '1170px',
						background: 'cyan',
						padding: '0 1.5rem',
						marginInline: 'auto',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<div
						className='row'
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							background: 'whitesmoke',
							width: '100%',
						}}
					>
						<div className='logo'>Logo</div>
						<ul
							className='menu-bar'
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: '3rem',
							}}
						>
							{sectionIds.map((sectionId, index) => (
								<li key={index} onClick={() => selectedSection.setSelectedSection(sectionId)/*scrollToSection(sectionId)*/}>
									<Link
										style={
											activeSection === sectionId
												? { background: 'purple' }
												: {}
										}
										to={`/`}
									>
										{sectionId}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
