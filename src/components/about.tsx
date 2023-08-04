import { styled } from "styled-components";
import { screenSizes } from "../screen-sizes";


const AboutConntainer = styled.div`
    background: linear-gradient(to top, var(--color-007), var(--color-006), var(--color-005));
    filter: drop-shadow(0 0 .1rem var(--color-008));

    border: 1px solid var(--color-007);
    border-radius: 10px;
    padding: 15px;
    margin-top: 25%;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 65%;
    width: 80%;

    @media only screen and (min-width: ${screenSizes.mobile}) {
        width: 80%;
    }

    @media only screen and (min-width: ${screenSizes.tablet}) {
        margin-top: 15%;
    }

    @media only screen and (min-width: ${screenSizes.laptop}) {
        margin-top: 5%;
        width: 45%;
    }
`

const AboutWrapper = styled.div`
    background: radial-gradient(circle at 100%, var(--color-001), var(--color-002));
    filter: drop-shadow(0 0 .1rem var(--color-003));

    border: 1px solid var(--color-001);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 5px;

    height: 90%;
    width: 99%;

    @media only screen and (min-width: ${screenSizes.tablet}) {
        margin: 30px;
        padding: 15px;

        height: 80%;
        width: 70%;
    }
`

const TextContent = styled.div`
    font-family: inherit;
    font-size: large;
    text-align: start;
    white-space: pre-line;

    height: 90%;
    width: 95%;

    overflow: hidden;
    overflow-y: auto;
`

const AboutPage = () => {
    return (
        <AboutConntainer>
            <AboutWrapper>
                <h3>SunTime</h3>
                <TextContent>
                    <p>
                        SunTime is a beautifully designed clock application built with React.js, styled-components, and Luxon libraries. It offers a sophisticated and intuitive user interface to display the user's local time, as well as the current time in various cities around the world. Additionally, the app features a versatile stopwatch and timer functionality for precision time management.
                    </p>
                    <h5>
                        Key Features:
                    </h5>
                    <ul>
                        <li>
                            <strong>World Clock: </strong>
                            SunTime provides users with the convenience of viewing the current time in multiple cities across different time zones.
                        </li>
                        <li>
                            <strong>Local Time Display: </strong>
                            Upon opening the app, SunTime elegantly displays the user's local time in a visually appealing format. The current time is updated in real-time, ensuring accuracy and precision.
                        </li>
                        <li>
                            <strong>Stopwatch: </strong>
                            The stopwatch feature in SunTime allows users to time events, activities, or workouts with ease. The beautifully designed stopwatch interface showcases lap times and elapsed time, enabling users to keep track of their performance.
                        </li>
                        <li>
                            <strong>Timer: </strong>
                            With the timer functionality, SunTime assists users in managing tasks and activities efficiently. Users can set custom countdown durations, and the app provides visual notification when the timer expires.
                        </li>
                        <li>
                            <strong>Intuitive User Interface: </strong>
                            SunTime boasts a minimalist and elegant user interface that prioritizes ease of use and a pleasant experience. The app's responsive design ensures seamless usability on both desktop and mobile devices.
                        </li>
                    </ul>
                    <h5>
                        Technologies Used:
                    </h5>
                    <ul>
                        <li>
                            <strong>React.js:</strong> For building the interactive and dynamic user interface.
                        </li>
                        <li>
                            <strong>Styled-components:</strong> For maintaining a modular and maintainable CSS codebase.
                        </li>
                        <li>
                            <strong>Luxon:</strong> For accurate and reliable time manipulation and formatting.
                        </li>
                    </ul>
                    <h5>
                        Conclusion:
                    </h5>
                    <p>
                        SunTime stands out as an elegant and smart clock application, combining the power of React.js, styled-components, and Luxon libraries to deliver a delightful and practical user experience. Whether it's for coordinating international meetings, tracking time-sensitive tasks, or simply staying organized, SunTime is the ultimate timekeeping companion for users who appreciate both style and functionality.
                    </p>
                </TextContent>
            </AboutWrapper>
        </AboutConntainer>
    );
}
 
export default AboutPage;
