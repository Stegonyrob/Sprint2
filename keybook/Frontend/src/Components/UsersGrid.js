import React from 'react';
// import GrayScale from './GrayScale';

function UsersGrid() {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Comunidad</title>
            {/* BOOTSTRAP CSS */}
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
                crossOrigin="anonymous"
            />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
            />
            {/* FONT AWESOME */}
            {/* CSS STYLESHEETS (después de Bootstrap!)*/}
            <link rel="stylesheet" href="../css/styles.css" />
            {/* BARRA DE NAVEGACIÓN */}

            <main>
                {/*Menu  búsqueda amigos*/}
                <div className="container main-structure">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="contenedor-amigos">
                                <div className="search-friends default-card">
                                    <label htmlFor="">
                                        <h4>COMUNIDAD</h4>
                                    </label>
                                    <form id="find-user-form" className="d-flex">
                                        <input
                                            className="form-control me-2 search-content-input"
                                            id="searchFriends"
                                            type="search"
                                            name="searchKey"
                                            placeholder="Búsqueda..."
                                            aria-label="Buscar"
                                            size="50"
                                        />
                                        <button className="btn btn-outline-success" type="submit">
                                            <i className="fa-solid fa-magnifying-glass icon search-icon" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Menu amigos*/}
                <div className="container main-structure">
                    {/* <div class="row friends-row"></div> */}
                    <article className="row friends-row" />
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item ">
                                <a className="page-link " href="usersGrid.html" tabIndex="-1">
                                    Previous
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="usersGrid.html">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="usersGrid.html">
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="usersGrid.html">
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="usersGrid.html">
                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </main>

        </>
    );
}

export default UsersGrid;


