import { RollOnHover } from './components/RollOnHover';
import styles from './App.module.scss';
import { BlinkSomeOnHover } from './components/BlinkSomeOnHover';
import { FlashlightImageOnHover } from './components/FashlightImageOnHover';
import dummyImg from './assets/images/dummy.jpg';
import { FollowCursorOnHover } from './components/FollowCursorOnHover';
import { Viewer } from './components/Viewer';
import { HighlightParagraphOnScroll } from './components/HighlightParagraphOnScroll';
import { HorizontalScrollingUsingVerticalScroll } from './components/HorizontalScrollingUsingVerticalScroll';
import { RandomCharOnHover } from './components/RandomCharOnHover';

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

				<Viewer>
					<HighlightParagraphOnScroll
						paragraph='Highlight Paragraph On Scroll. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis mi mauris, eu venenatis erat fermentum vel.'
						readerLineOffsetHeight={150}
						paragraphClassName={styles.hposParagraph}
					/>
				</Viewer>

				<Viewer className={styles.hsuvsViewer}>
					<HorizontalScrollingUsingVerticalScroll>
						<div className={styles.hsuvsList}>
							{Array.from({ length: 10 }).map((_, key) => (
								<div className={styles.hsuvsItem} key={key}>
									Horizontal Scrolling Using Vertical Scroll
								</div>
							))}
						</div>
					</HorizontalScrollingUsingVerticalScroll>
				</Viewer>

				<Viewer>
					<RandomCharOnHover text='RANDOM CHAR ON HOVER' />
				</Viewer>
			</div>

		</div>
	);
}

export default App;
