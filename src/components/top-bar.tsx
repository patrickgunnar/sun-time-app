import { styled } from "styled-components";
import { screenSizes } from "../App";


const TopBarContent = styled.div`
    background: linear-gradient(to top, var(--color-007), var(--color-006), var(--color-005));
    filter: drop-shadow(0 0 .1rem var(--color-008));

    border: 1px solid var(--color-007);
    border-radius: 10px;

    margin: 5px;

    height: 4%;
    width: 40%;

    @media only screen and (min-width: ${screenSizes.laptop}) {
        width: 15%;
    }
`

const TopBar = () => {
    return (
        <TopBarContent></TopBarContent>
    );
}
 
export default TopBar;
