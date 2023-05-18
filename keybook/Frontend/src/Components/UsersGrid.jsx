import React from 'react';
// import GrayScale from './GrayScale';
import GetUsers from './GetUsers';
import Footer from './Footer';

function UsersGrid() {

    return (
        <>

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
                    <article className="row friends-row" >
                        <GetUsers />
                    </article>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default UsersGrid;


