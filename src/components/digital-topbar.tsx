import { styled } from "styled-components";
import { screenSizes } from "../screen-sizes";
import useDigital from "../hooks/useDigital";
import { useRef } from "react";


interface DigitalTopbarProps {
    isTimer?: boolean
}

const DigitalContainer = styled.div<{ timer?: boolean }>`
    background: linear-gradient(to top, var(--color-007), var(--color-006), var(--color-005));
    filter: drop-shadow(0 0 .1rem var(--color-008));

    border: 1px solid var(--color-007);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    margin: 5px;
    padding: 10px;

    height: ${props => props.timer ? 8 : 4}%;
    width: 70%;
    overflow: hidden;

    @media only screen and (min-width: ${screenSizes.mobile}) {
        width: 50%;
    }

    @media only screen and (min-width: ${screenSizes.laptop}) {
        width: 25%;
    }
`

const Button = styled.button<{isactive?: boolean}>`
    background: ${props => props.isactive ? 'var(--color-012)' : 'transparent'};

    border: none;
    border-radius: 5px;
    cursor: ${props => props.isactive ? 'default' : 'pointer'};
    color: var(--color-3);
    font-weight: 600;
    font-size: x-small;
    text-transform: uppercase;

    height: 100%;
    width: 30%;

    &:hover {
        ${props => props.isactive ? '' : 'background: var(--color-012);'}
    }

    @media only screen and (min-width: ${screenSizes.tablet}) {
        font-size: medium;
    }

    @media only screen and (min-width: ${screenSizes.xtablet}) {
        font-size: large;
    }

    @media only screen and (min-width: ${screenSizes.laptop}) {
        font-size: small;
    }

    @media only screen and (min-width: ${screenSizes.desktop}) {
        font-size: x-large;
    }
`

const DigitalInput = styled.input`
    background: radial-gradient(circle at 100%, var(--color-001), var(--color-002));
    filter: drop-shadow(0 0 .1rem var(--color-003));

    border: 1px solid var(--color-001);
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 5px;
    text-align: center;
    color: var(--color-009);

    height: 40%;
    width: 50%;

    @media only screen and (min-width: ${screenSizes.tablet}) {
        width: 40%;
    }
`

const BtnContainer = styled.div<{ timer?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: ${props => props.timer ? 50 : 100}%;
    width: 100%;
`

const DigitalTopbar: React.FC<DigitalTopbarProps> = ({
    isTimer
}) => {
    // get digital hook
    const { setReset, setStart, setStop, setTime } = useDigital()
    // ref for input time
    const inputTimeRef = useRef<HTMLInputElement>(null)

    // input time handler
    const handleInputTime = () => {
        if(inputTimeRef.current?.value) setTime(inputTimeRef.current?.value)
    }

    return (
        <DigitalContainer timer={isTimer}>
            {
                isTimer && (
                    <DigitalInput placeholder="Insert time" type="time" ref={inputTimeRef} onChange={handleInputTime} />
                )
            }
            <BtnContainer timer={isTimer}>
                <Button onClick={() => setReset(true)}>Reset</Button>
                <Button onClick={() => setStart(true)}>Start</Button>
                <Button onClick={() => setStop(true)}>Stop</Button>
            </BtnContainer>
        </DigitalContainer>
    );
}
 
export default DigitalTopbar;
