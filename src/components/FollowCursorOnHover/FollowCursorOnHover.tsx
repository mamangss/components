import { useEffect, useState } from 'react';
import { IFollowCursorOnHover } from '.';
import styles from './FollowCursorOnHover.module.scss';

const FollowCursorOnHover: React.FC<IFollowCursorOnHover> = ({
	list = [],
}) => {

	const [lastIndex, setLastIndex] = useState<number>(-1);
	const [startPointList, setStartPointList] = useState<number[]>([-1, -1, -1, -1]); // -1 left, 1 right
	const [widthList, setWidthList] = useState<number[]>([0, 0, 0, 0]);

	useEffect(() => {
		setWidthList(list.map(() => 0));
		setStartPointList(list.map(() => -1));
	}, [list]);
	
	// Handlers Start
	const handleMouseHover = (e: any, index: number) => {
		e.stopPropagation();
		
		var tempStartPointList = [...startPointList];
		var tempWidthList = [...widthList];

		// Set start points
		// If the first hovered item is the last item, then set the item's start point to right (1)
		if (lastIndex === -1 && index === list.length - 1) {
			tempStartPointList[index] = 1;
		
		// If the there's a lastIndex, set the start point based from the lastIndex
		} else if (lastIndex !== -1) {
			tempStartPointList[index] = index > lastIndex ? -1 : 1;
			tempStartPointList[lastIndex] = tempStartPointList[index] * -1; // Set the start point as the opposite to look smooth

		} else if (lastIndex === index) {
			tempStartPointList[index] = -1;
		}

		// Set widths
		tempWidthList[index] = tempStartPointList[index] === -1 ? 
			(e.clientX || 0) - (e.target.offsetParent.offsetLeft || 0) // For left starting point
			: (e.target.clientWidth || 0) - ((e.clientX || 0) - (e.target.offsetParent.offsetLeft || 0)); // For right starting point
		
		// Set the last item's width to 0
		if (lastIndex !== index) {
			tempWidthList[lastIndex] = 0;
		}

		setStartPointList(tempStartPointList);
		setWidthList(tempWidthList);
	};

	const handleMouseLeave = (e: any, index: number) => {

		var tempWidthList = [...widthList];
		tempWidthList[index] = 0;
		
		setWidthList(tempWidthList);
		setLastIndex(index);
	}

	const handleMouseClick = (e: any, index: number) => {
		e.stopPropagation();

		var tempWidthList = [...widthList];
		tempWidthList[index] = e.target.clientWidth || 0;

		setWidthList(tempWidthList);
	};
	// Handlers End

	return (
		<div 
			className={styles.list}
		>
			{list.map((item, key) => (
				<div
					key={key}
					className={styles.item}
				>
					<div className={styles.content}>
						{item}
					</div>

					<div 
						className={styles.bgSensor}
						onMouseMove={(e: any) => handleMouseHover(e, key)}
						onMouseLeave={(e: any) => handleMouseLeave(e, key)}
						onMouseDown={(e: any) => handleMouseClick(e, key)}
					></div>

					<div 
						className={styles.bg}
						style={{ 
							width: widthList[key],
							left: startPointList[key] === -1 ? '0px' : 'auto',
							right: startPointList[key] === 1 ? '0px' : 'none',
						}}
					></div>
				</div>
			))}
		</div>
	);
};

export default FollowCursorOnHover;