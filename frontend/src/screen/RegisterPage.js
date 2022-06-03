import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Multiselect } from "multiselect-react-dropdown";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {createCitizens} from '../action/citizenActions'

function RegisterPage() {

  const dispatch = useDispatch();
  const citizenCreate = useSelector(state => state.citizenCreate);
  const {error, loading, success} = citizenCreate;
  let navigate = useNavigate();

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [address, setAddress] = useState('')
  const [City, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [cellular, setCellular] = useState('')
  const [landLine, setLandLine] = useState('')
  const [hadCovid, setHadCovid] = useState(false)
  const [otherCondition, setOther] = useState('');
  const [previousConditions, setPreviousConditions] = useState([])

  useEffect(() => {
    if(success) {
      dispatch({ type: 'PRODUCT_CREATE_RESET' });
      navigate('/summary');
    }
  },[[dispatch, navigate, success]])


  const submitHandler = (e) => {
    e.preventDefault();

    var Conditions = " ";

    previousConditions.forEach(condition => Conditions += `${condition}, `);

    dispatch(createCitizens({
      firstName,
      lastName,
      dateOfBirth,
      address,
      City,
      zipCode,
      cellular,
      landLine,
      hadCovid,
      Conditions,
      otherCondition
    }))
  }

  return (
    <Form onSubmit={submitHandler}>
      {
          loading ? <h2>Loading...</h2>
                  : error ? <h3>{error}</h3>
                  :
      <><Row>
              <h4>Please enter your information:</h4>
            </Row><br></br><Row className="mb-3">
                <Form.Group as={Col} controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    placeholder="Enter first name"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col} controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    placeholder="Enter last name"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col} controlId="dateOfBirth">
                  <Form.Label>Date Of birth</Form.Label>
                  <Form.Control
                    type="date"
                    required
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)} />
                </Form.Group>
              </Row><Row className="mb-3">
                <Form.Group as={Col} controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    placeholder="1234 Main St"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col} controlId="state"
                  required
                  value={City}
                  onChange={(e) => setCity(e.target.value)}>
                  <Form.Label>City</Form.Label>
                  <Form.Select>
                  <option selected disabled>Choose...</option>
                    <option>Jerusalem</option>
                    <option>Netanya</option>
                    <option>Lod</option>
                    <option>Ramla</option>
                    <option>Tiberias</option>
                    <option>Neharia</option>
                    <option>Be'er Sheva</option>
                    <option>Tel Aviv</option>
                    <option>Haifa</option>
                    <option>Eilat</option>
                    <option>Ramat Gan</option>
                    <option>Gush Ezion</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="zip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)} />
                  <Form.Text muted>
                    Optional
                  </Form.Text>
                </Form.Group>
              </Row><Row className="mb-3">
                <Form.Group as={Col} controlId="cellularPhone">
                  <Form.Label>Cellular Phone</Form.Label>
                  <Form.Control
                    required
                    value={cellular}
                    onChange={(e) => setCellular(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col} controlId="landLine">
                  <Form.Label>Land Line</Form.Label>
                  <Form.Control
                    required
                    value={landLine}
                    onChange={(e) => setLandLine(e.target.value)} />
                </Form.Group>
              </Row>
              
              <Row>
                <Form.Label>Previous Conditions: </Form.Label>
                <Form.Group as={Col} className="mb-3" id="formGridCheckbox"
                value={previousConditions}
                onChange={(e)=>setPreviousConditions([...previousConditions, "Diabetes"])}>
                <Form.Check type="checkbox" label="Diabetes" />
              </Form.Group>

              <Form.Group as={Col} className="mb-3" id="formGridCheckbox"
                value={previousConditions}
                onChange={(e)=>setPreviousConditions([...previousConditions, "Allergies"])}>
                <Form.Check type="checkbox" label="Allergies" />
              </Form.Group>
              <Form.Group as={Col}> </Form.Group><Form.Group as={Col}> </Form.Group><Form.Group as={Col}> </Form.Group><Form.Group as={Col}> </Form.Group><Form.Group as={Col}> </Form.Group><Form.Group as={Col}> </Form.Group>

              </Row>

              <Row>
                <Form.Group as={Col} className="mb-3" id="formGridCheckbox"
                value={previousConditions}
                onChange={(e)=>setPreviousConditions([...previousConditions, "Stomach Aches"])}>
                <Form.Check type="checkbox" label="Stomach Aches" />
              </Form.Group>

              <Form.Group as={Col} className="mb-3" id="formGridCheckbox"
                value={previousConditions}
                onChange={(e)=>setPreviousConditions([...previousConditions, "Cancer"])}>
                <Form.Check type="checkbox" label="Cancer" />
              </Form.Group>
              <Form.Group as={Col}> </Form.Group><Form.Group as={Col}> </Form.Group><Form.Group as={Col}> </Form.Group><Form.Group as={Col}> </Form.Group><Form.Group as={Col}> </Form.Group><Form.Group as={Col}> </Form.Group>
              </Row>

              <Row>

                <Form.Group as={Col}>
                <Form.Label>  Other conditions: </Form.Label>
                  <Form.Control 
                          label="Add conditions"
                          variant="filled"
                          onChange={(e) => setOther(e.target.value)}>
                  </Form.Control>
                  <Form.Text id="passwordHelpBlock" muted>
                    separate by comma
                  </Form.Text>
                </Form.Group>

                <Form.Group as={Col}> </Form.Group>
                <Form.Group as={Col}> </Form.Group>
              </Row><br></br>
              
              <Form.Group className="mb-3" id="formGridCheckbox"
                required
                value={hadCovid}
                onChange={()=>setHadCovid(!hadCovid)}>
                <Form.Check type="checkbox" label="I've been infected by COVID-19" />
              </Form.Group>
              
              <br></br>
              
              <Button variant="primary" type="submit">
                Submit
              </Button></>
  }
    </Form>
  );
}

export default RegisterPage;
