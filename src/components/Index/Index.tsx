import * as React from 'react'
import {Dropdown,Icon,Menu} from "antd"
import Todos from "src/components/Todos/Todos"
import history from "src/config/history"
import axios from 'src/config/axios'
import './Index.scss'

interface IRouter {
	history: any;
}

interface IIndexState {
	user: any
}

const logout = ()=>{
	localStorage.setItem('x-token','')
	history.push('/login')
}

const menu = (
	<Menu>
		<Menu.Item key="1"><Icon type="user" />个人设置</Menu.Item>
		<Menu.Item key="2" onClick={logout}><Icon type="logout" />注销</Menu.Item>
	</Menu>
)
class Index extends React.Component<IRouter,IIndexState> {

	constructor(props: any){
		super(props)
		this.state = {
			user:{}
		}
	}
  // 获取用户个人信息
	async componentWillMount(){
		await this.getMe()
	}

	getMe = async () => {	
			const response = await axios.get('me') // 获取异步结果
			this.setState({user: response.data})  // 将获取的结果赋值给state状态中
	}

 

	render() {
		return (
			<div className="Index" id="Index">
				<header>
					<span className="logo">LOGO</span>
					<Dropdown overlay={menu}>
						<span>
							{this.state.user && this.state.user.account}
							<Icon type="down" style={{ marginLeft: 8}}/>
						</span>
					</Dropdown>
				</header>
				<main>
					<Todos/>
				</main>
			</div>
		);
	}
}
export default Index; 