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

        const [charInfo, setCharInfo] = useState(null);

        useEffect(() => {
            axios.get('https://corsanywhere.herokuapp.com/https://lambda-swapi.herokuapp.com/api/people/')
            .then(response => {
                console.log(response.data.results)
                //setCharInfo(response.data.results)
                const newSet = response.data.results;
                newSet.forEach(element => {
                console.log(element)
                    setCharInfo(element)
                });
            })
            .catch(error => {
                console.log('The data was not returned', error);
              });
        }, []);

        return(
            <Container>
                {charInfo && (
                        <Card>
                        <CardBody>
                                <CardTitle>{charInfo.name}</CardTitle>
                                <CardSubtitle>{` height: ${charInfo.height}`}</CardSubtitle>
                                <CardSubtitle>{` Birth: ${charInfo.birth_year}`}</CardSubtitle>
                        </CardBody>
                        </Card>
                )}
            </Container>
        );
    }
  export default StarChar