import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import Footer from './components/footer'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from './globle'
import CarPage from './pages/carpage'
import PostCar from './pages/postcar'
import Tracks from './pages/Tracks'
import Welcome from './pages/welcome'
function App() {
  const [cars, Setcars] = useState([])
  useEffect(() => {
    async function getCars() {
      let res = await axios.get(`${BASE_URL}`)
      console.log(res.data)
      Setcars(res.data)
    }
    getCars()
    return <div></div>
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={() => <Welcome />} />
          <Route
            exact
            path="/home"
            component={(routerprops) => <Home {...routerprops} cars={cars} />}
          />
          <Route
            path="/cars/:_id"
            component={(routerProps) => (
              <CarPage {...routerProps} cars={cars} />
            )}
          />
          <Route path="/postcar" component={() => <PostCar />} />
          <Route path="/tracks" component={() => <Tracks />} />
        </Switch>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
