import logo from "./logo.png";

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={logo}/>
            <h1>my travel journal.</h1>
        </div>
    )
}