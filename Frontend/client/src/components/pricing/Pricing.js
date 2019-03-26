import React, { Component } from 'react'

const pricing = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: "0 auto",
  width: "100%",
  minWidth: "500px"
};

const box = {
  display: "flex",
  flexDirection: "row",
  border: "2px solid #000000",
  width: "50%",
  height: "50%",
  margin: "0 auto"
};

const boxLi = {
  listStyleType: "none",
  margin: "5px 0"
};

const pricingLogo = {
  textAlign: "center"
};

const boxList = {
  display: "flex",
  flexDirection: "column"
};

export default class Pricing extends Component {
    render() {
        return (
            <div style={pricing}>
              <h1 style={pricingLogo}>Pricing</h1>
                <hr />
                <div style={box}>
                  <ul style={boxList}>
                    <li style={boxLi}>Planning Dashboard</li>
                    <li style={boxLi}>Digital RSVPs</li>
                    <li style={boxLi}>Free Website Hosting</li>
                    <li style={boxLi}>Wedding Website</li>
                  </ul>
                </div>
                <hr />
              <h2 style={pricingLogo}>$0</h2>
            </div>
        );
    }
}
