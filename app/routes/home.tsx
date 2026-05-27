import type { Route } from './+types/home';
import { AboutContent } from '~/components/about';
import { ExperienceContent } from '~/components/experience';
import { ProjectsContent } from '~/components/projects';
import { createRef, useContext, useEffect, useRef, useState } from 'react';
import SelectionContext from '~/context/sectionContext';
import { sectionIds } from '~/sections';

const sections = [AboutContent, ExperienceContent, ProjectsContent];

export function meta({}: Route.MetaArgs) {
	return [{ title: 'Ele App' }, { name: 'description', content: 'Home app' }];
}

export default function Home() {
	const refScroll = createRef<HTMLDivElement>();
	const selectedSection = useContext(SelectionContext);
	const refSections = createRef<any[]>();
	refSections.current = [];




  useEffect(() => {
    const index = getSectionIndex(sectionIds, selectedSection.selectedSection)
	console.log('index', index)
	console.log('selectedSection', selectedSection)
    if (index) {
      refScroll?.current.children[index].scrollIntoView()
    }
  },[selectedSection.selectedSection, refSections.current, refScroll?.current])

  	const getActiveSection = () => {
		for (let i = sectionIds.length - 1; i >= 0; i--) {
			const section = document.getElementById(sectionIds[i]);
			if (section) {
				const rect = section.getBoundingClientRect();
				if (rect.top <= 120 && rect.bottom >= 120) {
					//set the active link based on the section ID
					// setActiveSection(sectionIds[i]);
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
			//determine the active section while scrolling
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
		<div ref={refScroll}>
			{sections.map((Section, i) => (
				<div id={sectionIds[i]}>
					<Section key={i} />
				</div>
			))}
			<button onClick={handleScrollTop}>go top</button>
		</div>
	);
}
