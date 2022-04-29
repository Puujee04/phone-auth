import { Link } from "react-router-dom"

export const About = () => {
    return(
        <div className="about-page">
            <h1>About</h1>
            <nav>
                <Link to='/'>About</Link>
            </nav>
            
        </div>
    )
}