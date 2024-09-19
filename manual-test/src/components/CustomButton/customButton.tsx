import React, { Component } from 'react';
import style from './style.module.scss';



export default class CustomButton extends React.Component<any, any> {
  render() {
    const {name} = this.props;
    return(
      <div><button className={style.button}>{name}</button></div>
    )
  }

}