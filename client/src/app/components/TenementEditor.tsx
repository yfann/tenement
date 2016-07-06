import * as React from 'react';
import TextField from 'material-ui/TextField';
export class TenementEditor extends React.Component<any,{}>{
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
            </div>
        );
    }
}