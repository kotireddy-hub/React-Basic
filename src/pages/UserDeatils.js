import React from "react";

function UserDeatils(props) {
    const { users = [] } = props;
    return <ul>
        {
            (users || []).map((item) => (
                <div>
                    <li>{item.name}</li>
                    <li>{item.age}</li>
                </div>
            ))
        }
    </ul>
}

export default UserDeatils;