import { IBlinkSomeOnHover } from '.';
import styles from './BlinkSomeOnHover.module.scss';

const BlinkSomeOnHover: React.FC<IBlinkSomeOnHover> = ({
	text = 'Blink Some On Hover'
}) => {

	return (
		<div className={styles.blinkSomeOnHover}>
			{text.split('').map((textChar, key) => {
				const randomNum: number = Math.floor(Math.random() * 10);

				return (
					<span 
						key={key}
						className={
							textChar == ' ' ?
								styles.space :
								randomNum < 4 ? styles[`blinkChar-${randomNum}`] : ''
						}
					>
						{textChar}
					</span>
				)
			})}
		</div>
	);
};

export default BlinkSomeOnHover;