import React, { useState, useEffect }  from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import {useDispatch, useSelector} from 'react-redux'
import {listCitizens, listCitizensByCity, listCitizensByDateOfBirth} from '../action/citizenActions'
import { useNavigate } from "react-router-dom";


function SummaryPage() {

  const dispatch = useDispatch();
  const [searchByCity, setSearchByCity] = useState('') 
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [show, setShow] = useState("all")

  let navigate = useNavigate();

  const citizenList = useSelector(state => state.citizenList);
  const {error, loading, citizens} = citizenList;

  const citizenByCity = useSelector(state => state.citizenByCity);
  const {citizensByCity} = citizenByCity;

  const citizenByDate = useSelector(state => state.citizenByDate);
  const {citizensByDate} = citizenByDate;


  useEffect(() => {
    dispatch(listCitizens())
    setShow("all")
  },[dispatch])

const showAllRows= async () =>  {
  dispatch(listCitizens())
  setShow("all")
}

const searchCity = () => {
  if (searchByCity != '') {
    dispatch(listCitizensByCity(searchByCity))
    setSearchByCity('')
    setShow("city")
  }
}

const searchByDate = () => {
  if (startDate != '' && endDate != '') {
    dispatch(listCitizensByDateOfBirth(startDate, endDate))
    setEndDate('')
    setStartDate('')
    setShow("date")
  }
}

  return (
    <><Form inline="True">
      {loading ? <h2>Loading...</h2>
        : error ? <h3>{error}</h3>
          :
          <><Row>
            <Form.Group as={Col} >
              <Form.Control
                type="text"
                value={searchByCity}
                onChange={(e) => setSearchByCity(e.target.value)}
                className="mr-sm-2 ml-sm-5" >
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col}>
              <Button onClick={searchCity} variant="outline-success" className="p-2">
                Search By City
              </Button>
            </Form.Group>
            <Form.Group as={Col} ></Form.Group>
            <Form.Group as={Col} ></Form.Group>
            </Row>
            <br></br>


            <Row>
            <Form.Group as={Col} >
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="mr-sm-2 ml-sm-5" >
              </Form.Control>
              <Form.Text muted>
                    Start Date
                  </Form.Text>
            </Form.Group>
            <Form.Group as={Col} >
              <Form.Control
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="mr-sm-2 ml-sm-5" >
              </Form.Control>
              <Form.Text muted>
                    End Date
              </Form.Text>
            </Form.Group>
            <Form.Group as={Col}>
              <Button onClick={() => searchByDate()} variant="outline-success" className="p-2">
                Search By Date Range
              </Button>
            </Form.Group>
            <Form.Group as={Col}> </Form.Group>
            <Form.Group as={Col} ></Form.Group>
            <Form.Group as={Col} ></Form.Group>
          </Row><br></br>
          
          
          <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Date of birth</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Zip code</th>
                  <th>Cellular</th>
                  <th>Land line</th>
                  <th>Had COVID-19 before</th>
                  <th>Previous conditions</th>
                </tr>
              </thead>
              <tbody>

                { show == "all" ? 
                citizens.map(citizen => (
                  <tr>
                    <td>
                      {citizen.id}
                    </td>
                    <td>
                      {citizen.firstName}
                    </td>
                    <td>
                      {citizen.lastName}
                    </td>
                    <td>
                      {citizen.dateOfBirth}
                    </td>
                    <td>
                      {citizen.address}
                    </td>
                    <td>
                      {citizen.City}
                    </td>
                    <td>
                      {citizen.zipCode}
                    </td>
                    <td>
                      0{citizen.cellular}
                    </td>
                    <td>
                      0{citizen.landLine}
                    </td>
                    <td>
                      {citizen.hadCovid ? "true" : "false"}
                    </td>
                    <td>
                      {citizen.otherConditions == null ?
                      citizen.previousConditions
                    :
                    citizen.previousConditions + " " + citizen.otherConditions
                    }
                    </td>
                  </tr>
                ))
                : show == "city" ?
                citizensByCity.map(citizen => (
                  <tr>
                    <td>
                      {citizen.id}
                    </td>
                    <td>
                      {citizen.firstName}
                    </td>
                    <td>
                      {citizen.lastName}
                    </td>
                    <td>
                      {citizen.dateOfBirth}
                    </td>
                    <td>
                      {citizen.address}
                    </td>
                    <td>
                      {citizen.City}
                    </td>
                    <td>
                      {citizen.zipCode}
                    </td>
                    <td>
                      0{citizen.cellular}
                    </td>
                    <td>
                      0{citizen.landLine}
                    </td>
                    <td>
                      {citizen.hadCovid ? "true" : "false"}
                    </td>
                    <td>
                    {citizen.otherConditions == null ?
                      citizen.previousConditions
                    :
                    citizen.previousConditions + ", " + citizen.otherConditions
                    }
                    </td>
                  </tr>
                ))
                :
                citizensByDate.map(citizen => (
                  <tr>
                    <td>
                      {citizen.id}
                    </td>
                    <td>
                      {citizen.firstName}
                    </td>
                    <td>
                      {citizen.lastName}
                    </td>
                    <td>
                      {citizen.dateOfBirth}
                    </td>
                    <td>
                      {citizen.address}
                    </td>
                    <td>
                      {citizen.City}
                    </td>
                    <td>
                      {citizen.zipCode}
                    </td>
                    <td>
                      0{citizen.cellular}
                    </td>
                    <td>
                      0{citizen.landLine}
                    </td>
                    <td>
                      {citizen.hadCovid ? "true" : "false"}
                    </td>
                    <td>
                    {citizen.otherConditions == null ?
                      citizen.previousConditions
                    :
                    citizen.previousConditions + ", " + citizen.otherConditions
                    }
                    </td>
                  </tr>
                ))
              }
                
              </tbody>
            </Table></>}

    </Form>

    <div className='d-flex mb-5'>
    <Button variant="contained"
          onClick={() => navigate('/')}>Register Page</Button>
     <Button variant="contained"
          href='http://localhost:8000/api/exportAll'>Export Table</Button>
          {
            show == "city" || show == "date" ?
          <Button variant="contained"
          onClick={showAllRows}>Show Full Table</Button>
          :
          <div/>
          }
      </div></>

  );
}

export default SummaryPage;
