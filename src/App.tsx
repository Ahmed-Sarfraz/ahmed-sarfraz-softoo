import Layout from "src/components/Common/Layout/Layout";
import "./App.css";
import Home from "src/pages/Home";
import { ThemeProvider } from "styled-components";
import { theme } from "src/themes/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
