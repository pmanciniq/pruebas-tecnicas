import { Drawer } from "@mui/material";
import { Layout } from "./components/Layout";
import { useState } from "react";

export const App = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () =>{
    setOpen(!open);
  }
  return (
    <Layout >
      <button onClick={toggleDrawer}>Abrir drawer</button>
      <Drawer sx={{
        width: "100%",
      }} anchor="right" open={open} onClose={toggleDrawer} variant="persistent">
        <button onClick={toggleDrawer}>Cerrar</button>
      </Drawer>
      Metrics
      Filters
      Masonry available books
    </Layout>
  );
};
