import React, { useState, useEffect } from 'react';

function ProfileDefault() {
    return (
        <div id="cuenta">
            <div class="container-fluid main-structure">
                <div class="row">
                    <div class="col-sm-5 col-md-4 col-lg-3">
                        <div class="default-card education">
                            <h4>
                                <i class="fa-solid fa-user-graduate icon" title="Formacion"></i>
                                FORMACION
                            </h4>
                            <ul class="profile-data">
                                <a id="formacion">
                                    Escuela
                                    <p>Títulación</p>
                                </a>
                            </ul>
                            <button class="btn btn-outline-warning btn-sm">Editar</button>
                        </div>
                        <div class="default-card languages">
                            <h4>
                                <i class="fa-solid fa-language icon" title="Idiomas"></i>
                                IDIOMAS
                            </h4>

                            <ul class="profile-data">
                                <a>
                                    Idioma
                                    <p>Nivel</p>
                                </a>
                            </ul>
                            <button class="btn btn-outline-warning btn-sm">Editar</button>
                        </div>
                        <div class="default-card habilidades">
                            <h4>
                                <i class="fa-solid fa-computer icon" title="Técnicas"></i>
                                HABILIDADES
                            </h4>
                            <ul class="profile-data">
                                <li>Listado de habilidades</li>
                            </ul>
                            <button class="btn btn-outline-warning btn-sm">Editar</button>
                        </div>
                    </div>
                    <div class="col-sm-7 col-md-7 col-lg-6">
                        <div class="default-card">
                            <div class="profile-details">
                                <div>
                                    <div>
                                        <h2 id="profile-fullName">Nombre completo</h2>
                                        <input type="button" class="btn btn-outline-warning btn-sm" value="Editar"
                                            onclick="personalDetails()" />
                                    </div>
                                </div>
                                <div>
                                    <h5 id="profile-location">Ciudad, </h5>
                                    <h5 id="profile-loc-country">País</h5>
                                    <h5 id="profile-birthDate">Fecha nacimiento</h5>
                                </div>
                            </div>
                            <div class="user-bio profile-data">
                                <img id="profile-avatar" alt="avatar" class="avatar avatar-perfil" />
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-5 col-md-4 col-lg-3">
                        <div class="default-card contact">
                            <h4>
                                <i class="fa-solid fa-phone icon" title="Contacto"></i>
                                CONTACTO
                            </h4>
                            <ul class="profile-data">
                                <li id="profile-email">Correo</li>
                                <form id="email-edit-form" action="/users/${id}/email" method="POST">
                                    <input id="new-email" placeholder="EMAIL" type="email"></input>
                                    <button type="submit" id="edit-email" class=" btn btn-warning btn-sm">
                                        Editar
                                    </button>
                                </form>
                                <li id="profile-phone">Teléfono</li>
                                <form id="phone-edit-form" action="/users/${id}/phone" method="POST">
                                    <input id="new-phone" placeholder="TELEFONO"></input>
                                    <button type="submit" id="edit-phone" class=" btn btn-warning btn-sm">
                                        Editar
                                    </button>
                                </form>
                                <a href="https://www.facebook.com/" class="fa-brands fa-facebook icon" title="Facebook"
                                    target="”_blank”"></a>
                                <a href="https://www.linkedin.com/feed/" class="fa-brands fa-linkedin icon" title="Linkedin"
                                    target="”_blank”"></a>
                                <a href="https://github.com/" class="fa-brands fa-github icon" title="GitHub" target="”_blank”"></a>
                            </ul>
                            <input type="button" class="btn btn-outline-warning btn-sm" value="Editar"
                                onclick="contactInformation()" />
                        </div>

                        <div class="default-card interests">
                            <h4>
                                <i class="fa-solid fa-person-walking icon"></i>INTERESES
                            </h4>
                            <ul class="profile-data">
                                <li>Listado de intereses</li>
                            </ul>
                            <button class="btn btn-outline-warning btn-sm">Editar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileDefault;