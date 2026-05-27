import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import SelectionContext from '~/context/sectionContext';
import { sectionIds } from '~/sections';

export const NavBar = () => {
	const [activeSection, setActiveSection] = useState('about');
	const [isScrolled, setIsScrolled] = useState(false);
	const selectedSection = useContext(SelectionContext)

	// get the active section while scrolling
	const getActiveSection = () => {
		for (let i = sectionIds.length - 1; i >= 0; i--) {
			const section = document.getElementById(sectionIds[i]);
			if (section) {
				const rect = section.getBoundingClientRect();
				if (rect.top <= 120 && rect.bottom >= 120) {
					//set the active link based on the section ID
					// setActiveSection(sectionIds[i]);
					// selectedSection.setSectionOnView(sectionIds[i])
					selectedSection.setSelectedSection(sectionIds[i])
					break;
				}
			}
		}
	};

	useEffect(() => {
		// replace with useIsVisible? https://barcelonacodeschool.com/how-to-detect-if-element-is-in-view-with-react ???
		const handleScroll = () => {
			// if (window.scrollY > 300) {
			// 	setIsScrolled(true);
			// } else {
			// 	setIsScrolled(false);
			// }
			// //determine the active section while scrolling
			getActiveSection();
		};
		window.addEventListener('scroll', handleScroll);

		//remove the scroll event listener
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, []);

	return (
		<div>
			<nav
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100%',
					padding: '1.5rem 0',
				}}
			>
				<div
					className='container'
					style={{
						maxWidth: '1170px',
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
								<li key={index} onClick={() => selectedSection.setSelectedSection(sectionId)}>
									<Link
										style={
											selectedSection.selectedSection === sectionId
												? { background: 'hotpink' }
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
