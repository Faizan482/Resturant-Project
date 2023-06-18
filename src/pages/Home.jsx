import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Button, Typography ,styled} from '@mui/material'
import { Link } from 'react-router-dom';
import Banner from '../images/banner.jpeg'
const Container= styled(Box)(({theme})=>({
  height:'90vh',display:'flex',justifyContent:'center',alignItems:'left',flexDirection:'column',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',
  [theme.breakpoints.down('md')] :{
   justifyContent:'center',
   alignItems:'center'
  }
}));
const Child= styled(Box)(({theme})=>({
  width:'auto', marginLeft:'30px',
  [theme.breakpoints.down('md')]:{
    marginLeft:'0',
    borderRadius:'10px',
    width:'90%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    color:'white',
    backgroundColor:'#121619'
  }
}));
const Heading=styled(Typography)(({theme})=>({
  justifyContent:'center',alignItems:'center',fontWeight:'bold',fontSize:'70px',color:'black',
  [theme.breakpoints.down('md')]:{
    fontSize:'40px',
    height:'30px',
    margin:'30px 0px',
    color:'white'
  }
}));
const Paragraph=styled(Typography)(({theme})=>({
  mt:'15px',p:'0px',fontSize:'40px',fontWeight:'lighter',color:'black',
  [theme.breakpoints.down('md')]:{
    fontSize:'30px',
    color:'white'
  }
}));
const ButtonB=styled(Button)(({theme})=>({
  [theme.breakpoints.down('md')]:{
    backgroundColor:'white',
    marginBottom:'1.5rem',
    color:'black',
    fontWeight:'Bold'
  }
}))
const Home = () => {
  return (
    <Layout>
      <Container sx={{backgroundImage:`url(${Banner})`}} >
        <Child >
          <Heading variant='h1'>
            Food Website
          </Heading>
          <Paragraph paragraph={true} sx={{}}>
            Best Food In World
          </Paragraph>
          <Link to='/menu'>
            <ButtonB variant='contained' size='large'>Order Now</ButtonB>
          </Link>
        </Child>
      </Container>
    </Layout>
  )
}

export default Home