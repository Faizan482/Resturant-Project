import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box,Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{my:8,ml:4, "@ h4":{fontWeight:'bold',mb:2}}}>
        <Typography variant='h4'>
          Contact My Resturant
        </Typography>
        <Typography paragraph={true}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis mollitia est cupiditate, omnis dolore impedit odit laborum voluptatem nobis sed amet corporis error autem? Illo saepe, ipsam doloremque veritatis, earum accusantium excepturi inventore ipsum, quo tenetur eum veniam? Sapiente doloribus sed minus quo porro omnis et necessitatibus a repudiandae exercitationem ipsum odit quibusdam delectus distinctio voluptas dicta earum suscipit ea magnam rerum architecto, perspiciatis nostrum itaque. Modi sequi itaque laudantium fugiat perferendis magnam inventore nam consequuntur? Quis possimus aut aperiam enim assumenda accusamus quod excepturi optio numquam, voluptatum tempore sapiente corporis explicabo laborum, magni ipsa magnam nam, nulla eligendi impedit!
        </Typography>
      </Box>
        <Box sx={{m:3,width:'600px',ml:8,display:'flex',"@media (max-width:600px)":{
          width:"300px",
          display:'flex',
          flexDirection:'column'
        }}}>
          <TableContainer component={Paper}>
            <Table aria-label='contact-table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:'black',color:'white',}} align='center'>
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell> <SupportAgentIcon sx={{color:'red',pt:1,}}/> 1234567890 (trolefree) </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell> <EmailIcon sx={{color:'skyBlue',pt:1,}}/> help@rest.com </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell> <AddIcCallIcon sx={{color:'green',pt:1,}}/>123456789</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact