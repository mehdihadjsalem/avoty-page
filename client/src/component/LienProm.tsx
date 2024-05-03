import { CopyIcon } from '@chakra-ui/icons'
import { Box, Button, HStack, Input, InputGroup, InputLeftAddon, InputRightAddon, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'


const LienProm = () => {
	return (
		
			<HStack w='96%'
			boxShadow='base'
			p='3'
			borderRadius='lg'>
				<VStack w='80%'>
					<Text>
						Lien de promotion
					</Text>
					<Stack spacing={4} w='100%'>
						<InputGroup>

							<Input placeholder='https://console.cloud.google.com/apis/dashboard' ></Input>
							<InputRightAddon bg='#2C5282'><Button color='white' variant=''><CopyIcon /></Button></InputRightAddon>
						</InputGroup>
					</Stack>
				</VStack>
				<VStack w='fit-content'>
					<Box>Qr Code</Box>
					<Button>Partage</Button>
				</VStack>
			</HStack>

		
	)
}

export default LienProm