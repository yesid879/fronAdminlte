import React, { useState, useEffect } from "react";
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import Navbar from '../../componentes/Navbar';
import APIInvoke from '../../configuracion/APIInvoke';
import SidebarContainer from "../../componentes/SidebarContainer";
import { useNavigate, useParams } from "react-router-dom";



const EditarClientes = () => {

    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [cedula, setCedula] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const navigate = useNavigate()
    const { id } = useParams()


    //funcion actualizar
    const editarClientes = async (e) => {
        e.preventDefault();
        await APIInvoke.invokePUT(`/api/clientes/${id}`, {
            nombres: nombres,
            apellidos: apellidos,
            cedula: cedula,
            correo: correo,
            telefono: telefono,
            direccion: direccion,
        })
         navigate('/clientes');
    }

    useEffect( () =>{
        getclientesID()
      //eslint-disable-next-line
    }, []);

    const getclientesID = async () => {
       const resul =  await APIInvoke.invokeGET(`/api/clientes/${id}`)
       setNombres(resul.nombres)
       setApellidos(resul.apellidos)
       setCedula(resul.cedula)
       setCorreo(resul.correo)
       setTelefono(resul.telefono)
       setDireccion(resul.direccion)
       
    }


  return (
    <div className="wrapper">
    <Navbar></Navbar>
    <SidebarContainer></SidebarContainer>

    <div className="content-wrapper">

        <ContentHeader
            titulo={"Editar Clientes"}
            breadCrumb1={"Listado de clientes"}
            breadCrumb2={"editar"}
            ruta1={"/clientes/editar"}
        />
    <section className="content" >
            <div className="card">
                <div className="card-header">                            
                    <div className="card-tools">

                        <button type="button" className="btn btn-tool" data-card-widget="collapse"
                            title="Collapse">
                            <i className="fas fa-times" />
                        </button>

                        <button type="button" className="btn btn-tool" data-card-widget="remove"
                            title="Remove">
                            <i className="fas fa-items" />
                        </button>
                    </div>
                </div>

                <div className="card-body">
                    <form onSubmit={editarClientes}>

                        <div className="card-body" >
                            <div className="form-group">
                                <label htmlFor="nombres" > Nombres </label>
                                <input type="text"
                                className="form-control"
                                id='nombres'
                                name='nombres'
                                placeholder="Ingrese los nombres del Cliente"
                                value={nombres}
                                onChange={(e) => setNombres(e.target.value)}
                                required
                                />   
                          </div>
                        </div>

                        <div className="input-group-append">
                            <div className="input-group-text">
                               <span className="fas fa-envelope"/>
                            </div>
                        </div>


                        <div className="card-body" >
                            <div className="form-group">
                                <label htmlFor="apellidos" > Apellidos </label>
                                <input type="text"
                                className="form-control"
                                id='apellidos'
                                name='apellidos'
                                placeholder="Ingrese el apellido del Cliente"
                                value={apellidos}
                                onChange={(e) => setApellidos(e.target.value)}
                                required
                                />   
                          </div>
                        </div>

                        <div className="input-group-append">
                            <div className="input-group-text">
                               <span className="fas fa-envelope"/>
                            </div>
                        </div>



                        <div className="card-body" >
                            <div className="form-group">
                                <label htmlFor="cedula" > Cedula </label>
                                <input type="number"
                                className="form-control"
                                id='cedula'
                                name='cedula'
                                placeholder="Ingrese la cedula del Cliente"
                                value={cedula}
                                onChange={(e) => setCedula(e.target.value)}
                                required
                                />   
                          </div>
                        </div>

                        <div className="input-group-append">
                            <div className="input-group-text">
                               <span className="fas fa-envelope"/>
                            </div>
                        </div>

                        <div className="card-body" >
                            <div className="form-group">
                                <label htmlFor="email" > Correo </label>
                                <input type="text"
                                className="form-control"
                                id='correo'
                                name='correo'
                                placeholder="Ingrese el correo del Cliente"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                                required
                                />   
                          </div>
                        </div>

                        <div className="input-group-append">
                            <div className="input-group-text">
                               <span className="fas fa-envelope"/>
                            </div>
                        </div>


                        <div className="card-body" >
                            <div className="form-group">
                                <label htmlFor="telefono" > Telefono </label>
                                <input type="number"
                                className="form-control"
                                id='telefono'
                                name='telefono'
                                placeholder="Ingrese el telefono del Cliente"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                                required
                                />   
                          </div>
                        </div>

                        <div className="input-group-append">
                            <div className="input-group-text">
                               <span className="fas fa-envelope"/>
                            </div>
                        </div>


                        <div className="card-body" >
                            <div className="form-group">
                                <label htmlFor="direccion" > Direccion </label>
                                <input type="text"
                                className="form-control"
                                id='direccion'
                                name='direccion'
                                placeholder="Ingrese la direccion del Cliente"
                                value={direccion}
                                onChange={(e) => setDireccion(e.target.value)}
                                required
                                />   
                          </div>
                        </div>

                        <div className="input-group-append">
                            <div className="input-group-text">
                               <span className="fas fa-envelope"/>
                            </div>
                        </div>

                        <div className="card-footer">
                         <button type="submit" className="btn btn-primary">
                            Editar
                         </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
    <Footer></Footer>
</div>

   
  )
}

export default EditarClientes

