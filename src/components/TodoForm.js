import React, { Component } from 'react';

class TodoForm extends Component {
  constructor () {
    super();
    this.state = {
      Titulo: '',
      Responsable: '',
      Descripcion: '',
      Prioridad: 'low'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      Titulo: '',
      Responsable: '',
      Descripcion: '',
      Prioridad: 'low'
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="Titulo"
              className="form-control"
              value={this.state.Titulo}
              onChange={this.handleInputChange}
              placeholder="Titulo"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="Responsable"
              className="form-control"
              value={this.state.Responsable}
              onChange={this.handleInputChange}
              placeholder="Responsable"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="Descripcion"
              className="form-control"
              value={this.state.Descripcion}
              onChange={this.handleInputChange}
              placeholder="Descripcion"
              />
          </div>
          <div className="form-group">
            <select
                name="Prioridad"
                className="form-control"
                value={this.state.Prioridad}
                onChange={this.handleInputChange}
              >
              <option>Bajo</option>
              <option>Medio</option>
              <option>Alto</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    )
  }

}

export default TodoForm;
