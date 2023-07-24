import { styled } from "styled-components";
import { screenSizes } from "../screen-sizes";
import useDigital from "../hooks/useDigital";
import { useEffect } from "react";


interface DigitalClockProps {}

const DigitalContainer = styled.div`
    background: linear-gradient(to top, var(--color-007), var(--color-006), var(--color-005));
    filter: drop-shadow(0 0 .1rem var(--color-008));

    border: 1px solid var(--color-007);
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 30%;
    width: 80%;

    @media only screen and (min-width: ${screenSizes.mobile}) {
        width: 60%;
    }

    @media only screen and (min-width: ${screenSizes.laptop}) {
        width: 35%;
    }

    @media only screen and (min-width: ${screenSizes.xlaptop}) {
        width: 25%;
    }
`

const DigitalDisplay = styled.div`
    background: radial-gradient(circle at 100%, var(--color-001), var(--color-002));
    filter: drop-shadow(0 0 .1rem var(--color-003));

    border: 1px solid var(--color-001);
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 70%;
    width: 70%;
`

const DigitalClock: React.FC<DigitalClockProps> = () => {
    // get digital hook
    const { reset, start, stop, time } = useDigital()

    useEffect(() => {}, [reset, start, stop, time])

    return (
        <DigitalContainer>
            <DigitalDisplay></DigitalDisplay>
        </DigitalContainer>
    );
}
 
export default DigitalClock;
