import {useState} from "react";
import {router} from "@inertiajs/react";


export default function CreateCard({user}) {

    userconst [values, setValues] = useState({
        cardName: "",
        description: "",
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
        await router.post("/create_card", values);
        setValues({
            cardName: "",
            description: "",

        });
    }

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="number" className="form-label">
                            Назва колонки:
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
                            className="form-input"
                            id="description"
                            name="description"
                            value={values.description}
                            onChange={handleChange}>

                    </textarea>
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
