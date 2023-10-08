import { IRandomCharOnHoverProps } from '.';
import styles from './RandomCharOnHover.module.scss';

const RandomCharOnHover: React.FC<IRandomCharOnHoverProps> = ({
	text = '',
	randomChars = '#?0XZ8'
}) => {

	const handleHover = () => {
		text.split('').map((textChar, textCharIndex) => {
			const delay: number = textCharIndex * 50; // Delay of showing letters per textChar

			// Set the value of the char from the random chars with time
			randomChars.split('').map((randomChar, randomCharIndex) => {
				setTimeout(() => {
					document.querySelector(`#randomChar-${textCharIndex}`)!.innerHTML = randomChar;
				}, ((randomCharIndex + 1) * 100) + delay);
			});

			// Set the value to old
			setTimeout(() => {
				document.querySelector(`#randomChar-${textCharIndex}`)!.innerHTML = textChar;
			}, (randomChars.length) * 100 + delay);
		});
	};

	return (
		<div 
			className={styles.randomCharOnHover}
			onMouseOver={handleHover}
		>
			{text.split('').map((char, key) => (
				<span
					key={key}
					id={`randomChar-${key}`}
					className={styles.char}
				>
					{char}
				</span>
			))}
		</div>
	);
};

export default RandomCharOnHover;