// import { Inter } from "next/font/google";
import TableTask from "@/component/TableTask";
import { Form, Formik } from 'formik'

import { Box, Button, Center, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, VStack, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GetTasks } from "@/graphQl/Queries";
import { AddCandidat } from "@/graphQl/Mutation";
import LienProm from "@/component/LienProm";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  // const [GetCandidat] = useLazyQuery(GetTasks)
  const [AddNewCandidat] = useMutation(AddCandidat)


  function handleSubmit(values: any) {
    console.log(JSON.stringify(values));
    AddNewCandidat({
      variables: {
        firstName: values.firstName,
        lastName: values.lastName,
        photo: values.photo,
        action: values.action,
       
      }, onCompleted: (data) => {
        sessionStorage.setItem('candidaat', JSON.stringify(data?.AddCandidat));
        console.log("success");
      },
    });

  }
  return (
    <Box h='full' bg='#F7FAFC' width='full'>


      <VStack w='full' p='6'>
        <Box alignSelf='flex-end'>
          <>
            <Button onClick={onOpen} colorScheme='facebook' color='white' rounded='lg'> Participer comme candidat </Button>
            <Modal
              closeOnOverlayClick={false}
              isOpen={isOpen}
              onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader> Register</ModalHeader>
                <ModalCloseButton />
                <Formik
                  initialValues={{
                    firstName: '',
                    lastName: '',
                    photo: 'https://bit.ly/prosper-baba',
                    action: true
                  }}
                  validate={values => {
                    const errors: any = {};
                    if (!values.firstName) {
                      errors.firstName = 'Required'
                    }
                    if (!values.lastName) {

                      errors.lastName = 'Required'
                    }
                    return errors
                  }}
                  onSubmit={handleSubmit } >
                  {(formik) => {
                    return (
                      <Form>

                        <ModalBody pb={6} >
                          <VStack>
                            <Input
                              placeholder=' Put Your First Name '
                              name="firstName"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.firstName} />
                            {formik.touched.firstName && formik.errors.firstName && <Text color="red">{formik.errors.firstName}</Text>}

                            <Input
                              placeholder='Put Your Last Name '
                              name="lastName"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.lastName} />
                            {formik.touched.lastName && formik.errors.lastName && <Text color="red">{formik.errors.lastName}</Text>}

                          </VStack>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            type='submit'
                            colorScheme='blue'
                            mr={3} >
                            Save
                          </Button>
                          <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                      </Form>)
                  }}
                </Formik>
              </ModalContent>
            </Modal>

          </>
        </Box>
        <Text
          fontSize='3xl'
          as='b'
          color='#2C5282'> UNIVERSITY DEAN ELECTION 2024</Text>
        <TableTask  />
        <LienProm />


      </VStack>




    </Box>

  );
}
