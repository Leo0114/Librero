import "./App.css";

// Roboto font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import AppBar from "./components/AppBar.tsx";
import { Route, Switch } from "wouter";
import { Order } from "./screens/Order.tsx";
import { Search } from "./screens/Search.tsx";
import { Home } from "./screens/Home.tsx";
import { CssBaseline, Paper, ThemeProvider, createTheme } from "@mui/material";
import { OrderInventory } from "./screens/OrderInventory.tsx";
import { usePreferencesStore } from "./store/preferencesStore.ts";

function App() {
  const { paletteMode } = usePreferencesStore();

  const darkTheme = createTheme({
    palette: {
      mode: paletteMode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <AppBar />
        <Paper className="container-paper">
          {/* All new routes can be defined here */}
          <Route path="/" component={Home} />
          <Route path="/buscar" component={Search} />
          <Switch>
            <Route path="/ordenar" component={Order} />
            <Route path="/ordenar/:id">
              {(params) => <OrderInventory id={params.id} />}
            </Route>
          </Switch>
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default App;
