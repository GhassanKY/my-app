import React from 'react'

export const TablaCoches = () => {

    const coches = [
        {
            id: 5,
            Modelo: "Ford",
            Matricula: "X123",
            Color: "Rojo"
        },

        {
            id: 4,
            Modelo: "Chevrolet",
            Matricula: "X193",
            Color: "Verde"
        },

        {
            id: 3,
            Modelo: "Mitsubishi",
            Matricula: "X183",
            Color: "Negro"
        },

        {
            id: 2,
            Modelo: "BMW",
            Matricula: "X153",
            Color: "Azul"
        },
        
        {
            id: 1,
            Modelo: "BMW",
            Matricula: "X153",
            Color: "Azul"
        }
    ]

    const CochesMap = coches.map((Coches) =>

        <tr key={Coches.id}>
            <td> {Coches.Modelo} </td>
            <td> {Coches.Matricula} </td>
            <td> {Coches.Color} </td>
        </tr>
    );



    return (
        <div className='m-5'>
            <hr></hr>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Modelo</th>
                        <th scope="col">Matricula</th>
                        <th scope="col">Color</th>
                    </tr>
                </thead>
                <tbody>
                    {CochesMap}
                </tbody>
            </table>
        </div>
    )
}
