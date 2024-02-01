import { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";
class Dashbroad extends Component {
    render() {
        return (
            <div className="dashbroad container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification />
                    </div>
                </div>
            </div>
        )
    }
}
export default Dashbroad;