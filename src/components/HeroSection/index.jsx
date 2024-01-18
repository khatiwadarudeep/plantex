import { Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import heroImage from '../../assets/hero-image.png';

const HeroSection = () => {
    return (
        <Grid templateColumns={{ sm: "1fr", md: "1fr 1fr" }} gap={8} align="center">
            <GridItem>
                <Flex flexDirection={{ sm: "column", md: "row" }} alignItems="center" justifyContent={'end'}>
                    <Flex flexDirection="column" textAlign={{ sm: "center", md: "left" }}>
                        <Text fontSize={'56px'} fontWeight={600}>Plants will make</Text>
                        <Text fontSize={'56px'} fontWeight={600}>your life better</Text>
                        <Text>Create incredible plant designs for your offices</Text>
                        <Text>or apartments. Add freshness to your new</Text>
                        <Text>ideas.</Text>
                        <Flex mt={4}>
                            <Button color={"#fff"} height={'40px'} p={4} width={'100px'} borderRadius={'8px'} background={'#395E4D'}>Explore</Button>
                        </Flex>
                    </Flex>
                </Flex>
            </GridItem>
            <GridItem>
                <Flex alignItems="center" justifyContent="center">
                    <Image src={heroImage} alt="Hero Image" h={{ sm: "200px", md: "350px" }} />
                </Flex>
            </GridItem>
        </Grid>
    );
};

export default HeroSection;

