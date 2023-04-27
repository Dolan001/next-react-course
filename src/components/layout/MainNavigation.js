import { Link } from "react-router-dom"
import classes from "./MainNavigation.module.css"

function MainNavigation(props) {
    return (
        <header className={classes.header}>
            <h2 className={classes.logo}> React Meetup</h2>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Meetups</Link></li>
                        <li><Link to="/new-meetup">New Meetup</Link></li>
                        <li><Link to="/favorites">Favorites</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default MainNavigation