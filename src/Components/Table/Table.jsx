import React from 'react'
import TableRow from '../TableRow/TableRow'
import Edit from '../Edit/Edit'
import Delete from '../Delete/Delete'

const Table = ({list}) => {

    function generateFields(obj)
    {
        return Object.keys(obj).map(keyItem=>
        (
            <td>
            {
                (typeof obj[keyItem]==='object') ? generateFields(obj[keyItem]) : obj[keyItem]+''
            }
            </td>
        ))
    }

  return (

        <table style={{width:'100%'}}>

            <TableRow>
            {
                list.length!=0 &&
                Object.keys(list[0]).map((item, index)=>{

                    return <th key={index}>{item}</th>
                })                    
            }
            </TableRow>

            <tbody>
            {
                list.length && 
                list.map((item, index)=>
                (
                    <TableRow key={index}>
                    {
                        generateFields(item)
                    }
                    <td><Edit/></td>
                    <td><Delete delId = {item.id}/></td>
                    </TableRow>
                ))
            }
            </tbody>
        </table>
  )
}

export default Table