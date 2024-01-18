import { Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import who from '../../assets/who.png';

const WhoAreWe = () => {
    return (
        <Grid templateColumns={{ sm: "1fr", md: "1fr 1fr" }} gap={8} align="center" mt={{sm:4, md:'150px'}}>
           
           <GridItem>
                <Flex alignItems="center" justifyContent="end" mr={"50px"}>
                    <Image src={who} alt="Hero Image" h={{ sm: "200px", md: "350px" }} />
                </Flex>
            </GridItem>
            <GridItem>
                <Flex flexDirection={{ sm: "column", md: "row" }} alignItems="center" justifyContent={'start'}>
                    <Flex flexDirection="column" textAlign={{ sm: "center", md: "left" }}>
                        <Text fontSize={'56px'} fontWeight={600}>Plants will make</Text>
                        <Text fontSize={'56px'} fontWeight={600}>your life better</Text>
                        <Text>Create incredible plant designs for your offices</Text>
                        <Text>or apartments. Add freshness to your new</Text>
                        <Text>ideas.</Text>
                        <Flex mt={4}>
                            <Button color={"#395E4D"} height={'40px'} p={4} width={'100px'} borderRadius={'8px'} background={'transparent'}>Shop Now</Button>
                        </Flex>
                    </Flex>
                </Flex>
            </GridItem>
            
        </Grid>
    );
};

export default WhoAreWe;

