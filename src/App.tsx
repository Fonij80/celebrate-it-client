import { RouterProvider } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "./context/ThemeContext";
import i18n from "./i18n";
import router from "./Router";

const App = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default App;
