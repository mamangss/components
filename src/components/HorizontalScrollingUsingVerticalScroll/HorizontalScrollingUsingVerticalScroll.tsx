import { useEffect, useRef, useState } from 'react';
import { IHorizontalScrollingUsingVerticalScrollProps } from '.';
import styles from './HorizontalScrollingUsingVerticalScroll.module.scss';

const HorizontalScrollingUsingVerticalScroll: React.FC<IHorizontalScrollingUsingVerticalScrollProps> = ({
	children = <></>
}) => {

	const contentRef = useRef<HTMLDivElement>(null);
	const [verticalScrollHeight, setVerticalScrollHeight] = useState<number>(0);

	const handleScroll: React.EventHandler<React.UIEvent<HTMLDivElement>> = (e) => {
		// Get the scrollTop of the verticalScroll and assign it to the scrollLeft of the content
		contentRef.current!.children[0].scrollLeft = e.currentTarget.scrollTop || 0;
	};
	
	// Assign the verticalScroll's height from the content's width
	useEffect(() => {
		setVerticalScrollHeight(contentRef?.current?.children[0].scrollWidth  || 0);
	}, [contentRef, children]);

	return (
		<div 
			className={styles.container}
			onScroll={handleScroll}
		>
			{/* You can add some contents here */}

			<div 
				className={styles.verticalScroll} 
				style={{
					height: verticalScrollHeight,
					minHeight: verticalScrollHeight
				}}
			>
				<div className={styles.content} ref={contentRef}>
					{children}
				</div>
			</div>

			{/* You can add some contents here */}
		</div>
	);
};

export default HorizontalScrollingUsingVerticalScroll;