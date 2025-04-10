import withLayoutBasic from "@/libs/components/layouts/LayoutBasics";
 import { Box, Container, Stack } from "@mui/material";
 
 const PropertyDetail = () => {
   console.log("PropertyDetail page");
 
   return (
     <>
       <Container>Property Detail</Container>
     </>
   );
 };
 
 export default withLayoutBasic(PropertyDetail);