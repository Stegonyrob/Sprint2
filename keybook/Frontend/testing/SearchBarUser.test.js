import { JSDOM } from 'jsdom';
import { expect } from 'chai';
import { render, unmountComponentAtNode } from 'react-dom';
import React from 'react';
import { fireEvent, getByText } from '@testing-library/react';
import SearchBarUsers from '../src/Components/users/SearchBarUsers';

// Esto configura el entorno de DOM virtual JSDOM durante las pruebas
const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;

//aquí empiezan las distintas pruebas
describe('SearchBarUsers', () => {
    //En container metemos el propio componente searchbar
    let container = null;

    //Este beforeeach crea un div para usar ese container que aloja el componente durante la prueba
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });
    //Este after se ejecuta tras cada prueba y borra el contenido del container
    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
    });
    // Esta prueba verifica que dentro del container se renderice el search bar y usa el expect para comprobar que exista un elemento con el id find-user... dentro
    it('Esto verifica que el componente searchbar se renderice', () => {
        render(<SearchBarUsers onSearchResults={() => { }} />, container);
        expect(container.querySelector('#find-user-form')).to.exist;
    });
    // Esta es otra prueba que verifica si el componente actualiza correctamente la clave de búsqueda cuando el valor del input cambia.Se simula con el fireEvent.change y luego se realiza una afirmación para comprobar si el valor del elemento de input searchKey se actualiza ocn el nombre introducido.  
    it('Esto actualiza la search key para ver si se actualiza con el nombre de un usuario', () => {
        render(<SearchBarUsers onSearchResults={() => { }} />, container);
        const input = container.querySelector('#searchFriends');
        fireEvent.change(input, { target: { value: 'Adrián' } });
        const searchKeyElement = container.querySelector('input[name="searchKey"]');
        expect(searchKeyElement.value).to.equal('Adrián');
    });
});


