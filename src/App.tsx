import { styled } from "styled-components";
import ClockFrame from "./components/clock-frame";
import TopBar from "./components/top-bar";
import Dock from "./components/dock";
import { useState } from "react";


enum STEPS {
	MAIN,
	STOPWATCH,
	TIMER,
	ABOUT
}

enum LOCALS {
	CURRENT,
	WORLD
}

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
	// top bar steps
	const [local, setLocal] = useState<number>(0)
	// dock steps
	const [step, setStep] = useState<number>(0)

	// current layout
	let currentLayout = (
		<TopBar step={local} onChange={setLocal} />
	)

	if(STEPS.STOPWATCH === step) currentLayout = (
		<div>
			Stopwatch
		</div>
	)

	if(STEPS.TIMER === step) currentLayout = (
		<div>
			Timer
		</div>
	)

	if(STEPS.ABOUT === step) currentLayout = (
		<div>
			About
		</div>
	)

	// current local layout
	let currentLocalLayout = (
		<></>
	)

	if(LOCALS.CURRENT === local && STEPS.MAIN === step) currentLocalLayout = (
		<ClockFrame />
	)

	if(LOCALS.WORLD === local  && STEPS.MAIN === step) currentLocalLayout = (
		<div>
			World
		</div>
	)

	return (
		<MainContent>
			{currentLayout}
			{currentLocalLayout}
			<Dock step={step} onChange={setStep} />
		</MainContent>
	);
}

export default App;
