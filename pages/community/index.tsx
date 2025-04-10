import withLayoutBasic from "@/libs/components/layouts/LayoutBasics";
 import { Box, Container, Stack } from "@mui/material";
 import { NextPage } from "next";
 
 const Community: NextPage = () => {
   console.log("Community page");
   return (
     <>
       <Container>Property List</Container>
     </>
   );
 };
 
 export default withLayoutBasic(Community);