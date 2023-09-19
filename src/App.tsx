import { RollOnHover } from './components/RollOnHover';
import styles from './App.module.scss';
import { BlinkSomeOnHover } from './components/BlinkSomeOnHover';

const App = () => {
	
	return (
		<div className={styles.app}>
			<RollOnHover>
				Roll On Hover
			</RollOnHover>

			<BlinkSomeOnHover
				text={'Blink Some On Hover'}
			/>
		</div>
	);
}

export default App;
