import React from "react";
import { useState } from "react";
import './../App.css';
export function Task1() {
    const [employeeInfo, setemployeeInfo] = useState([
        {
            "id": 1,
            "name": "cerulean",
            "year": 2000,
            "color": "#98B2D1",
            "pantone_value": "15-4020"
        },
        {
            "id": 2,
            "name": "fuchsia rose",
            "year": 2001,
            "color": "#C74375",
            "pantone_value": "17-2031"
        },
        {
            "id": 3,
            "name": "true red",
            "year": 2002,
            "color": "#BF1932",
            "pantone_value": "19-1664"
        },
        {
            "id": 4,
            "name": "aqua sky",
            "year": 2003,
            "color": "#7BC4C4",
            "pantone_value": "14-4811"
        },
        {
            "id": 5,
            "year": 2004,
            "color": "#E2583E",
            "pantone_value": "17-1456"
        },
        {
            "id": 6,
            "name": "blue turquoise",
            "year": 2005,
            "color": "#53B0AE",
            "pantone_value": "15-5217"
        }]);
    return (
        <>
            <h1>Task 1</h1>


            <table id="customers">
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                    <th>Country</th>
                    <th>Country</th>
                </tr>
                {employeeInfo.map((list, index) => (
                    <tr key={index} data-index={index}>
                        <td>{list.id}</td>
                        <td>{list.name}</td>
                        <td>{list.year}</td>
                        <td>{list.year}</td>
                        <td>{list.year}</td>
                    </tr>
                ))}
            </table>

        </>
    )
}
