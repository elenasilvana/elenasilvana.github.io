import type { Route } from './+types/home';
import { AboutContent } from '~/components/about';
import { ExperienceContent } from '~/components/experience';
import { ProjectsContent } from '~/components/projects';
import { createRef, useContext, useEffect, useRef } from 'react';
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

	const handleScrollTop = () => {
		refScroll.current?.scrollIntoView({ behavior: 'smooth' });
	};

	const getSectionIndex = (idList: string[], section: string) => {
		return idList.findIndex((id) =>
      id == section
    );
	};

  useEffect(() => {
    const index = getSectionIndex(sectionIds, selectedSection.selectedSection)
    if (index) {
      refScroll?.current.children[index].scrollIntoView()
    }
    console.log('index', index)
     console.log('selectedSection', selectedSection)
  },[selectedSection.selectedSection, refSections.current, refScroll?.current])

	// useEffect(() => {
	// 	const el = refScroll.current?.children;
	// 	//console.log('%c ref', 'color: hotpink; font-size: 20px', el);
	// }, [refScroll.current]);

	// const addToRef = (el: any) => {
	// 	if (el && refSections && !refSections.current?.includes(el)) {
	// 		refSections.current!.push(el);
	// 	}
	// 	console.log('%c sections', 'color: peru;', refSections);
	// };

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
