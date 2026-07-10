import { AboutContent } from '../components/about';
import { ExperienceContent } from '../components/experience';
import { ProjectsContent } from '../components/projects';
import { createRef, useContext, useEffect } from 'react';
import SelectionContext from '../context/sectionContext';
import { sectionIds } from '../sections';
import { Container } from '@mui/material';

const sections = [AboutContent,
	ExperienceContent,
	ProjectsContent
];

export default function Home() {
	const refScroll = createRef<HTMLDivElement>();
	//@ts-ignore
	const { selectedSection, isBarNavigation, setIsBarNavigation, setSelectedSection } = useContext(SelectionContext);

	useEffect(() => {
		if (isBarNavigation) {
			const index = getSectionIndex(sectionIds, selectedSection)
			if (index === 0) {
				window.scrollTo(0, 0)
			}

			if (index) {
				refScroll?.current.children[index].scrollIntoView({ block: 'start', behavior: 'smooth' })
			}
			setIsBarNavigation(false)
		}
	}, [selectedSection, refScroll?.current, isBarNavigation])

	const getActiveSection = () => {
		for (let i = sectionIds.length; i >= 0; i--) {
			const section = document.getElementById(sectionIds[i]);

			if (section) {
				const rect = section.getBoundingClientRect();
			
				if (rect.top <= 150 && rect.bottom >= 150) {
					//set the active link based on the section ID
					setSelectedSection(sectionIds[i])
					break;
				}
			}
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			getActiveSection();
		};
		window.addEventListener('scroll', handleScroll);

		//remove the scroll event listener
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, []);

	const handleScrollTop = () => {
		refScroll.current?.scrollIntoView({ behavior: 'smooth' });
	};

	const getSectionIndex = (idList: string[], section: string) => {
		return idList.findIndex((id) =>
			id == section
		);
	};

	return (
		<Container ref={refScroll}>
			{sections.map((Section, i) => (
				<Section key={`${i}-${sectionIds[i]}`} />
			))}
			{/* <Button variant='outlined' onClick={handleScrollTop}>go top</Button> */}
		</Container>
	);
}
