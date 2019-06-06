import * as React from 'react';
import { Checkbox } from 'antd';

interface ITodoItemProps {
	id: number;
	description: string;
	completed: boolean;
	update: (id: number, params: any)=> void;
}

class TodoItem extends React.Component<ITodoItemProps> {
	constructor(props){
        super(props)
        // console.log(props)  // 从Todos组件传递下来的对象参数
	}

	update = (params:any) => {
		this.props.update(this.props.id,params)
	}

	public render() {
		return (
			<div className="TodoItem" id="TodoItem">
				<Checkbox checked={this.props.completed}
				          onChange={e=> this.update({completed: e.target.checked})}
				/>
				<span>{this.props.description}</span>
			</div>
		);
	}
}

export default TodoItem; 