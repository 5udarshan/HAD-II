import React, { Component } from 'react';
class Table_had extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Roll No</th>
                        <th>Class</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sudarshan</td>
                        <td>392</td>
                        <td>SYIT</td>
                    </tr>
                    <tr>
                        <td>Vasu</td>
                        <td>397</td>
                        <td>SYIT</td>
                    </tr>
                    <tr>
                        <td>Akash</td>
                        <td>402</td>
                        <td>SYIT</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

const Table = () => {
    return (
        <h1>This is a HDA Practical 1</h1>
    );
}

export default Table_had;
export {
    Table
}