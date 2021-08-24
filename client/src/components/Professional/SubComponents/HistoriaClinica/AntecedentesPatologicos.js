import { Box, Typography, makeStyles } from "@material-ui/core";
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


export default function AntecedentesPatogolicos() {
    const classes = useStyle();
    /// usamos renderer prop
    return (
        <>
            <Formik
                initialValues={{
                    diabetes: null,
                    embarazo: null,
                    parasitos: null,
                    sarampion: null,
                    amigdalitis: null,
                    epilepsia: null,
                    transfusion: null,
                    coperador: null,//si es el paciente es coperador
                    orientado: null,//si esta orientado con lo que tiene, tuvo un buen seguimiento
                    bajo_tratamiento: null,
                    pildoras_anticonceptivas: null,
                    hepatitis: null,
                    tosferina: null,
                    hemorragias: null,
                    cardiopatias: null,
                    hipotension: null,
                    hipertension: null,
                    fiebre_reumatica: null,
                    paludismo: null,
                    VIH: null,
                    enfermedades_infancia: "",
                    accidente: "",//desarrolle,
                    operacion: "",
                    alergia_medicamento: "",   
                    constitucion: "",
                    complexion: "",
                    facies: "",
                    conformacion: "",
                    moviemientos_anormales: "",//explayar en caso de que si
                    marcha_patologicas: "",
                    ETS: "",//explayese 
                    comentarios: "",
                }}
                onSubmit={
                    () => {
                        console.log("form enviado")
                    }
                }
                validate={(valores) => {
                    if (!valores.nombre) {
                        console.log("ingresa un nombre")
                    }
                }}
            >
                {({ handleSubmit, values, handleChange, handleBlur, errors }) => (
                    <form onSubmit={handleSubmit}>
                        {/* bolean starts */}
                        <div>
                            <label htmlFor="nombre">
                                Diabetes
                            </label>
                            <input
                                type="checkbox"
                                id="diabetes"
                                name="diabetes"
                                value={values.diabetes}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >

                            </input>
                        </div>

                        <div>
                            <label htmlFor="embarazo">
                                embarazo
                            </label>
                            <input
                                type="checkbox"
                                id="embarazo"
                                name="embarazo"
                                value={values.embarazo}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >

                            </input>
                        </div>

                        <div>
                            <label htmlFor="parasitos">
                                parasitos
                            </label>
                            <input
                                type="checkbox"
                                id="parasitos"
                                name="parasitos"
                                value={values.parasitos}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >

                            </input>
                        </div>

                        <div>
                            <label htmlFor="sarampion">
                             sarampion
                            </label>
                            <input
                                type="checkbox"
                                id="sarampion"
                                name="sarampion"
                                value={values.sarampion}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >

                            </input>
                        </div>

                        <div>
                            <label htmlFor="amigdalitis">
                                amigdalitis
                            </label>
                            <input
                                type="checkbox"
                                id="amigdalitis"
                                name="amigdalitis"
                                value={values.sarampion}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >

                            </input>
                        </div>

                        <div>
                            <label htmlFor="epilepsia">
                                epilepsia
                            </label>
                            <input
                                type="checkbox"
                                id="epilepsia"
                                name="epilepsia"
                                value={values.epilepsia}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >

                            </input>
                        </div>

                        <div>
                            <label htmlFor="transfusion">
                            transfusion
                            </label>
                            <input
                                type="checkbox"
                                id="transfusion"
                                name="transfusion"
                                value={values.transfusion}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >

                            </input>
                        </div>

                        <div>
                            <label htmlFor="coperador">
                                Es coperador?
                            </label>
                            <input
                                type="checkbox"
                                id="coperador"
                                name="coperador"
                                value={values.coperador}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                            </input>
                        </div>

                        <div>
                            <label htmlFor="orientado">
                                Esta bien orientado?
                            </label>
                            <input
                                type="checkbox"
                                id="orientado"
                                name="orientado"
                                value={values.orientado}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                            </input>
                        </div>

                        <div>
                            <label htmlFor="bajo_tratamiento">
                                Esta bajo_tratamiento?
                            </label>
                            <input
                                type="checkbox"
                                id="bajo_tratamiento"
                                name="bajo_tratamiento"
                                value={values.bajo_tratamiento}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                            </input>
                        </div>

                        <div>
                            <label htmlFor="pildoras_anticonceptivas">
                                Toma pildoras anticonceptivas?
                            </label>
                            <input
                                type="checkbox"
                                id="pildoras_anticonceptivas"
                                name="pildoras_anticonceptivas"
                                value={values.pildoras_anticonceptivas}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                            </input>
                        </div>

                        <div>
                            <label htmlFor="hepatitis">
                                hepatitis
                            </label>
                            <input
                                type="checkbox"
                                id="hepatitis"
                                name="hepatitis"
                                value={values.hepatitis}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                            </input>
                        </div>

                        <div>
                            <label htmlFor="tosferina">
                                tosferina
                            </label>
                            <input
                                type="checkbox"
                                id="tosferina"
                                name="tosferina"
                                value={values.tosferina}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                            </input>
                        </div>

                        <div>
                            <label htmlFor="hemorragias">
                                hemorragias
                            </label>
                            <input
                                type="checkbox"
                                id="hemorragias"
                                name="hemorragias"
                                value={values.hemorragias}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                            </input>
                        </div>

                        <div>
                            <label htmlFor="cardiopatias">
                                cardiopatias
                            </label>
                            <input
                                type="checkbox"
                                id="cardiopatias"
                                name="cardiopatias"
                                value={values.cardiopatias}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                            </input>
                        </div>

                        <div>
                            <label htmlFor="hipotension">
                                hipotension
                            </label>
                            <input
                                type="checkbox"
                                id="hipotension"
                                name="hipotension"
                                value={values.hipotension}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                            </input>
                        </div>

                        <div>
                            <label htmlFor="hipertension">
                                hipertension
                            </label>
                            <input
                                type="checkbox"
                                id="hipertension"
                                name="hipertension"
                                value={values.hipertension}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                            </input>
                        </div>

                        <div>
                            <label htmlFor="fiebre_reumatica">
                                fiebre_reumatica
                            </label>
                            <input
                                type="checkbox"
                                id="fiebre_reumatica"
                                name="fiebre_reumatica"
                                value={values.fiebre_reumatica}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                            </input>
                        </div>

                        <div>
                            <label htmlFor="paludismo">
                                paludismo
                            </label>
                            <input
                                type="checkbox"
                                id="paludismo"
                                name="paludismo"
                                value={values.paludismo}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                            </input>
                        </div>

                        <div>
                            <label htmlFor="VIH">
                                VIH
                            </label>
                            <input
                                type="checkbox"
                                id="VIH"
                                name="VIH"
                                value={values.paluVIHdismo}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                            </input>
                        </div>
                        {/* bolean ends*/}
                         {/* string starts*/}
                        <div>
                            <label htmlFor="enfermedades_infancia">
                                Enfermedades_infancia
                            </label>
                            <textarea
                                type="textarea"
                                id="enfermedades_infancia"
                                name="enfermedades_infancia"
                                placeholder="Detalles..."
                                value={values.enfermedades_infancia}
                                onChange={handleChange}
                            >
                            </textarea>
                        </div>

                        <div>
                            <label htmlFor="accidente">
                                accidente
                            </label>
                            <textarea
                                type="text"
                                id="accidente"
                                name="accidente"
                                placeholder="Detalles..."
                                value={values.accidente}
                                onChange={handleChange}
                            >
                            </textarea>
                        </div>

                        <div>
                            <label htmlFor="operacion">
                                operacion
                            </label>
                            <textarea
                                type="text"
                                id="operacion"
                                name="operacion"
                                placeholder="Detalles..."
                                value={values.accidente}
                                onChange={handleChange}
                            >
                            </textarea>
                        </div>
                        
                        <div>
                            <label htmlFor="alergia_medicamento">
                                alergia_medicamento
                            </label>
                            <textarea
                                type="text"
                                id="alergia_medicamento"
                                name="alergia_medicamento"
                                placeholder="Detalles..."
                                value={values.accidente}
                                onChange={handleChange}
                            >
                            </textarea>
                        </div>

                        <div>
                            <label htmlFor="alergia">
                                alergia
                            </label>
                            <textarea
                                type="text"
                                id="alergia"
                                name="alergia"
                                placeholder="Detalles..."
                                value={values.accidente}
                                onChange={handleChange}
                            >
                            </textarea>
                        </div>

                        <div>
                            <label htmlFor="constitucion">
                                constitucion
                            </label>
                            <textarea
                                type="text"
                                id="constitucion"
                                name="constitucion"
                                placeholder="Detalles..."
                                value={values.constitucion}
                                onChange={handleChange}
                            >
                            </textarea>
                        </div>

                        <div>
                            <label htmlFor="complexion">
                                complexion
                            </label>
                            <textarea
                                type="text"
                                id="complexion"
                                name="complexion"
                                placeholder="Detalles..."
                                value={values.complexion}
                                onChange={handleChange}
                            >
                            </textarea>
                        </div>

                        <div>
                            <label htmlFor="facies">
                                Facies Característica
                            </label>
                            <textarea
                                type="text"
                                id="facies"
                                name="facies"
                                placeholder="Detalles..."
                                value={values.facies}
                                onChange={handleChange}
                            >
                            </textarea>
                        </div>

                        <div>
                            <label htmlFor="conformacion">
                                Conformacion corporal
                            </label>
                            <textarea
                                type="text"
                                id="conformacion"
                                name="conformacion"
                                placeholder="Detalles..."
                                value={values.conformacion}
                                onChange={handleChange}
                            >
                            </textarea>
                        </div>

                        <div>
                            <label htmlFor="moviemientos_anormales">
                                moviemientos_anormales
                            </label>
                            <textarea
                                type="text"
                                id="moviemientos_anormales"
                                name="moviemientos_anormales"
                                placeholder="Detalles..."
                                value={values.moviemientos_anormales}
                                onChange={handleChange}
                            >
                            </textarea>
                        </div>

                        <div>
                            <label htmlFor="marcha_patologicas">
                                Marcha_patologicas
                            </label>
                            <textarea
                                type="text"
                                id="moviemientos_anormales"
                                name="moviemientos_anormales"
                                placeholder="Detalles..."
                                value={values.moviemientos_anormales}
                                onChange={handleChange}
                            >
                            </textarea>
                        </div>

                        <div>
                            <label htmlFor="ETS">
                            ETS
                            </label>
                            <textarea
                                type="text"
                                id="ETS"
                                name="ETS"
                                placeholder="Detalles..."
                                value={values.ETS}
                                onChange={handleChange}
                            >
                            </textarea>
                        </div>

                        <div>
                            <label htmlFor="comentarios">
                            Comentarios
                            </label>
                            <textarea
                                type="text"
                                id="comentarios"
                                name="comentarios"
                                placeholder="Explayese..."
                                value={values.comentarios}
                                onChange={handleChange}
                            >
                            </textarea>
                        </div>
                        {/* string ends*/}

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