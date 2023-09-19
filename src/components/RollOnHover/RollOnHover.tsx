import { useEffect, useRef, useState } from 'react';
import { IRollOnHoverProps } from '.';
import styles from './RollOnHover.module.scss';

const RollOnHover: React.FC<IRollOnHoverProps> = ({
	className = '',
	contentClassName = '',
	children = undefined
}) => {

	const contentRef = useRef<HTMLDivElement>(null);
	const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);

	useEffect(() => {
		setMaxHeight(contentRef?.current?.offsetHeight);
	}, [children]);

	return (
		<div 
			className={`${styles.rollOnHover} ${className}`}
			style={{ maxHeight }}
		>
			<div 
				ref={contentRef} 
				className={`${styles.content} ${contentClassName}`}
			>
				{children}
			</div>

			<div className={`${styles.content} ${contentClassName}`}>
				{children}
			</div>
		</div>
	);
};

export default RollOnHover;