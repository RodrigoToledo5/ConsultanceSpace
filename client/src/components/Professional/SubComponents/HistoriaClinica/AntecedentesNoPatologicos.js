import { Box, Typography, makeStyles } from "@material-ui/core";
import SearchBar from "../SearchBar";
import { Formik } from 'formik'



const useStyle = makeStyles((theme) => ({

    text: {
        color: "#159DE9",
    },
    box: {
        padding: "10px",
        paddingLeft: "50px",
        paddingRight: "50px",
        marginLeft: "10px",
        marginRight: "10px",
        marginBottom: "10px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        color: "#159DE9",
    },

}));


export default function FormHistoriaClinica() {
    const classes = useStyle();
    /// usamos renderer prop
    return (
        <>
            <Formik
                initialValues={{
                    nombre: "",
                    correo: "",
                }}
                onSubmit={
                    () => {
                        console.log("form enviado")
                    }
                }
                validate={(valores)=>{
                    if(!valores.nombre){
                        console.log("ingresa un nombre")
                    }
                }}
            >
                {({ handleSubmit, values,handleChange,handleBlur,errors }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="nombre">
                                Nombre
                            </label>
                            <input 
                                type="text" 
                                id="nombre" 
                                name="nombre" 
                                placeholder="escriba aqui" 
                                value={values.nombre}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                >
                                
                            </input>
                        </div>
                        <div>
                            <label htmlFor="correo">
                                Correo
                            </label>
                            <input 
                                type="text" 
                                id="correo" 
                                name="correo" 
                                placeholder="escriba aqui su correo" 
                                value={values.correo}
                                onChange={handleChange}
                                >
                            </input>
                        </div>
                        <button type="submit">Enviar</button>
                    </form>)}
            </Formik>
        </>
    )
}