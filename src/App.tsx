import { styled } from "styled-components";
import ClockFrame from "./components/clock-frame";
import TopBar from "./components/top-bar";
import Dock from "./components/dock";
import { useState } from "react";
import { screenSizes } from "./screen-sizes";
import MobileDock from "./components/mobile-dock";
import DigitalTimer from "./components/digital-timer";
import DigitalStopwatch from "./components/digital-stopwatch";


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

const MainContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;

	height: 86%;
	width: 80%;

    @media only screen and (min-width: ${screenSizes.laptop}) {
        width: 35%;
    }
`

const ClocksContainer = styled.div`
	display: grid;
	gap: 40px;
	grid-template-columns: repeat(1, 70%);
	justify-content: center;
	align-items: center;

	height: 86%;
	width: 90%;

	overflow: hidden;
	overflow-y: auto;

	@media only screen and (min-width: ${screenSizes.laptop}) {
        grid-template-columns: repeat(4, 20%);
		grid-column-gap: 30px;
		grid-row-gap: 80px;
    }
`

const Wrapper = styled.div`
	display: flex;
	gap: 20px;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	height: 100%;
	width: 100%;

	@media only screen and (min-width: ${screenSizes.laptop}) {
		gap: 40px;
    }
`

const H3 = styled.h3`
	background: linear-gradient(to top, var(--color-007), var(--color-006), var(--color-005));
    filter: drop-shadow(0 0 .1rem var(--color-008));

    border: 1px solid var(--color-007);
    border-radius: 10px;

    margin: 5px;
	padding: 5px;
	text-align: center;

    height: fit-content;
    width: 90%;
    overflow: hidden;

	@media only screen and (min-width: ${screenSizes.laptop}) {
        width: 70%;
    }
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
		<DigitalStopwatch />
	)

	if(STEPS.TIMER === step) currentLayout = (
		<DigitalTimer />
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
		<MainContainer>
			<ClockFrame />
		</MainContainer>
	)

	if(LOCALS.WORLD === local  && STEPS.MAIN === step) currentLocalLayout = (
		<ClocksContainer>
			<Wrapper>
				<H3>São Paulo</H3>
				<ClockFrame timeZone="America/Sao_Paulo" />
			</Wrapper>
			<Wrapper>
				<H3>Tokyo</H3>
				<ClockFrame timeZone="Asia/Tokyo" />
			</Wrapper>
			<Wrapper>
				<H3>Los Angeles</H3>
				<ClockFrame timeZone="America/Los_Angeles" />
			</Wrapper>
			<Wrapper>
				<H3>Paris</H3>
				<ClockFrame timeZone="Europe/Paris" />
			</Wrapper>
			<Wrapper>
				<H3>Ciudad de Mexico</H3>
				<ClockFrame timeZone="America/Mexico_City" />
			</Wrapper>
			<Wrapper>
				<H3>Istanbul</H3>
				<ClockFrame timeZone="Europe/Istanbul" />
			</Wrapper>
			<Wrapper>
				<H3>Moscow</H3>
				<ClockFrame timeZone="Europe/Moscow" />
			</Wrapper>
			<Wrapper>
				<H3>Beijing</H3>
				<ClockFrame timeZone="Asia/Shanghai" />
			</Wrapper>
		</ClocksContainer>
	)

	return (
		<MainContent>
			{currentLayout}
			{currentLocalLayout}
			<Dock step={step} onChange={setStep} />
			<MobileDock step={step} onChange={setStep} />
		</MainContent>
	);
}

export default App;
