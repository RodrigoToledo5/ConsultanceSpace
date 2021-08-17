import { Container,Grid,Box, Link} from "@material-ui/core";



export default function Footer(){
   
    return (
        <>
        <footer>
            <Box 
                px={ {xs:3, sm:3}} 
                py={ {xs:5, sm:3}} 
                bgcolor="#f5f5f7" 
                color="#86868b"
                border={1}
                borderRadius="5px"
                borderColor="#f5f5f7"
                >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Help</Box>
                            <Box>
                                <Link color="inherit">Contacto</Link>
                            </Box>
                            <Box>
                                <Link color="inherit">Soporte</Link>
                            </Box>
                            <Box>
                                <Link color="inherit">Privacidad</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Cuenta</Box>
                            <Box>
                                <Link href="/login" color="inherit">Iniciar sesión</Link>
                            </Box>
                            <Box>
                                <Link href="/sign-In" color="inherit">Registrarse</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Messages</Box>
                            <Box>
                                <Link color="inherit">Importancia</Link>
                            </Box>
                            <Box>
                                <Link color="inherit">Historia</Link>
                            </Box>
                            <Box>
                                <Link color="inherit">Rolles</Link>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center" pt={{xs:5,sm:5}} pb={{xs:5,sm:2}}>
                        Consultance Space &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
        </footer>
        </>
    )
}