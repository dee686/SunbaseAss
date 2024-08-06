import { Badge, Box, Button, HStack, Input, InputGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Select, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useToastMsg from '../customHooks/useToastMsg';
import { deleteCustomerAction, getAllCustomersAction, udpateCustomerAction } from '../redux/customers/customers.actions';
import Loading from '../components/Loading';
import style from '../styles/Home.module.css';
import { HiPencil } from 'react-icons/hi2';
import { TiDelete } from "react-icons/ti";
// import { useState } from 'react';


function Home() {
     const toastMsg = useToastMsg();
     const dispatch = useDispatch();
     const { loading, customers } = useSelector(store => store.customersManager);
     const { isOpen, onOpen, onClose } = useDisclosure()
     const [updateCustomer, setUpdateCustomer] = useState();
     const [searchKey, setSearchKey] = useState();
     const [searchValue, setSearchValue] = useState();
     const [pageNo, setPageNo] = useState(0);
        // update customer  
     const handleSubmit = (e) => {
          e.preventDefault();
          const form = e.target;

          const update = {}
          if (form.first_name.value && form.first_name.value !== updateCustomer.first_name) update.first_name = form.first_name.value;
          if (form.last_name.value && form.last_name.value !== updateCustomer.last_name) update.last_name = form.last_name.value;
          if (form.street.value && form.street.value !== updateCustomer.street) update.street = form.street.value;
          if (form.address.value && form.address.value !== updateCustomer.address) update.address = form.address.value;
          if (form.city.value && form.city.value !== updateCustomer.city) update.city = form.city.value;
          if (form.state.value && form.state.value !== updateCustomer.state) update.state = form.state.value;
          if (form.email.value && form.email.value !== updateCustomer.email) update.email = form.email.value;
          if (form.phone.value && form.phone.value !== updateCustomer.phone) update.phone = form.phone.value;

          dispatch(udpateCustomerAction(toastMsg,pageNo, updateCustomer.id, update))
          
          onClose();
     }
          const deleteCustomer = (id) =>{
               dispatch(deleteCustomerAction(toastMsg,id));

     }
     const nextPage = ()=>{
          setPageNo(pageNo+1);
          dispatch(getAllCustomersAction(toastMsg,pageNo,searchKey,searchValue))
     }

     const PrevicePage = ()=>{
          setPageNo(pageNo-1);
          dispatch(getAllCustomersAction(toastMsg,pageNo,searchKey,searchValue))
     }
     useEffect(() => {
          dispatch(getAllCustomersAction(toastMsg,pageNo,searchKey,searchValue))
     }, [])

     return loading ? <Loading /> : (
          <>
               <Box className={style.home}>
                    <TableContainer className={style['users-table']}>
                         <Table variant='simple' className={style['users-table']}>
                              <TableCaption
                                   fontSize='15px'
                                   fontWeight='300'
                              ></TableCaption>
                              <Thead>
                                   <Tr>
                                        <Th>SN</Th>
                                        <Th>First Name</Th>
                                        <Th>Last Name</Th>
                                        <Th>Address</Th>
                                        <Th>City</Th>
                                        <Th>State</Th>
                                        <Th>Email</Th>
                                        <Th>Phone</Th>
                                        <Th>Action</Th>
                                   </Tr>
                              </Thead>
                              <Tbody>
                                   {
                                        customers?.map((el, ind) => (<Tr key={el._id}>
                                             <Td>{el.id}</Td>
                                             <Td>{el.first_name}</Td>
                                             <Td>{el.last_name}</Td>
                                             <Td>{el.address}</Td>
                                             <Td>{el.city}</Td>
                                             <Td>{el.state}</Td>
                                             <Td>{el.email}</Td>
                                             <Td>{el.phone}</Td>
                                             <Td>
                                                  <HStack spacing='2'>
                                                       <TiDelete role="button" size='25px' color="blue"  onClick={()=>deleteCustomer(el.id)} />
                                                       <HiPencil role="button" size="20px" color="#3c82be" onClick={() => {
                                                            onOpen()
                                                            setUpdateCustomer(el)
                                                       }} />
                                                  </HStack>
                                             </Td>
                                        </Tr>))
                                   }
                              </Tbody>
                         </Table>
                    </TableContainer>
               </Box>
<div>
     <button onClick={nextPage}>Next </button> 
<h1>{pageNo+1}</h1>
     <button onClick={PrevicePage}>Previous </button>
</div>

               <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
                    <ModalOverlay />
                    <ModalContent>
                         <ModalCloseButton />
                         <ModalBody>
                              <form className={style['form']} onSubmit={handleSubmit}>
                                   <InputGroup gap={2}>
                                        <Input type="text" id="first_name" placeholder="First name" defaultValue={updateCustomer?.first_name} />
                                        <Input type="text" id="last_name" placeholder="Last name" defaultValue={updateCustomer?.last_name} />
                                   </InputGroup>
                                   <InputGroup gap={2}>
                                        <Input type="text" id="street" placeholder="Street" defaultValue={updateCustomer?.street} />
                                        <Input type="text" id="address" placeholder="Address" defaultValue={updateCustomer?.address} />
                                   </InputGroup>
                                   <InputGroup gap={2}>
                                        <Input type="text" id="city" placeholder="City" defaultValue={updateCustomer?.city} />
                                        <Input type="text" id="state" placeholder="State" defaultValue={updateCustomer?.state} />
                                   </InputGroup>
                                   <InputGroup gap={2}>
                                        <Input type="email" id="email" placeholder="Email" defaultValue={updateCustomer?.email} />
                                        <Input type="tel" id="phone" placeholder="Phone" defaultValue={updateCustomer?.phone} />
                                   </InputGroup>
                                   <Button type="submit" w='fit-content' alignSelf='flex-end' loadingText='Updating...'>Update</Button>
                              </form>
                         </ModalBody>
                    </ModalContent>
               </Modal>
          </>
     )
}

export default Home