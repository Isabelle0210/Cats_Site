import { ModeToggle } from "./mode-toggle";

export function NavBar(){
    return(
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="/contato">Contato</a></li>
                <li>
                    <ModeToggle />
                </li>
            </ul>
        </nav>
    )
}