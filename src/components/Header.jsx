import { Flex, Text, IconButton, useMediaQuery } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { LuLeaf } from "react-icons/lu";

const Header = () => {
    const [isSmallerThanMd] = useMediaQuery("(max-width: 48em)");

    const navLinks =[
        {
            id:1,
            name:"home"
        },
        {
            id:2,
            name:"About"
        },
        {
            id:3,
            name:"Products"
        },
        {
            id:4,
            name:"FAQs"
        },
        {
            id:5,
            name:"Contact Us"
        }
    ]

    return (
        <>
            <Flex height={'80px'} justifyContent={'space-between'} alignItems="center" ml={8} mr={8} p={4}>
                <Flex direction={'row'} alignItems={'center'}>
                    <LuLeaf color="green" style={{fontWeight:'bolder'}}/><Text fontWeight={800} p={3}>PLANTEX</Text>
                </Flex>
                {isSmallerThanMd ? (
                    <IconButton
                        aria-label="Open Menu"
                        icon={<FaBars />}
                        variant="ghost"
                    />
                ) : (
                    <Flex>
                        {
                            navLinks.map(link => <Text p={3} key={link.id}>{link.name}</Text>)
                        }
                    </Flex>
                )}
            </Flex>
        </>
    );
};

export default Header;

