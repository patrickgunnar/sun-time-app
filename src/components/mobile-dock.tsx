import { styled } from "styled-components";
import { screenSizes } from "../screen-sizes";
import { useState } from "react";
import { GrClose, GrMenu } from "react-icons/gr";
import { AiTwotoneHome } from "react-icons/ai";
import { BsStopwatchFill } from "react-icons/bs";
import { RiTimer2Fill } from "react-icons/ri";
import { FaExclamationCircle } from "react-icons/fa";


interface MobileDockProps {
    step: number
    onChange: (step: number) => void
}

const MobileMenuContainer = styled.div`
    transition: all 2s ease-out;

    display: flex;
    justify-content: center;
    align-items: end;

    position: absolute;
    bottom: 0;
    left: 0;

    height: 100%;
    width: 100%;

    @media only screen and (min-width: ${screenSizes.tablet}) {
        display: none;
    }
`

const MobileBlackContainer = styled.div`
    transition: all 2s ease-out;

    background: var(--color-012);

    position: absolute;
    bottom: 0;

    height: 100%;
    width: 100%;
`

const MobileDockMenu = styled.div`
    transition: all 3s ease-out;

    background: linear-gradient(to bottom, var(--color-007), var(--color-006), var(--color-005));
    filter: drop-shadow(0 0 .1rem var(--color-008));

    border: 1px solid var(--color-007);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 5px;
    position: absolute;
    bottom: 8%;

    height: 50%;
    width: 90%;
    overflow: hidden;

    @media only screen and (min-width: ${screenSizes.tablet}) {
        display: none;
    }
`

const Button = styled.button<{isActive?: boolean}>`
    background: ${props => props.isActive ? 'var(--color-012)' : 'transparent'};

    display: flex;
    gap: 5px;
    justify-content: start;
    align-items: center;
    padding: 0% 10%;

    border: none;
    cursor: ${props => props.isActive ? 'default' : 'pointer'};
    color: var(--color-3);
    font-weight: 600;
    font-size: medium;
    text-transform: uppercase;

    height: 25%;
    width: 100%;

    &:focus {
        ${props => props.isActive ? '' : 'background: var(--color-012);'}
    }
`

const DockContent = styled.button`
    background: linear-gradient(to bottom, var(--color-007), var(--color-006), var(--color-005));
    filter: drop-shadow(0 0 .1rem var(--color-008));

    border: 1px solid var(--color-007);
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 5px;

    height: 7%;
    width: 30%;
    overflow: hidden;
`

const MobileDock: React.FC<MobileDockProps> = ({
    step, onChange
}) => {
    // open or close menu
    const [isOpen, setIsOpen] = useState<boolean>(false)

    // on click handler
    const handleOnChange = (step: number) => {
        onChange(step)
        setIsOpen(false)
    }

    return (
        <MobileMenuContainer>
            {
                isOpen && (
                    <MobileBlackContainer onClick={() => setIsOpen(false)} />
                )
            }
            {
                isOpen && (
                    <MobileDockMenu>
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
                    </MobileDockMenu>
                )
            }
            <DockContent onClick={() => setIsOpen(!isOpen)}>
                {
                    !isOpen ? <GrMenu size={20} /> : <GrClose size={20} />
                }
            </DockContent>
        </MobileMenuContainer>
    );
}
 
export default MobileDock;
