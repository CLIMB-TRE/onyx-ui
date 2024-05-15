import React from 'react'
import { ReactWidget } from '@jupyterlab/apputils'
//import App from '../../react-prototype/src/App'
import { EXTENSION_CSS_CLASSNAME } from './enums'


function MyComponent(domain:string, token:string): React.JSX.Element {
  return <div>Onyx Extension
    ONYX_DOMAIN: {domain}
    ONYX_TOKEN: {token} </div>;
}

export class ReactAppWidget extends ReactWidget {
  constructor() {
    super()
    this.domain =''
    this.token = ''
    this.addClass(EXTENSION_CSS_CLASSNAME)
  }

  domain: string
  token: string

  render(): JSX.Element {
    return (
      MyComponent(this.domain,this.token)
    )
  }
  

  async retrieve_token(): Promise<void> {
   this.domain = 'a'
   this.token = 'b'
  }
}
