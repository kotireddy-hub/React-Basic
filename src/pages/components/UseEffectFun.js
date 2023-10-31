import React, { useEffect, useState } from "react";

const UseEffectFun = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
       /* const userData = [
            {
                "name": "Koti",
                "age": 30
            },
            {
                "name": "Anil",
                "age": 26
            }
        ]*/
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
       // setUsers(userData)
    }, [])

    return <div>
        {
            users.map((list) => {
                return <div>
                    <p>{list.name}</p>
                    <p>{list.phone}</p>
                </div>
            })
        }
    </div>

};

export default UseEffectFun;