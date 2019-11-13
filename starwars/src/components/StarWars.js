import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {
    Container,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle
  } from 'reactstrap';
    const StarChar = () => {
        const [charInfo, setCharInfo] = useState([]);
        useEffect(() => {
            axios.get('https://lambda-swapi.herokuapp.com/api/people/')
            .then(response => {
                console.log("res", response.data.results);
                //setCharInfo(response.data.results)
                setCharInfo(response.data.results);
            })
            .catch(error => {
                console.log('The data was not returned', error);
              });
        }, []);
        return (
          <Container>
            {charInfo.map((char, index) => (
            <Card key = {index}>
                <CardBody>
                  <CardTitle>{char.name}</CardTitle>
                  <CardSubtitle>{` height: ${char.height}`}</CardSubtitle>
                  <CardSubtitle>{` Birth: ${char.birth_year}`}</CardSubtitle>
                </CardBody>
              </Card>
            ))}    
          </Container>
        )
    }
  export default StarChar