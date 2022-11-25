import { useRecoilState } from 'recoil';
import { pink } from '../../styles/theme';
import styled from 'styled-components';
import { recycleState } from '../../atom';
import { Fade } from 'react-reveal';

const Recycle = () => {
	const [close, setClose] = useRecoilState(recycleState);
	return (
		<RecycleBlock>
			<Fade bottom big>
				<div className='box-inner-box center'>
					<div className='title-bar'>
						<div className='title-bar-text'> MY INFO</div>
						<div className='title-bar-controls'>
							<button aria-label='Minimize'></button>
							<button aria-label='Maximize'></button>
							<button
								aria-label='Close'
								onClick={() => {
									setClose(!close);
								}}></button>
						</div>
					</div>
					{/* content */}
					<main className='info-inner-box center '></main>
				</div>
			</Fade>
		</RecycleBlock>
	);
};

export default Recycle;

const RecycleBlock = styled.div`
	.box-inner-box {
		position: fixed;
		top: 20px;
		left: 100px;
		flex-direction: column;
		width: 90%;
		height: 90vh;
		border: 1px solid #666;
		z-index: 2;
		/* 콘텐츠부분 */
		.info-inner-box {
			width: 100%;
			height: 100%;
			padding: 10px;
			background: #ddd;
			.table-box {
				width: 420px;
				height: 100%;
				background-color: red;
			}
		}
	}
`;
