import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OptionChoose from './optionChoose';
import axios from 'axios'

export default class ChooseSimples extends Component {

    constructor(props) {
        super(props)
        this.state = {
            lista: props.lista || [],
            url: props.url || '',
            id: props.id || '_id',
            descricao: props.descricao || 'description'
        }
        this.refresh()
    }
    
    refresh() {
        if(this.state.url !== '') {
            axios.get(this.state.url).then(
                resp => {
                    this.setState({ lista: resp.data.dados.registro })
                }
            )
        }
    }
    

    render() {
        return(
            <div className="form-group">
                <label>Select list:</label>
                <select className="form-control" id="sel1">
                    <OptionChoose lista={this.state.lista} id={this.state.id}
                        descricao={this.state.descricao}/>
                </select>
            </div>
        )
    }
}

