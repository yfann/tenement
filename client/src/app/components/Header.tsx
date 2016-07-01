import * as React from 'react';
import{Link} from 'react-router';
export class Header extends React.Component<any,{}>{
    render(){
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/hello">Hello</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </nav>
            
        )
    }
}