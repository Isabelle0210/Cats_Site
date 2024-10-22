import { NavBar } from "./components/NavBar"  // Import the NavBar component
import { ThemeProvider } from "./components/theme-provider"

export default function App (){
    return (
      <ThemeProvider>
        <div className="">
            <NavBar>

            </NavBar>
        </div>
      </ThemeProvider>
    )
}
