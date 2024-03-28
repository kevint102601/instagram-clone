import { Box, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { NotificationsLogo, UnlikeLogo } from '../../../assets/constants'

const PostFooter = () => {
    const [liked, setLinked] = useState(false)
    const [likes, setLikes] = useState(1000)

    const handleLike = () => {
        if(liked) {
            setLinked(false)
            setLikes(likes - 1)
        } else {
        setLinked(true)
        setLikes(likes + 1);

        }
    }
  return (
    <>
    <Flex alignItems="center" gap={4} w={"full"} pt={0} mb={2} mt={"auto"}>
        <Box onClick={handleLike}>
            {!liked ? (<NotificationsLogo />) : (<UnlikeLogo />)}
        </Box>

    </Flex>
    </>
  )
}

export default PostFooter