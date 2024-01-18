import { Box, Grid, Flex, GridItem, Heading, Text } from "@chakra-ui/react";
import StepCard from "../StepCard";

const Steps = () => {
  const stepsData = [
    {
      id: "01",
      title: "Choose Plant",
      desc: "We have several varieties plants you can choose from.",
    },
    {
      id: "02",
      title: "Place an order",
      desc: "Once your order is set, we move to the next step which is the shipping.",
    },
    {
      id: "03",
      title: "Get plants delivered",
      desc: "Our delivery process is easy, you receive the plant direct to your door.",
    },
  ];

  return (
    <Box mt={{ sm: 4, md: '150px' }} height={'600px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      
      <Flex height={'80%'}
        width={'70%'}
        borderRadius={'16px'}
        background={'#3E6553'} direction={'column'} justifyContent={'center'} alignItems={'center'}>
            <Text fontSize={'32px'} fontWeight={600} color={'#fff'} p={4}>Steps to start your
                plants off right</Text>
      <Grid
        templateColumns={{ sm: '1fr', md: 'repeat(3, 1fr)' }}
        gap={8}
        p={4}
        width={'100%'}
      >
       
        {stepsData.map((step) => (
            <GridItem display={'flex'} justifyContent={'center'} alignItems={'center'}><StepCard key={step.id} title={step.title} desc={step.desc} id={step.id} /></GridItem>
          
        ))}
      </Grid>
      </Flex>
      
    </Box>
  );
};

export default Steps;
