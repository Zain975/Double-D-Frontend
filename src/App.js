import "./app.css";
import MediaPage from "./pages/media/MediaPage";
import Watch from "./pages/watch/Watch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Front from "./pages/front/Front";
import Menu from "./pages/menu/Menu";
import Apps from "./pages/apps/Apps";
import Play from "./pages/play/Play";
import Home from "./pages/home/home";
import MusicPage from "./pages/music/MusicPage";
import MobHome from "./pages/mobhome/MobHome.component";
import MyLife from "./pages/myLife/MyLife";

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path='/' exact>
          <MobHome />
        </Route> */}

        <Route path='/' exact>
          <Front />
        </Route>
        <Route path='/menu'>
          <Menu />
        </Route>
        <Route path='/apps'>
          <Apps />
        </Route>
        <Route path='/media'>
          <MediaPage />
        </Route>
        <Route path='/music'>
          <MusicPage />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/myLife'>
          <MyLife />
        </Route>
        <Route path='/watch/:id'>
          <Watch />
        </Route>
        <Route path='/play/:id'>
          <Play />
        </Route>
      </Switch>
    </Router>
    // <>
    //   <Apps />
    // </>
  );
}

export default App;
