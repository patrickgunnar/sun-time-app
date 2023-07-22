import { styled } from "styled-components";
import ClockFrame from "./components/clock-frame";
import TopBar from "./components/top-bar";
import Dock from "./components/dock";

const MainContent = styled.div`
	background:
		var(--_g-001), var(--_g-001) calc(3 * var(--size-001)) calc(var(--size-001) / 2),
		var(--_g-002), var(--_g-002) calc(3 * var(--size-001)) calc(var(--size-001) / 2),
		conic-gradient(
			var(--color-002) 63.43deg, var(--color-001) 0 116.36deg,
			var(--color-002) 0 180deg, var(--color-001) 0 243.43deg,
			var(--color-002) 0 296.15deg, var(--color-001) 0
		);
	background-size: calc(2 * var(--size-001)) var(--size-001);

	display: flex;
	flex-direction: column;
	justify-content: space-between; 
	align-items: center; 

	height: 100vh; 
	width: 100vw; 
`

function App() {
	return (
		<MainContent>
			<TopBar />
			<ClockFrame></ClockFrame>
			<Dock />
		</MainContent>
	);
}

export default App;
