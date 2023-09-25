import { RollOnHover } from './components/RollOnHover';
import styles from './App.module.scss';
import { BlinkSomeOnHover } from './components/BlinkSomeOnHover';
import { FlashlightImageOnHover } from './components/FashlightImageOnHover';
import dummyImg from './assets/images/dummy.jpg';
import { FollowCursorOnHover } from './components/FollowCursorOnHover';
import { Viewer } from './components/Viewer';

const App = () => {
	
	return (
		<div className={styles.app}>

			<div className={styles.viewerList}>
				<Viewer>
					<RollOnHover>
						Roll On Hover
					</RollOnHover>
				</Viewer>

				<Viewer>
					<BlinkSomeOnHover
						text={'Blink Some On Hover'}
					/>
				</Viewer>

				<Viewer>
					<FlashlightImageOnHover 
						imageUrl={dummyImg}
					/>
				</Viewer>

				<Viewer>
					<FollowCursorOnHover 
						list={['Follow', 'Cursor', 'On', 'Hover']}
					/>
				</Viewer>
			</div>
			
		</div>
	);
}

export default App;
