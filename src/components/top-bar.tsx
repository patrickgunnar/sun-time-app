import { styled } from "styled-components";
import { screenSizes } from "../screen-sizes";


interface TopBarProps {
    step: number
    onChange: (step: number) => void
}

const TopBarContent = styled.div`
    background: linear-gradient(to top, var(--color-007), var(--color-006), var(--color-005));
    filter: drop-shadow(0 0 .1rem var(--color-008));

    border: 1px solid var(--color-007);
    border-radius: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 5px;
    padding: 10px;

    height: 4%;
    width: 60%;
    overflow: hidden;

    @media only screen and (min-width: ${screenSizes.mobile}) {
        width: 40%;
    }

    @media only screen and (min-width: ${screenSizes.laptop}) {
        width: 15%;
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
    width: 48%;

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

const TopBar: React.FC<TopBarProps> = ({
    step, onChange
}) => {
    // on click handler
    const handleOnChange = (step: number) => {
        onChange(step)
    }

    return (
        <TopBarContent>
            <Button isactive={step === 0} disabled={step === 0} onClick={() => handleOnChange(0)}>
                Current
            </Button>
            <Button isactive={step === 1} disabled={step === 1} onClick={() => handleOnChange(1)}>
                World
            </Button>
        </TopBarContent>
    );
}
 
export default TopBar;
