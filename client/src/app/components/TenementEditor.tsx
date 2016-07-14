import * as React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style={
    'margin-left':160
}

export class TenementEditor extends React.Component<any,{}>{

    save(){

    }

    render(){
        return (
            <div>
                <TextField hintText="区域"/>
                <br/>
                <TextField hintText="价格"/>
                <br/>
                <TextField hintText="户型"/>
                <br/>
                <TextField hintText="地址"/>
                <br/>
                <TextField hintText="小区"/>
                <br/>
                <TextField hintText="链接"/>
                <br/>
                <RaisedButton label='save' style={style} onClick={this.save}/>
            </div>
        );
    }
}