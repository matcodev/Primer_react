import React from 'react';

const WorkExp = () => {
    return(
        <>
        <div className="sectionTable" id="sectionTable">
            <h1 className="workExp"> Experiencia Laboral </h1>
            <table>
              <thead className="tableExp">
                <tr>
                  <th> Empleador </th>
                  <th> Cargo </th>
                  <th> Año </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> Nuevo Capital </td>
                  <td> Ejecutivo Comercial Senior </td>
                  <td> 2018 - 2019 </td>
                </tr>
                <tr>
                  <td> Banco Crédito e Inversiones </td>
                  <td> KAM </td>
                  <td> 2016 - 2018 </td>
                </tr>
                <tr>
                  <td> Tanner Servicios Financieros </td>
                  <td> Ejecutivo Comercial </td>
                  <td> 2014 - 2016 </td>
                </tr>
              </tbody>
            </table>
          </div>
          </>
    )
}
export default WorkExp