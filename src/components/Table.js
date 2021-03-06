import React, { Component } from "react";
import employees from "../API/employees"

class Table extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.setState({ results: employees })
  }

  render() {
    return (
      <table>
        <tr>
          <th>Name</th>
          <th>Department</th>
          <th>PT/FT</th>
        </tr>
        {this.state.results.map(result => (
          <tr>
            <td>{result.name}</td>
            <td>{result.department}</td>
            <td>{result.type}</td>
          </tr>
        ))}
      </table>
    );
  }
}

export default Table;
