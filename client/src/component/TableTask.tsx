import React, { useEffect, useState } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, Button, Link, TableContainer, Text, Box, Center, useBreakpointValue, Stack, HStack, WrapItem, Avatar, Divider, VStack } from '@chakra-ui/react';
import Pagination from "@mui/material/Pagination"
import { useQuery } from '@apollo/client';
import { GetTasks } from '@/graphQl/Queries';
import { Paginate } from 'react-paginate-chakra-ui';



const TableTask = () => {
	const { data } = useQuery(GetTasks)
	const [dataCandidat, setcandidats] = useState(data?.candidats)
	const [candidats, setCandidats] = useState<any>([])
	const [sumItems, setSumItems] = useState<number>(0)
	// const [candidats, setCandidats] = useState([
	// 	{ firstName: 'John', lastName: 'Doe', photo: 'https://bit.ly/kent-c-dodds', action: 'true', sortable: true },
	// 	{ firstName: 'George', lastName: 'Biden', photo: 'https://bit.ly/tioluwani-kolawole', action: 'true' },
	// 	{ firstName: 'Will', lastName: 'Smith', photo: 'https://bit.ly/dan-abramov', action: 'true' },
	// 	{ firstName: 'Garry', lastName: 'Ten', photo: 'https://bit.ly/ryan-florence', action: 'true' },
	// 	{ firstName: 'Federer', lastName: 'Barry', photo: 'https://bit.ly/prosper-baba', action: 'true' },
	// 	{ firstName: 'Jane', lastName: 'Dane', photo: 'https://bit.ly/code-beast', action: 'true' },
	// 	{ firstName: 'Christopher', lastName: 'Roger', photo: 'https://bit.ly/sage-adebayo', action: 'true' },
	// 	{ firstName: 'Ramses', lastName: 'Steve', photo: '..', action: 'true' },




	// ]);

	useEffect(() => { setcandidats(data?.GetTasks) })
	const isDesktop = useBreakpointValue({ base: false, md: true, lg: true })

	// pagination 
	// const items = 5
	// const  [current, setCurrent] = useState(1);
	// const NbPage = Math.ceil(candidats?.length / items);
	// const startIndex = (current - 1 ) * items;
	// const endIndex = startIndex * items;
	// const DataPerPage = candidats?.slice(startIndex, endIndex)
	const [curPage, setCurPage] = useState(0)

	const itemLimit = 5
	const handlePageChange = (page: any) => {
		setCurPage(page)
	}
	const offset = curPage * itemLimit
	useEffect(() => {
		const getList = (curPage: any, itemLimit: any) => {
			setCandidats(dataCandidat?.slice(offset, offset + itemLimit))
			setSumItems(offset + dataCandidat?.slice(offset, offset + itemLimit)?.length)
		}

		getList(curPage, itemLimit)
	}, [curPage, dataCandidat, itemLimit])

	// const HandleChange = (e: any, p: any) => {
	// 	// setCurrent(p);
	// }


	return (

		<Box w='full' p='3' >
			{isDesktop ?
				<TableContainer
					boxShadow='base'
					p='3'
					borderRadius='lg'
					bg='white' >
					<Table  >
						<Thead bg='#EDF2F7'  >
							<Tr  >
								<Th>#</Th>
								<Th >First Name </Th>
								<Th>Last Name</Th>
								<Th>Photo</Th>
								<Th>Actions</Th>
							</Tr>

						</Thead>
						<Tbody>
							{candidats?.map((task: any, index: number) => {
								return (

									<Tr key={index}>
										<Td> {String(index + 1 + (curPage * itemLimit))}</Td>
										<Td>{task?.firstName}</Td>
										<Td>{task?.lastName}</Td>
										<Td><WrapItem>
											<Avatar name='Dan Abrahmov' src={task.photo} />
										</WrapItem></Td>
										<Td>
											{task?.action ? "true" : "false"}
										</Td>
									</Tr>
								)
							})
							}
						</Tbody>
					</Table >
					<HStack mt="1">
						{/* <Pagination count={NbPage} page={current} onChange={HandleChange}/> */}
						{/* {Array.from({length: NbPage},(_,i) => i + 1   ).map(page => {
				        return <Button>{page}</Button>
			            })} */}
						<Box color='gray'>
							Show {` `}
							{itemLimit * curPage + (sumItems === 0 ? 0 : 1)} - {sumItems} of {dataCandidat?.length} entries
						</Box>
						<Box
							display='flex'
							justifyContent='flex-end'
							w='full'>
							<Paginate
								page={curPage}
								count={
									dataCandidat?.length
										? dataCandidat?.length
										: 1
								}
								pageSize={itemLimit}
								onPageChange={handlePageChange}
								margin={2}
								variant="unstyled"
								shadow="md"
								_hover={{
									bg: `brand.100`,
									color: `white`,
								}}
								color="brand.100"
								w="50%"
								size={{ base: `xs`, lg: `sm` }}
							/>
						</Box>
					</HStack>
				</TableContainer>
				:
				<Center>
					<Stack
						display="flex"
						alignItems='center'
						w='full'>
						{candidats?.map((task: any, index: number) => {
							return (<Stack
								key={index}
								w={80}
								bg={'white'}
								boxShadow='lg'
								p={7}
								mt={4}
								borderRadius='lg'

							>
								<HStack
									bg={'#2C5282'}
									boxShadow='base'
									borderRadius={5}
									p={2}
									color='white'>
									<Text

										w={"38%"}>
										Candidat
									</Text>
									<Box
										ml="auto"
										w={"fit-content"}>
										{index + 1}
									</Box>
								</HStack>
								<HStack
									borderRadius={5}
									boxShadow='base'
									bg={'#F7FAFC'}
									p={2}
								>
									<Text
										color='gray'
										w={"38%"}>
										First Name
									</Text>
									<Box
										ml="auto"
										w={"fit-content"}
										color='#2C5282'
										as='b'>
										{task.firstName}
									</Box>
								</HStack>
								<HStack
									borderRadius={5}
									boxShadow='base'
									bg={'#EDF2F7'}
									p={2}>
									<Text
										color='gray'
										w={"38%"}>
										Last Name
									</Text>
									<Box
										ml="auto"
										w={"fit-content"}
										color='#2C5282'
										as='b'>
										{task.lastName}
									</Box>
								</HStack>
								<HStack
									borderRadius={5}
									boxShadow='base'
									bg={'#F7FAFC'}
									p={2}>
									<Text
										color='gray'
										w={"30%"}>
										Photo
									</Text>
									<Box
										ml="auto"
										w={"fit-content"}
										color='#2C5282'
										as='b'>
										<WrapItem>
											<Avatar src={task.photo} />
										</WrapItem>
									</Box>
								</HStack>
								<HStack
									borderRadius={5}
									boxShadow='base'
									bg={'#EDF2F7'}
									p={2}>
									<Text
										color='gray'
										w={"30%"}>
										Action
									</Text>
									<Box
										ml="auto"
										w={"fit-content"}
										color='#2C5282'
										as='b'>
										{task?.action ? "true" : "false"}
									</Box>
								</HStack>
							</Stack>
							)
						})}
						<HStack mt="1" w='full' >
							{/* <Pagination count={NbPage} page={current} onChange={HandleChange}/> */}
							{/* {Array.from({length: NbPage},(_,i) => i + 1   ).map(page => {
				return <Button>{page}</Button>
			})} */}
							<Box color='gray' w='60%' >
							Show {` `}
							{itemLimit * curPage + (sumItems === 0 ? 0 : 1)} - {sumItems} of {dataCandidat?.length} entries
							</Box>
							<Box
								display='flex'
								justifyContent='flex-end'
								w='full'>
								<Paginate
									page={curPage}
									count={
										dataCandidat?.length
											? dataCandidat?.length
											: 1
									}
									pageSize={itemLimit}
									onPageChange={handlePageChange}
									margin={2}
									variant="unstyled"
									shadow="md"

									_hover={{
										bg: `brand.100`,
										color: `white`,
									}}
									color="brand.100"
									w="50%"
									size={{ base: `xs`, lg: `sm` }}
								/>
							</Box>
						</HStack>


					</Stack>

				</Center>

			}


		</Box>
	)
}

export default TableTask