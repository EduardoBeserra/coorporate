import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OptionChoose from './optionChoose';
import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'
export default class ChooseSimples extends Component {

    constructor(props) {
        super(props)
        this.state = { tarefas: [] }
        this.refresh()
    }
    
    refresh() {
        axios.get(URL).then(
            resp => this.setState({ tarefas: resp.data })
        )
    }
    

    render() {
        return(
            <div className="form-group">
                <label>Select list:</label>
                <select className="form-control" id="sel1">
                    <OptionChoose lista={this.state.tarefas}/>
                </select>
            </div>
        )
    }
}

