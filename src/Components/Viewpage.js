import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { updateDocument } from '../mongo';
import Warehouse from "../warehouse.json";

const Viewpage = () => {
    const [view, setView] = useState({});
    const { id } = useParams();
    const item = useSelector(state => state.warehouse)
    useEffect(() => {

        const filterData = item[0].filter(item => {
            return item.code === id;
        })
        console.log(filterData);
        setView(filterData[0]);
    }, [id])
    const [data, setData] = useState({})
    const handleChange = (e) => {
        let dataf = {
            name: view.name,
            city: view.city,
            cluster: view.cluster,
            space: view.space_available,
            live: view.is_live
        }
        console.log(e.target.name, "     ", e.target.value);
        setData({ ...dataf, [e.target.name]: e.target.value });
        console.log(data);
    }

    const handleSave = async () => {
        await updateDocument(data, view);
    }


    return (
        <>
            <div className='view'>
                <input defaultValue={view.name} name="name" onChange={(e) => handleChange(e)} />
                <input defaultValue={view.city} name="city" onChange={(e) => handleChange(e)} />
                <input defaultValue={view.cluster} name="cluster" onChange={(e) => handleChange(e)} />
                <input defaultValue={(view.space_available)} name="space" onChange={(e) => handleChange(e)} />
                <input defaultValue={view.is_live} name="live" onChange={(e) => handleChange(e)} />
                <button onClick={handleSave}>Save Changes</button>
                <button><Link to="/">Back</Link></button>
            </div>
        </>
    )
}

export default Viewpage
