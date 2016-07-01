import * as React from 'react';
import {Header} from './Header';

export class App extends React.Component<any,{}>{
    render(){
       return(
           <div>
            <Header/>
            <div classname="container-fluid">
            {this.props.children}
            </div>
        </div>
       )     
    }
}