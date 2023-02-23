import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./context/Auth"
import Home from "./pages/Home"
import Login from "./pages/Login"
import { Private } from "./pages/Private"
import Register from "./pages/Register"

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Private/>}>
            <Route path='/home' element={<Home/>}/>
          </Route>
          <Route path='/' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
