import { Grid, GridItem } from "@chakra-ui/react";
import Footer from "~/components/FooterComp";
import ContComp from "~/components/ContComp";
import HeaderComp from "~/components/HeaderComp";
import PicComp from "~/components/PicComp";
import { Outlet } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Fabiel" }];

export default function In() {
  return (
    <Grid
      templateAreas={[
        `"pic nav"
   "main main"
   "desc desc"
   "footer footer"`,
        `"pic nav"
   "main"
   "desc"
   "footer"`,
        `"pic nav"
   "main"
   "desc"
   "footer"`,
        `"pic nav"
    "desc main"
    "footer footer"`,
      ]}
      gridTemplateRows={[
        "35vh fit-content 40vh 15vh",
        "35vh fit-content 40vh 15vh",
        "35vh fit-content 40vh 15vh",
        "35vh 40vh 18vh",
      ]}
      gridTemplateColumns={[
        "40vw 55vw",
        "40vw 55vw ",
        "30vw 65vw",
        "30vw 65vw",
      ]}
     // h={["132vh","132vh","132vh","94vh"]} // Use viewport height to ensure the layout fits the screen
     h={'fit-content'} 
     w="96%"
      color="blackAlpha.700"
      fontWeight="bold"
      mx={["2%"]} // Adjust margin as needed
      //my={['2%']} // Adjust margin as needed
      //marginTop={['10px']} // Adjust margin as needed
      border={"3px solid #BDBDBD"}
      borderRadius={"lg"}
    >
      <GridItem
        pl={["4", "52px", "100px", "100px"]}
        bg=""
        area={"pic"}
        alignSelf={"center"}
      >
        <PicComp></PicComp>
      </GridItem>
      <GridItem pl="2" bg="" area={"nav"}>
        <HeaderComp></HeaderComp>
      </GridItem>
      <GridItem pl="2" bg="" area={"desc"}>
        <ContComp></ContComp>
      </GridItem>
      <GridItem pl="2" bg="" area={"main"}>
        <Outlet />
      </GridItem>
      <GridItem
        pl="2"
        bg=""
        area={"footer"}
        display={"flex"}
        alignSelf={"flex-end"}
      >
        <Footer />
      </GridItem>
    </Grid>
  );
}
