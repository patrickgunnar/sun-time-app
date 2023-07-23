import { styled } from "styled-components";
import { screenSizes } from "../screen-sizes";
import { AiTwotoneHome } from "react-icons/ai";
import { BsStopwatchFill } from "react-icons/bs";
import { RiTimer2Fill } from "react-icons/ri";
import { FaExclamationCircle } from "react-icons/fa";

interface DockProps {
    step: number
    onChange: (step: number) => void
}

const DockContent = styled.div`
    background: linear-gradient(to bottom, var(--color-007), var(--color-006), var(--color-005));
    filter: drop-shadow(0 0 .1rem var(--color-008));

    border: 1px solid var(--color-007);
    border-radius: 10px;

    display: none;
    justify-content: center;
    align-items: center;

    margin: 5px;

    height: 7%;
    width: 80%;
    overflow: hidden;

    @media only screen and (min-width: ${screenSizes.tablet}) {
        display: flex;
    }

    @media only screen and (min-width: ${screenSizes.laptop}) {
        width: 60%;
    }
`

const Button = styled.button<{isActive?: boolean}>`
    background: ${props => props.isActive ? 'var(--color-012)' : 'transparent'};

    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;

    border: none;
    cursor: ${props => props.isActive ? 'default' : 'pointer'};
    color: var(--color-3);
    font-weight: 600;
    font-size: medium;
    text-transform: uppercase;

    height: 100%;
    width: 25%;

    &:hover {
        ${props => props.isActive ? '' : 'background: var(--color-012);'}
    }
`

const Dock: React.FC<DockProps> = ({
    step, onChange
}) => {
    // on click handler
    const handleOnChange = (step: number) => {
        onChange(step)
    }

    return (
        <DockContent>
            <Button isActive={step === 0} disabled={step === 0} onClick={() => handleOnChange(0)}>
                <AiTwotoneHome size={20} />
                Main
            </Button>
            <Button isActive={step === 1} disabled={step === 1} onClick={() => handleOnChange(1)}>
                <BsStopwatchFill size={20} />
                Stopwatch
            </Button>
            <Button isActive={step === 2} disabled={step === 2} onClick={() => handleOnChange(2)}>
                <RiTimer2Fill size={20} />
                Timer
            </Button>
            <Button isActive={step === 3} disabled={step === 3} onClick={() => handleOnChange(3)}>
                <FaExclamationCircle size={20} />
                About
            </Button>
        </DockContent>
    );
}

export default Dock;
