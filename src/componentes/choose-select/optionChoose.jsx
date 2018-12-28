import React from 'react';

export default (props) => {
    const lista = props.lista || []
    return lista.map(opcao => {
        return (<option key={ opcao[props.id] }>{ opcao[props.descricao] }</option>)
    })
}
