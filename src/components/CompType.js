import  React  from  'react';
import { render } from '@testing-library/react';

// 创建函数 类型的组建 
export function Welcome1(props)  {
    return  (
        <div>
            {props.name}
        </div>
    )
}

// 基于类的 组建 
export class Welcome2 extends React.Component {
    render() {
        return <div>{this.props.name}</div>
    }
}