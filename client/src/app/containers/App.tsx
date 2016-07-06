import * as React from 'react';
import {TenementEditor} from '../components/TenementEditor';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export class App extends React.Component<any,{}>{
    render(){
       return(
           <MuiThemeProvider>
                <div>
                    <TenementEditor/>
                </div>
           </MuiThemeProvider>
       )     
    }
}