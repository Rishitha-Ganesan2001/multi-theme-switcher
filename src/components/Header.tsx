import { useTheme } from "../context/ThemeContext";
import { NavLink } from "react-router-dom";

const Header = () => {
    const { theme, setTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
         <header className={`w-full py-6 px-8 ${isDark ? 'text-white' : 'bg-white dark:bg-gray-800'} shadow-md transition-all`}>
         <div className={isDark ? '' : 'flex justify-between items-center w-full'}>
         {isDark && 
         (
           <h1 className="text-2xl font-extrabold mb-6  tracking-widest">
            Switchify
          </h1>
        )}
         {!isDark && (
          <h1 className="text-xl font-bold">Switchify</h1>
        )}
         
           <nav className={`flex ${isDark ? 'flex-col gap-4' : 'gap-4'}`}>
           <NavLink to="/" className={({isActive}) => isActive ? "underline" : ""}>Home</NavLink>
           <NavLink to="/about" className={({isActive}) => isActive ? "underline" : ""}>About</NavLink>
           <NavLink to="contact" className={({isActive}) => isActive ? "underline" : ""}>Contact</NavLink>
        </nav>

          <select 
          value={theme}
          onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'multicolor')}
          className="rounded border px-2 py-1 dark:bg-gray-700"
          >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="multicolor">Multicolor</option>
          </select>
          </div>
        </header>
    )
}

export default Header;