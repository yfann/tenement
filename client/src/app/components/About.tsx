import * as React from 'react';

export class About extends React.Component<any,{}>{
    render(){
        return (
            <div>
                <h1>About</h1>
                <div>This application uses the following technologies:
                    <ul>
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>Gulp</li>
                        <li>Webpack</li>
                    </ul>
                </div>
            </div>
            
        )
    }
}