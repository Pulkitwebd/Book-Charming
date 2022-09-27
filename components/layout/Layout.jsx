import Footer from "../footer/Footer";
import { ThemeProvider, createTheme } from "@mui/material";
import Head from "next/head";
import Header from "../header/Header";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF", //white
    },
    secondary: {
      main: "#000000", //black
    },
  },
});

const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Books Charming</title>
        <meta
          name="description"
          content="Books Charming is one of the top book blogs managed by author Aakanksha Jain. We will help you to increase book sales and provide honest book reviews."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
        <main className="header_margin_desktop header_margin_mobile">{props.children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
