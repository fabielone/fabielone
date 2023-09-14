import { Grid, GridItem } from "@chakra-ui/react";
import Footer from "~/components/FooterComp";
import ContComp from "~/components/ContComp";
import DescComp from "~/components/DescComp";
import HeaderComp from "~/components/HeaderComp";
import PicComp from "~/components/PicComp";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Fabiel" }];

export default function Index() {
  return (
    <Grid
      templateAreas={[
        `"pic"
                        "nav"
                       "main"
                       "desc"
                       "footer"`,
        `"pic"
                        "nav"
                       "main"
                       "desc"
                       "footer"`,
        `"pic"
                        "nav"
                       "main"
                       "desc"
                       "footer"`,
        `"pic nav"
                        "desc main"
                        "footer footer"`,
      ]}
      gridTemplateRows={"35vh 40vh 15vh"}
      gridTemplateColumns={["100vh", "30vw 1fr"]}
      h="100%"
      w="100%"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
      mx={[3]}
      my={[3]}
    >
      <GridItem pl="2" bg="orange.300" area={"pic"}>
        <PicComp></PicComp>
      </GridItem>
      <GridItem pl="2" bg="pink.300" area={"nav"}>
        <HeaderComp></HeaderComp>
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"desc"}>
        <ContComp></ContComp>
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"main"}>
        <DescComp />
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
}
