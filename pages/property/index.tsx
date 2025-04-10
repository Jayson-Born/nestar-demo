import withLayoutBasic from "@/libs/components/layouts/LayoutBasics";
 import { Box, Container, Stack } from "@mui/material";
 import { NextPage } from "next";
 
 const PropertyList: NextPage = () => {
   console.log("PropertyList page");
 
   return (
     <>
       <Container>Property List</Container>
     </>
   );
 };
 
 export default withLayoutBasic(PropertyList);