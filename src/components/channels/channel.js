import React from "react";
import { Link } from "react-router-dom";

const Channel = () => {
    return (
        <>
            <main className="main-container">
                <div className="main-title">
                    <h3>My Channels</h3>
                </div>
                <div className="main-body">
                    <Link to='/channel-add'><input type="button" className="btn btn-secondary mb-5" style={{ float: "right" }} value='Add Channel' /></Link>
                    <table className="table table-bordered table-striped mt-5 py-4 px-3" >
                        <thead>
                            <tr>
                                <th>Sr No</th>
                                <th>Channel Name</th>
                                <th>Key</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>ABC</td>
                                <td>4564156465</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>ABC</td>
                                <td>4564156465</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>ABC</td>
                                <td>4564156465</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}

export default Channel