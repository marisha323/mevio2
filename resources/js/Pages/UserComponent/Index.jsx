import {useState} from "react";

export default function Index({user}) {
    const [values, setValues] = useState({
        name: user.name || "",
        email: user.email || "",

    });


    return (

            <div className="col-7 ml-auto mr-auto bg-gray-100">
                <h1 className="text-success h1 mt-10 mb-10 text-center">
                   Ваші данні
                </h1>
                <div className="border border-success">
                    <h3 className='h3 text-center'>Name: {values.name}</h3>
                    <h3 className='h3 text-center'>Email: {values.email}</h3>

                </div>
            </div>

    );
}
