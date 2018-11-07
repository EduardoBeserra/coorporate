import React from 'react';

export default (props) => {
    const lista = props.lista || []
    return lista.map(opcao => (
        <option key={ opcao._id }>{ opcao.description }</option>
    ))
}
