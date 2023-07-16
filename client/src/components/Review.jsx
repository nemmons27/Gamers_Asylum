import { useState } from "react";
import Client from "../services/api";
import { Link } from "react-router-dom";

const Review = () => {
    return (
        <div>
            <table className="reviewTable">
                <thead className="reviewHead">
                    <tr>
                        <th>User</th>
                        <th>Date</th>
                        <th>Review</th>
                    </tr>
                </thead>

                <tbody className="reviewBody">
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Review