import React from 'react'
import TabularListing from './Components/TabularListing/TabularListing'

const App = () => {

  return (
    <>
      <TabularListing 
        api={'https://dummyjson.com/users'} // get request
        />
        {/* address": 
        {
          "address": "1745 T Street Southeast",
          "city": "Washington",
          "coordinates": {
          "lat": 38.867033,
          "lng": -76.979235
          },
          "postalCode": "20020",
          "state": "DC"
        }, */}

        {/* <table>
          <thead>
              <tr>
                  <th rowSpan="3">Evaluation</th>
                  <th rowspan="3">Approval</th>
                  <th rowSpan="3">Points</th> 
                  <th colSpan="2">Total</th>
                  <th rowspan="3">Date</th>
                  <th rowspan="3">Award Amount</th>
                  <th rowspan="3">Last Modified By</th>
              </tr>
              <tr>
                  <th>Tangible</th>
                  <th>Intangible</th>
                  <th>Intangible</th>
                  <th>Intangible</th>
              </tr>
          </thead>
              
          <tbody>
              <tr>
                  <td>Al/GL</td>
                  <td>Select</td>
                  <td>col1</td>
                  <td>col2</td>
                  <td>col3</td>
                  <td>col4</td>
                  <td>col5</td>
                  <td>col6</td>
              </tr>
          </tbody>
      </table> */}


    </>  
  )

}

export default App