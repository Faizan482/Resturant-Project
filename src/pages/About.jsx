import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
    return (
        <Layout>
            <Box sx={{textAlign:'center',p:2 ,"& h4":{fontWeight:'bold',my:2,fontSize:'2rem'},"& paragraph":{textAlign:"justify"},"@media (max-width:600px)":{mt:0,
                "@h4":{
                    fontSize:'1.4rem'
                }
            }}}>
                <Typography variant='h4'>
                    Welcome To My Resturant
                </Typography>
                <Typography paragraph={true}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate possimus laudantium consequuntur commodi maxime maiores non ullam beatae.
                    Porro nostrum, magni earum blanditiis nemo ipsum accusantium voluptatem iste illo at,
                    culpa ipsa velit tempora architecto beatae est libero expedita hic impedit,
                    tempore quam? Pariatur eligendi sapiente,
                    atque hic dignissimos dolores blanditiis facere nostrum dolorum totam cumque quis eveniet exercitationem incidunt accusamus nam,
                    saepe explicabo temporibus voluptates. Adipisci repellendus at expedita, aut quis dolore reprehenderit id debitis ipsa. Unde illum vero ratione,
                    maxime, debitis aliquid accusamus hic ex velit delectus iure ullam explicabo officia provident libero incidunt asperiores eum error inventore.
                </Typography>
                <br />
                <Typography paragraph={true}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam cumque in incidunt illo ad tenetur cupiditate saepe et ullam,
                    nostrum repellat quae ducimus quaerat asperiores voluptas, maxime iure sunt vitae neque!
                    Ut vitae nemo dolorum accusantium repellat eum nam vero voluptatum, beatae voluptatibus recusandae quod deserunt ipsa,
                    repellendus eveniet tempore id nisi eius autem aut. Et explicabo deserunt quidem sit debitis perferendis omnis accusamus labore,
                    cum aliquam qui consectetur quibusdam sequi iusto provident doloremque voluptatibus tempora, quisquam sint quod laborum. Obcaecati,
                    repellendus facere? Esse odit, minus ipsa dicta, perspiciatis autem ex aperiam in nostrum commodi aliquam tempore,
                    error corrupti architecto!
                </Typography>
            </Box>

        </Layout>
    )
}

export default About