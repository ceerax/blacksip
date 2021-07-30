import React, { useEffect, useState } from 'react'
import './page.css'




import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";



function Pages() {
    const [producto, setproducto] = useState([]);
    const formato = new Intl.NumberFormat("en",{style:'currency',currency:'USD'})

    useEffect(() => {
        getProductos()
    },[])

    return (
        <body className="row p-3">
            {/* formulario */}
            <main className="col-md-12 col-lg-7 mt-5">
                <div className="card">
                    <div className="card-header">
                        <h5>DIRECCIÓN DE ENVÍO</h5>
                    </div>
                    <div className="card-body row">
                        <div className="col-md-12 col-lg-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faUser} /></span>
                                </div>
                                <input type="text" class="form-control" placeholder="Nombre" aria-label="Nombre " aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faUser} /></span>
                                </div>
                                <input type="text" class="form-control" placeholder="Apellidos" aria-label="Apellidos" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faEnvelope} /></span>
                                </div>
                                <input type="email" class="form-control" placeholder="Correo Electrónico" aria-label="Correo Electrónico" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faPhone} /></span>
                                </div>
                                <input type="tel" class="form-control" placeholder="Número de teléfono" aria-label="Número de teléfono" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                                </div>
                                <input type="number" class="form-control" placeholder="Código postal" aria-label="Código postal" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                                </div>
                                <select name="" id=""><option value='colonia' disabled ></option></select>                                
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faMapMarkerAlt} />  </span>
                                </div>
                                <input type="text" class="form-control" placeholder="Estado/Región" aria-label="Estado/Región" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                                </div>
                                <input type="text" class="form-control" placeholder="Ciudad" aria-label="Ciudad" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                                </div>
                                <input type="text" class="form-control" placeholder="Delegación o municipió" aria-label="Delegación o municipió" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faMapMarkedAlt} /></span>
                                </div>
                                <input type="text" class="form-control" placeholder="Calle" aria-label="Calle" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="col-12 col-md-4 pr-0">
                            <button className=" color-btn text-white p-1">Libreta de Direcciones</button>
                        </div>
                        <div className="col-12 col-md-2 pr-0 ">
                            <button className="color-btn text-white p-1">guardar</button>
                        </div>
                        <div className="col-12 mt-3 row">
                            <div className="col-1 pr-0">
                                <input type="checkbox" aria-label="Checkbox for following text input" />
                            </div>
                            <div className="col-11 pl-0">
                                <p>Utilizar como dirección de facturación.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Aside */}

            <aside className="col-md-12 col-lg-5">
                <div className="card mt-5">
                    <h5 className="card-header aside d-flex justify-content-center">RESUMEN DE LA ORDEN</h5>
                    <div className="card-body">
                        <div className="col-12">
                            {
                                producto.map((item, index) => {
                                    return (
                                        <div className="col-12 row border-b">
                                            <div className="col-12 col-md-3 d-flex justify-content-center">
                                                <img className="img-size" src={item.image} alt="" />
                                            </div>
                                            <div className="col-12 col-md-6 d-flex justify-content-center">
                                                <p>{item.name}</p>
                                            </div>
                                            <div className="col-12 col-md-3 d-flex justify-content-center">
                                                <p>{ formato.format(item.price)}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="col-12 mt-4 d-flex justify-content-end">
                                <a href="#" class="btn btn-primary">Editar</a>
                            </div>
                        </div>
                        <div className="mt-4 pt-2 card-footer1 row justify-content-between">
                            <div className="col-5 col-md-3 ml-3">
                                <p>SUBTOTAL <br />ENVÍO</p>
                            </div>
                            <div className="col-5 col-md-3">
                                <p>$13,974.oo <br />A calcular</p>
                            </div>
                        </div>
                        <div className="card-footer2 pt-2 row justify-content-between">
                            <div className="col-5 col-md-3 ml-3">
                                <p className="mt-1">TOTAL</p>
                            </div>
                            <div className="col-5 col-md-3">
                                <p className="mt-1">$13,974.oo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </body>
    )

    function getProductos() {
        consultar().then((value) => {
            setproducto(value);
            
            console.log(value);
        })
    }

    async function consultar() {
        const response = await fetch(`https://blackisp.herokuapp.com/products`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        const json = await response.json();
        return json
    }

}
export default Pages