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

    margin: 5px;

    height: 4%;
    width: 40%;
    overflow: hidden;

    @media only screen and (min-width: ${screenSizes.laptop}) {
        width: 15%;
    }
`

const Button = styled.button<{isActive?: boolean}>`
    background: ${props => props.isActive ? 'var(--color-012)' : 'transparent'};

    border: none;
    cursor: ${props => props.isActive ? 'default' : 'pointer'};
    color: var(--color-3);
    font-weight: 600;
    font-size: small;
    text-transform: uppercase;

    height: 100%;
    width: 50%;

    &:hover {
        ${props => props.isActive ? '' : 'background: var(--color-012);'}
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
            <Button isActive={step === 0} disabled={step === 0} onClick={() => handleOnChange(0)}>
                Current
            </Button>
            <Button isActive={step === 1} disabled={step === 1} onClick={() => handleOnChange(1)}>
                World
            </Button>
        </TopBarContent>
    );
}
 
export default TopBar;
