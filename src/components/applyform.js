//the component that has typeform, gets called and receives the url of the form as a prop
import React, {Component} from 'react'

export default class Applyform extends Component{
  constructor(props){
    super(props)
    this.el = null
  }

  componentDidMount(){
    this.typeformEmbed = require('@typeform/embed')
    const {url} = this.props

    if (this.el) {
      this.typeformEmbed.makeWidget(this.el, url, {
        hideFooter: true,
        hideHeaders: true,
        opacity: 100
      });
    }
  }

  render(){
    return (<div ref={(el) => this.el = el} style={{width: '100%', height: '600px'}} />)
  }
}
