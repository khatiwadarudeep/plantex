import { Box,  Flex, Heading, Text } from "@chakra-ui/react";

const StepCard =({id,title,desc}) => {
    return(
        <>
        <Box paddingTop={'30px'} paddingLeft={'20px'} paddingRight={'20px'} background={'#fff'} height={'200px'} width={'200px'} borderRadius={'16px'}>
            <Flex>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} height={'45px'} width={'45px'} background={'#3E6553'} borderRadius={'6px'}>
                <Text color={'#fff'} fontSize={24}>{id}</Text>
                </Box>
            </Flex>
            <Heading as='h6' size='20px' mt={4}>
            {title}
             </Heading>
             <Text fontSize={"14px"}>
                {desc}
             </Text>

        </Box>
        </>
    )
}

export default StepCard;