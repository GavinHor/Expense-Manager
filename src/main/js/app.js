const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {TestEmployees: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/TestEmployees'}).done(response => {
			this.setState({TestEmployees: response.entity._embedded.TestEmployees});
		});
	}

	render() {
		/*return (
			<TestEmployeeList TestEmployees={this.state.TestEmployees}/>
		)*/
		return(
			<p>testing that this works</p>
		)
	}
}

class TestEmployeeList extends React.Component{
	render() {
		const TestEmployees = this.props.TestEmployees.map(TestEmployee =>
			<TestEmployee key={TestEmployee._links.self.href} TestEmployee={TestEmployee}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Name</th>
						<th>Content</th>
					</tr>
					{TestEmployees}
				</tbody>
			</table>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)