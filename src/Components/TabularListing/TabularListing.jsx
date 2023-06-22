import React, {useEffect, useState} from 'react'
import getResource from '../../api/getResource';
import Table from '../Table/Table';

const TabularListing = ({api}) => {

    const [list, setList] = useState([]);

    useEffect(()=>
    {
        const getData = async () =>
        {
            return await getResource(api);
        }

        getData()
        .then(res=>setList(res[Object.keys(res)[0]]))
        .catch(err=>{throw new Error(err)});

    },[]);

    return (
       <Table list={list}/>
    )
}

export default TabularListing