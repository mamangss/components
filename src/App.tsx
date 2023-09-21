import { RollOnHover } from './components/RollOnHover';
import styles from './App.module.scss';
import { BlinkSomeOnHover } from './components/BlinkSomeOnHover';
import { FlashlightImageOnHover } from './components/FashlightImageOnHover';
import dummyImg from './assets/images/dummy.jpg';

const App = () => {
	
	return (
		<div className={styles.app}>
			<RollOnHover>
				Roll On Hover
			</RollOnHover>

			<BlinkSomeOnHover
				text={'Blink Some On Hover'}
			/>

			<FlashlightImageOnHover 
				imageUrl={dummyImg}
			/>
		</div>
	);
}

export default App;
