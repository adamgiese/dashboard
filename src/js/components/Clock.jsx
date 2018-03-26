/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
/* eslint-ensable no-unused-vars */


export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    const iterate = () => {
      this.setState({
        time: new Date(),
      });
      this.timeout = setTimeout(iterate, 1000);
    };
    iterate();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const {
      time,
    } = this.state;

    const hour = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
    const minutes = time.getMinutes();
    const displayTime = `${hour}:${minutes}`;

    return (
      <h1>{displayTime}</h1>
    );
  }
}
