import React from "react";
import s from './Error404.module.css'
import {PATH} from "../routes/Routes";
import {NavLink, Redirect, Route} from "react-router-dom";

function Error404() {


    return (
        <div className={s.error}>
            <div className={s.wrapper}>
                <img src={'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQ1M3B4IiBoZWlnaHQ9IjE1NXB4IiB2aWV3Qm94PSIwIDAgNDUzIDE1NSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNDUzIDE1NSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQoJPGRlZnM+DQoJCTxwYXRoIGlkPSJTVkdJRF8zXyIgZD0iTTM5My41MjIsMzUuMDE4bC0zNS4xMDksNTYuMzYxaDM1LjEwOVYzNS4wMTh6IE00MzMuNDgzLDEyNi4yNTZ2MjguMTgxaC0zOS45NjF2LTI4LjE4MUgzMTkuODR2LTMwLjk1DQoJCQlsNTguNDM4LTk0LjkzNWg1NS4yMDV2OTEuMDA4aDE4LjcxdjM0Ljg3N0g0MzMuNDgzeiBNNzMuODIzLDM1LjAxOGwtMzUuMTEsNTYuMzYxaDM1LjExVjM1LjAxOHogTTExMy43ODMsMTI2LjI1NnYyOC4xODFoLTM5Ljk2DQoJCQl2LTI4LjE4MUgwLjEzOHYtMzAuOTVsNTguNDQtOTQuOTM1aDU1LjIwNXY5MS4wMDhoMTguNzA4djM0Ljg3N0gxMTMuNzgzeiIvPg0KCTwvZGVmcz4NCgk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8zXyIgIG92ZXJmbG93PSJ2aXNpYmxlIiBmaWxsPSIjRUY2MzU3Ii8+DQo8Y2lyY2xlIGZpbGw9IiNFRjYzNTciIGN4PSIyMjgiIGN5PSI3NyIgcj0iNzciLz4NCgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTcyLjk2MywxMTAuODQ3bDMuOTMsNC4yNDJjMC4zOTQsMC40MjUsMS4wMzMsMC40MjUsMS40MjYsMGMwLjM5NC0wLjQyNSwwLjM5NC0xLjExMywwLTEuNTRsLTEuMjgxLTEuNTY5DQoJCWM0LjI2MS0zLjk5OCw4Ljc4LTcuMzczLDEzLjY2My0xMC4yNTdjMC41MjksMi4xMjksMS42MjYsNC4zODEsMy40MDQsNS41MjFjMy43MzcsMi4zOTcsOC43NjksMC42NzEsMTAuOTkxLTMuMzYzDQoJCWMwLDAsMi40MjctNS42ODYsMy43MTQtNy43NDFjMS4yODYtMi4wNTQsMy43MjEtMy4wNSw0LjY2NS0zLjI0NWM0LjgyMi0wLjk5Niw5Ljc1NS0xLjUwOSwxNC43MzctMS41MDkNCgkJYzE4Ljg4NCwwLDM3LjA0OCw3LjM0LDUxLjI2OCwyMC42ODJsLTEuMzc1LDEuNDgyYy0wLjM5NSwwLjQyNS0wLjM5NSwxLjExNSwwLjAwMSwxLjU0YzAuMzkzLDAuNDI1LDEuMDMxLDAuNDI1LDEuNDI1LDANCgkJbDMuOTMtNC4yNDJjMC4zOTUtMC40MjYsMC4zOTUtMS4xMTUsMC0xLjUzOWMtMC4xOTYtMC4yMTMtMC40NTQtMC4zMTgtMC43MTItMC4zMThzLTAuNTE2LDAuMTA1LTAuNzE0LDAuMzE4bC0xLjEyMywxLjIxMw0KCQljLTE0LjYwMy0xMy43NTEtMzMuMjgxLTIxLjMxMi01Mi42OTktMjEuMzEyYy0xOS40MTgsMC0zOC4wMjIsNy40ODMtNTIuNjI1LDIxLjIzM2wtMS4xOTYtMS4xMzUNCgkJYy0wLjE5OC0wLjIxMy0wLjQ1Ni0wLjMxOC0wLjcxNC0wLjMxOHMtMC41MTcsMC4xMDUtMC43MTMsMC4zMThDMTcyLjU2OSwxMDkuNzMxLDE3Mi41NjksMTEwLjQyMSwxNzIuOTYzLDExMC44NDciLz4NCjwvc3ZnPg0K'}/>
                <h1>ПЕЙДЖ НОТ ФАУНД</h1>
                <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.active}>
                    <button>ГОУ ТУ МЭЙН</button>
                </NavLink>


            </div>
        </div>
    );
}

export default Error404;
