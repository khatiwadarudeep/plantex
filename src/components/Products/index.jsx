import { Box, Flex, Text } from "@chakra-ui/react";

const Products = () => {
    return(
        <>
            <Box mt={4}>
                <Flex justifyContent={'center'}>
                    <Text fontSize={'32px'} fontWeight={'600'}>Check out our Products</Text>
                </Flex>
                <Flex justifyContent={'center'}>
                <Text>Here are some selected plants from our showroom, all are in excellent shape and has a long life span. Buy and enjoy best quality.</Text>
                </Flex>
                <Box height={'600px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      
                
                
                </Box>
            </Box>
        </>
    )
}

export default Products;