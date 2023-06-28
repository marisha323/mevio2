import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router} from '@inertiajs/react';
import {InertiaLink} from "@inertiajs/inertia-react";
import {useState} from "react";

export default function Dashboard({auth}) {
    const [values, setValues] = useState({
        name: "",
        email: "",
    });
    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await router.post("/usercomponent/findByEmail", values);
        setValues({
            name: "",
            email: "",

        });
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="number" className="form-label">
                        Email:
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit" className="btn btn-info">
                        FIND USER
                    </button>
                </div>
            </form>
        </AuthenticatedLayout>
);
}
