import { Link } from "react-router-dom"

export const Home =() => {
    return(<div className="Home">
        <h1>Home</h1>
        <nav>
                <Link to='/about'>About</Link> 
        </nav>
    </div>)
}