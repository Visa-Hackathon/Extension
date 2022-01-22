/* global chrome */
import React, { useEffect } from "react";
import axios from "axios";

// React component imports
import CircleScore from "./CircleScore";
import Accordions from "./Accordions";

// Boostrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function App() {
  const testFunction = async () => {
    try {
      let queryOptions = { active: true, currentWindow: true };
      chrome.tabs.query(queryOptions, function (res) {
        console.log(res[0].url);
        axios
          .get("http://127.0.0.1:5000/companycontroller/get", {
            params: {
              testParam: "alex",
            },
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          });
      });
      console.log("Testing console");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    try {
      let queryOptions = { active: true, currentWindow: true };
      chrome.tabs.query(queryOptions, function (res) {
        console.log(res[0].url);
      });
      console.log("Testing console");
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="App">
      <Card className="text-center" border="success" style={{ width: "18rem" }}>
        <Card.Body>
          <CircleScore />
        </Card.Body>
        <Card.Header as="h1">Carbon Score</Card.Header>
        <Card.Body>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          <Button variant="success" onClick={testFunction}>
            TEST FUNCTION
          </Button>
        </Card.Body>
        <Accordions />
      </Card>
    </div>
  );
}

// /* global chrome */
// async function getCurrentTab() {
//   let queryOptions = { active: true, currentWindow: true };
//   chrome.tabs.getCurrent(tab => {
//     console.log(tab)
//   })
//   return "hi";
// }

// chrome.runtime.onInstalled.addListener(async () => {
//   console.log("testing2")
//   console.log(await getCurrentTab());
// });

// chrome.runtime.onInstalled.addListener((reason) => {
//   console.log("testing1")
//   if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
//     chrome.tabs.create({
//       url: 'onboarding.html'
//     });
//   }
// });
