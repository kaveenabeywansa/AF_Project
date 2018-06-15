import React,{Component} from 'react';

class Logout extends Component{
    componentDidMount(){
        sessionStorage.clear();
        this.props.history.push('/login');
    }
    render(){
        return(
            <div>
                <h1 className="lgout">Logging Out...</h1>
            </div>
        );
    }
}
export default Logout;