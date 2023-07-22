import { styled } from "styled-components";
import { screenSizes } from "../screen-sizes";


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
    width: 90%;

    @media only screen and (min-width: ${screenSizes.laptop}) {
        width: 35%;
    }
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
    position: relative;

    aspect-ratio: 1/1;
    width: 95%;
`

const ClockCircleFrame = styled.div<{ size: number }>`
    background: transparent;
    filter: drop-shadow(0 0 .1rem var(--color-012));

    border: 1px inset var(--color-001);
    border-radius: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    aspect-ratio: 1/1;
    width: ${props => props.size}%;
`

const ClockCircleFull = styled.div`
    background: radial-gradient(circle at 100%, var(--color-001), var(--color-002));
    filter: drop-shadow(0 0 .1rem var(--color-003));

    border: 1px solid var(--color-001);
    border-radius: 100%;

    height: 20%;
    width: 20%;
`

const ClockHourContainer = styled.div`
    background: transparent;

    border: none;
    border-radius: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

    aspect-ratio: 1/1;
    width: 95%;
`

const ClockHour = styled.span<{ rotate?: number, end?: number }>`
    background: transparent;
    border: none;

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    transform: 
        rotate(${props => props.rotate ?? 0}deg) 
        translate(0%, ${props => props.end ?? 0}%)
    ;

    position: absolute;

    height: 1.5%;
    width: 100%;
`

const ClockHourFrame = styled.div<{width: number}>`
    background: linear-gradient(to top, var(--color-009), var(--color-010), var(--color-011));
    filter: drop-shadow(0 0 .1rem var(--color-003));

    border: 1px inset var(--color-001);
    border-radius: 30px;

    height: 100%;
    width: ${props => props.width}%;
`

const ClockPointer = styled.div<{ 
    height: number, width: number, bottom: number, rotate?: number
 }>`
    background: linear-gradient(to top, var(--color-007), var(--color-006), var(--color-005));
    filter: drop-shadow(0 0 .1rem var(--color-004));

    border: 1px solid var(--color-007);
    border-radius: 100%;
    transform-origin: bottom;
    transform: rotate(${props => props.rotate}deg);

    position: absolute;
    bottom: ${props => props.bottom}%;

    height: ${props => props.height}%;
    width: ${props => props.width}%;
`

const ClockFrame = () => {
    return (
        <OuterFrame>
            <InnerFrame>
                <ClockBase>
                    <ClockCircleFrame size={80}>
                        <ClockCircleFrame size={60}>
                            <ClockPointer height={120} width={.7} bottom={12} />
                            <ClockPointer height={73} width={1.15} bottom={50} rotate={60} />
                            <ClockPointer height={63} width={1.25} bottom={50} rotate={90} />
                            <ClockCircleFull />
                        </ClockCircleFrame>
                    </ClockCircleFrame>
                    <ClockHourContainer>
                        <ClockHour>
                            <ClockHourFrame width={4} />
                            <ClockHourFrame width={4} />
                        </ClockHour>
                        <ClockHour rotate={90} end={50}>
                            <ClockHourFrame width={4} />
                            <ClockHourFrame width={4} />
                        </ClockHour>
                        <ClockHour rotate={120} end={30}>
                            <ClockHourFrame width={4} />
                            <ClockHourFrame width={4} />
                        </ClockHour>
                        <ClockHour rotate={150} end={18}>
                            <ClockHourFrame width={4} />
                            <ClockHourFrame width={4} />
                        </ClockHour>
                        <ClockHour rotate={210} end={-17}>
                            <ClockHourFrame width={4} />
                            <ClockHourFrame width={4} />
                        </ClockHour>
                        <ClockHour rotate={240} end={-30}>
                            <ClockHourFrame width={4} />
                            <ClockHourFrame width={4} />
                        </ClockHour>
                    </ClockHourContainer>
                </ClockBase>
            </InnerFrame>
        </OuterFrame>
    );
}
 
export default ClockFrame;
