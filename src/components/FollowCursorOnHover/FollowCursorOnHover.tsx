import { useEffect, useState } from 'react';
import { IFollowCursorOnHover } from '.';
import styles from './FollowCursorOnHover.module.scss';

const FollowCursorOnHover: React.FC<IFollowCursorOnHover> = ({
	list = [],
}) => {

	const [widthList, setWidthList] = useState<number[]>([0, 0, 0, 0]);
	const [directionList, setDirectionList] = useState<number[]>([-1, -1, -1, -1]); // 1 - to right, -1 to left
	const [lastIndex, setLastIndex] = useState<number>(-1);

	const handleMouseMove = (e: any, index: number) => {
		e.stopPropagation();

		var tempWidthList = [...widthList];
		var tempDirectionList = [...directionList];

		// Item's width = cursor position - offset position of the item
		tempWidthList[index] = (e.clientX || 0) - (e.target.offsetParent.offsetLeft || 0);

		// If the hovered item changed to another item
		if (lastIndex !== -1 && lastIndex !== index) {

			// Setthe previous hovered item's width to zero
			tempWidthList[lastIndex] = 0;

			// Set the item's bg direction based on last index
			tempDirectionList[lastIndex] = lastIndex < index ? 1 : -1;
			tempDirectionList[index] = lastIndex < index ? -1 : 1;
			setDirectionList(tempDirectionList);
		}

		setWidthList(tempWidthList);
		setLastIndex(index);
	};

	const resetLastIndex = () => {
		var tempWidthList = [...widthList];
		tempWidthList[lastIndex] = 0;
		setDirectionList(list.map(() => -1));
		setWidthList(tempWidthList);
		setLastIndex(-1);
	};

	useEffect(() => {
		setWidthList(list.map(() => 0));
		setDirectionList(list.map(() => -1));
	}, [list]);

	return (
		<div 
			className={styles.list}
			onMouseLeave={resetLastIndex}
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
						onMouseMove={(e: any) => handleMouseMove(e, key)}
					></div>

					<div 
						className={styles.bg}
						style={{ 
							width: widthList[key],
							right: directionList[key] == 1 ? '0px' : 'none',
							left: directionList[key] == -1 ? '0px' : 'auto'
						}}
					></div>
				</div>
			))}
		</div>
	);
};

export default FollowCursorOnHover;