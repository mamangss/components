import { RollOnHover } from './components/RollOnHover';
import styles from './App.module.scss';

const App = () => {
	
	return (
		<div className={styles.app}>
			<RollOnHover>
				Roll On Hover
			</RollOnHover>
		</div>
	);
}

export default App;
