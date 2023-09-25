import { IViewerProps } from '.';
import styles from './Viewer.module.scss';

const Viewer: React.FC<IViewerProps> = ({
	children = <></>,
	className = ''
}) => {

	return (
		<div className={`${styles.viewer} ${className}`}>
			{children}
		</div>
	)
};

export default Viewer;