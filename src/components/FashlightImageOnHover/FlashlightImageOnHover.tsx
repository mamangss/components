import { useRef } from 'react';
import { IFlashlightImageOnHoverProps } from '.';
import styles from './FlashlightImageOnHover.module.scss';

const FlashlightImageOnHover: React.FC<IFlashlightImageOnHoverProps> = ({
	imageUrl = undefined
}) => {

	const cursorCircleRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: any) => {

		if (cursorCircleRef.current && containerRef.current) {
			const posX = e.clientX - containerRef.current.offsetLeft - (containerRef.current.clientWidth * 3 / 2);
			const posY = e.clientY - containerRef.current.offsetTop - (containerRef.current.clientHeight * 3 / 2);

			cursorCircleRef.current!.style.transform = `translate(${posX}px, ${posY}px)`;
		}
	};

	return (
		<div 
			ref={containerRef}
			className={styles.flashlightImageOnHover}
			onMouseMove={handleMouseMove}
		>
			<div className={styles.title}>
				Flashlight Image On Hover
			</div>

			<div 
				className={styles.image}
				style={{ backgroundImage: `url(${imageUrl})` }}
			>
				<div ref={cursorCircleRef} className={styles.cursor}></div>
			</div>
		</div>
	);
};

export default FlashlightImageOnHover;