import { ModeToggle } from "./mode-toggle";

export function NavBar(){
    return(
        <nav className="p-5 
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        rounded-b-lg
        ">
            <ul className="flex flex-row justify-between text-white text-lg font-semibold ">
                <li><a href="/"
                    className="hover:text-violet-950 
                    transition-all duration-300
                    transform hover:scale-105"
                >React</a></li>
                <li><a href="/sobre"
                className="hover:text-violet-950 
                transition-all duration-300
                transform hover:scale-105"
                >Next</a></li>
                <li
                className="hover:text-violet-950 
                transition-all duration-300
                transform hover:scale-105"
                ><a href="/sobre">CSS</a></li>
                <li
                className="hover:text-violet-950 
                transition-all duration-300
                transform hover:scale-105"
                ><a href="/contato">JavaScript/TypeScript</a></li>
                <li
                className="hover:text-violet-950 
                transition-all duration-300
                transform hover:scale-105"
                ><a href="">Python</a></li>
                <li
                className="hover:text-violet-950 
                transition-all duration-300
                transform hover:scale-105"
                ><a href="">Node.js</a></li>
                <li>
                    <ModeToggle />
                </li>
            </ul>
        </nav>
    )
}