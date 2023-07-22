import { styled } from "styled-components";


const OuterFrame = styled.div`
    background:
        radial-gradient(ellipse at top, var(--color-007), var(--color-006), var(--color-005)),
        radial-gradient(ellipse at bottom, var(--color-007), var(--color-006), var(--color-005));
    filter: drop-shadow(0 0 .1rem var(--color-008));

    border: 1px solid var(--color-007);
    border-radius: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    aspect-ratio: 1/1;
    width: 35%;
`

const InnerFrame = styled.div`
    background: radial-gradient(circle at 100%, var(--color-003), var(--color-002));
    filter: drop-shadow(0 0 .1rem var(--color-008));

    border: 2px inset var(--color-007);
    border-radius: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    aspect-ratio: 1/1;
    width: 90%;
`

const ClockBase = styled.div`
    background: radial-gradient(circle at 100%, var(--color-002), var(--color-001));
    filter: drop-shadow(0 0 .1rem var(--color-003));

    border: none;
    border-radius: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    aspect-ratio: 1/1;
    width: 95%;
`

const ClockFrame = () => {
    return (
        <OuterFrame>
            <InnerFrame>
                <ClockBase></ClockBase>
            </InnerFrame>
        </OuterFrame>
    );
}
 
export default ClockFrame;
