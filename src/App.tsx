import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import { useTheme } from './context/ThemeContext';


function App() {
  const { theme } = useTheme();
  

  return (
    <div
  className={`min-h-screen transition-all duration-500 ease-in-out ${
    theme === 'dark'
      ? 'bg-gray-900 font-bold text-white flex'
      : theme === 'multicolor'
      ? 'bg-gradient-to-br from-pink-300 via-purple-200 to-blue-300 text-purple-900 font-[Pacifico]'
      : 'bg-gray-50 text-gray-800 font-sans'
  }`}
>
   {theme === 'dark' && (
    <aside className="w-64 bg-gray-900 p-6 flex flex-col gap-6 text-white text-lg font-serif">
      <Header />
    </aside>
  )}
   <main className="flex-1 p-6 max-w-6xl mx-auto">
    {theme !== 'dark' && <Header />}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
</div>
  )
 
  }

export default App
