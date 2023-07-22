import { styled } from "styled-components";


const DockContent = styled.div`
    background: linear-gradient(to bottom, var(--color-007), var(--color-006), var(--color-005));
    filter: drop-shadow(0 0 .1rem var(--color-008));

    border: 1px solid var(--color-007);
    border-radius: 10px;

    margin: 5px;

    height: 7%;
    width: 60%;
`

const Dock = () => {
    return (
        <DockContent></DockContent>
    );
}

export default Dock;
