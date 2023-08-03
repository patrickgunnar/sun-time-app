import { styled } from "styled-components";
import { screenSizes } from "../screen-sizes";


interface DigitalClockProps {
    displayValue: string
}

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
        width: 80%;
    }

    @media only screen and (min-width: ${screenSizes.laptop}) {
        width: 45%;
    }

    @media only screen and (min-width: ${screenSizes.xlaptop}) {
        width: 35%;
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

    font-family: 'VT323', monospace;
    font-size: 3rem;
    text-align: center;

    height: 70%;
    width: 70%;
`

const DigitalClock: React.FC<DigitalClockProps> = ({
    displayValue
}) => {
    return (
        <DigitalContainer>
            <DigitalDisplay>
                {displayValue}
            </DigitalDisplay>
        </DigitalContainer>
    );
}
 
export default DigitalClock;
