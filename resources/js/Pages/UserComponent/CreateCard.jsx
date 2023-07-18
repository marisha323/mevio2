import {router} from "@inertiajs/react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";



export default function CreateCard() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const columnId = urlSearchParams.get("columnId");

    const [values, setValues] = useState({
        cardName: "",
        description: "",
        deadLine: "",
        columnId: columnId || "",
    });
    console.log(111);
    console.log(columnId);
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
        await router.post("/posts/createCard", values);
        setValues({
            cardName: "",
            description: "",
            deadLine: "",
            columnId: columnId,
        });
    }
        return (
            <div className="m-10">

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="number" className="form-label">
                            Назва картки:
                        </label>
                        <input
                            className="form-input"
                            type="text"
                            id="cardName"
                            name="cardName"
                            value={values.cardName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="form-label">
                            Опис:</label>
                        <textarea
                            className="form-textarea"
                            id="description"
                            name="description"
                            value={values.description}
                            onChange={handleChange}>

                    </textarea>
                    </div>
                    <div>
                        <input
                            type="date"
                            id="deadLine"
                            name="deadLine"
                            value={values.deadLine}
                            onChange={handleChange}

                        />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-info">
                            Зберегти карточку
                        </button>
                    </div>
                </form>

            </div>
        );

}
