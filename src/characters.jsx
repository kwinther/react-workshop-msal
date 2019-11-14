import React, { Component } from "react";
import { Card, Button, Container, CardColumns } from "react-bootstrap";
import { authProvider } from "./authProvider";

export default class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false
    };
  }

  componentDidMount() {
    console.log(authProvider);
    // var headers = new Headers();
    // var bear = window.msal.acquireTokenSilent({scopes: ["https://norconsult365.onmicrosoft.com/ReactREST/user_impersonation"]});
    // var bearer = "Bearer " + access_token;
    // headers.append("Authorization", bearer);
    // var options = {
    //      method: "GET",
    //      headers: headers
    // };
    // var graphEndpoint = "https://graph.microsoft.com/v1.0/me";

    this.setState({ isLoading: true });
    fetch("https://rickandmortyapi.com/api/character/")
      .then(response => response.json())
      .then(data => this.setState({ data: data.results, isLoading: false }));
  }
  render() {
    const { data, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading chars</p>;
    } else {
      return (
        <div>
          <Container>
            <CardColumns>
              {data.map(d => (
                <Card key={d.id} style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={d.image} />
                  <Card.Body>
                    <Card.Title>{d.name}</Card.Title>
                    <Card.Text>
                      {d.name} is {d.status}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              ))}
            </CardColumns>
          </Container>
        </div>
      );
    }
  }
}
