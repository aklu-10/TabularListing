import React from 'react'
import TableRow from '../TableRow/TableRow'

const Table = ({list}) => {

    function generateFields(value)
    {
        
        if(typeof value != 'object')
        {
            if(typeof value==='string' && ['jpg','png'].some(extension=>value.includes(extension)))
            {
                return <td><img src={value} width={200}/></td>
            }
            else
            {
                return <td><span>{value}</span></td>
            }
        }
        else
        {
            if(Array.isArray(value) && value[0])
            {
                if(typeof value[0]==='string' && value[0].endsWith('jpg'))
                {
                    return <td style={{display:"flex"}}>
                                { value.map(item=>
                                {   
                                    return <img src={item} width={80}/>
                                })}
                            </td>
                }
                else if(typeof value[0]==='object')
                {
                    return value.map(item=>
                    {
                        return <td>
                        {
                            Object.keys(item).map(elem=>(
                                <span>{item[elem]} </span>
                            ))
                        }
                        </td>
                    })
                }
            }
            else
            {
                return Object.keys(value).map((item)=>
                {
                    if(typeof value === 'string')
                    {
                        return <span>{value[item]}</span>
                    }
                    else
                    {
                        if(typeof value[item] === 'string')
                        {
                            return <span><mark>{item}:</mark>{value[item]}</span>
                        }
                        else
                        {
                            return Object.keys(value[item]).map(elem=>
                                {
                                    if(typeof value[item][elem] === 'string')
                                        return <span>{value[item][elem]}</span>
                                    else{
                                       return typeof value[item][elem] != 'object' && <span><span><mark>{elem}:</mark>{value[item][elem]}</span></span>
                                    }
                                })
                        }
                    }
                })
            }

        }
    }


  return (

    <table border={1}>

        <TableRow>
          {
              list.length!=0 &&
              Object.keys(list[0]).map((item, index)=>{

                   return Array.isArray(list[0][item]) ? 
                   <th key={index} colSpan={list[0][item].length}>{item}</th>
                   : <th key={index}>{item}</th>
            })                    
          }
        </TableRow>

        <tbody>
        {
            list.length && 
            list.map((item, index)=>(
                <TableRow key={index}>
                  {
                    Object.values(item).map(elem=>{
                        return generateFields(elem)
                    })
                  }
                </TableRow>
            ))
        }
        </tbody>
</table>
  )
}

export default Table