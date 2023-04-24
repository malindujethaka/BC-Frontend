import { Outlet, useLocation } from "react-router-dom";
// @mui
import { Box, Link, Container, Typography, Stack } from "@mui/material";
// components
import Logo from "../../components/Logo";
//
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import HomeBody from "src/pages/Home/HomeBody";
import HomeFooter from "src/pages/Home/HomeFooter";
import HomeHeader from "src/pages/Home/HomeHeader";
import HomeIndex from "src/pages/Home/HomeIndex";

// ----------------------------------------------------------------------

export default function MainLayout() {
  const { pathname } = useLocation();

  const isHome = pathname === "/";

  return (
    <Stack sx={{ minHeight: 1 }}>
      {/* <HomeHeader />

      {/* <Outlet /> */}
      {/* <HomeBody />
      <Box sx={{ flexGrow: 1 }} />
      <HomeFooter />  */}
      <HomeIndex />
    </Stack>
  );
}
