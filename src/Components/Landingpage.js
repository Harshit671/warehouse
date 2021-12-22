import React, { useEffect, useState } from 'react'
import Warehouse from "../warehouse.json";
import '../App.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchFilterData, fetchInitialData, fetchSearchData } from '../store/actions';
import { useSelector } from 'react-redux';
import { cityFilter, clusterFilter, spaceFilter } from '../util';
import { showDocument } from '../mongo';
import { Button } from '@mui/material';

const Landingpage = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    useEffect(async () => {
        const idata = await showDocument();
        console.log(idata);

        setData(idata);
        dispatch(fetchInitialData(idata));
        console.log(idata)
    }, [])

    const state = useSelector(state => state.warehouse)
    const [search, setSearch] = useState("");
    const handleSearch = () => {
        const searchData = data.filter(item => {
            return item.name === search;
        })
        dispatch(fetchSearchData(search === "" ? Warehouse : searchData));
    }



    const handleFilter = () => {
        const city = document.getElementById("city").value;
        const cluster = document.getElementById("cluster").value;
        const space = document.getElementById("space").value;
        let filtered = [city, cluster, space];
        console.log(filtered)
        const filteredData = data.filter(item => {
            return (filtered[0] == 'All' ? true : item.city == filtered[0]) &&
                (filtered[1] == 'All' ? true : item.cluster == filtered[1]) &&
                (filtered[2] == 'All' ? true : item.space_available == filtered[2])
        })
        console.log(filteredData)
        dispatch(fetchFilterData(filteredData))

    }
    return (
        <>
            <div className="search">
                <div className="filter">
                    <p>Filters:</p>
                    <div>
                        <select name="city" id="city">
                            <option vlaue="All">All</option>
                            {
                                cityFilter(data).map(item => {
                                    return (
                                        <option value={item}>{item}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <select name="cluster" id="cluster">
                            <option value="All">All</option>
                            {
                                clusterFilter(data).map(item => {
                                    return (
                                        <option value={item}>{item}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <select name="space" id="space">
                            <option value="All">All</option>
                            {
                                spaceFilter(data).map(item => {
                                    return (
                                        <option value={item}>{item}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <button onClick={() => handleFilter()}>Apply</button>
                </div>
                <div>
                    <input placeholder="search warehouse..." autoComplete='ON' onChange={(e) => setSearch(e.target.value)} /> <button onClick={() => handleSearch()}><i className="fas fa-search"></i></button>
                </div>
            </div>
            <div className="App">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>Edit</th>
                    </tr>
                    {state[0].length != 0 ? (
                        state[0] && state[0].map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.city}</td>
                                    <td><Button variant="contained"><Link to={`/house/${item.code}`}>View</Link></Button></td>
                                </tr>
                            )
                        })
                    ) : (
                        <p>No such Warehouse Found</p>
                    )
                    }
                </table>
            </div>
        </>
    )
}

export default Landingpage
