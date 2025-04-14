import { NextPage } from "next";
import { Stack } from "@mui/material";
import LayoutHome from "@/libs/components/layout/LayoutHome";

 
 const Home: NextPage = () => {

 
   return (
     <Stack className="home-page">
       <Stack>
         <Stack className="container">Trend Properties</Stack>
       </Stack>
       <Stack>
         <Stack className="container">Popular Properties</Stack>
       </Stack>
       <Stack>
         <Stack className="container">Advertisement</Stack>
       </Stack>
       <Stack>
         <Stack className="container">Top Properties</Stack>
       </Stack>
       <Stack>
         <Stack className="container">Top agents</Stack>
       </Stack>
     </Stack>
   );
 };
 export default LayoutHome(Home);
 