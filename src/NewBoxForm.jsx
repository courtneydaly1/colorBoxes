import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewBoxForm({ createBox }) {
    const [formData, setFormData] = useState({
        width: "",
        height: "",
        backgroundColor: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        const { width, height, backgroundColor } = formData;
        if (!width || !height || !backgroundColor) {
            alert("All fields are required!");
            return;
        }
        createBox({...formData, id: uuid()});
        setFormData({ width: "", height: "", backgroundColor: "" });
    };

    const isFormValid = formData.width && formData.height && formData.backgroundColor;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="width">Width</label>
                <input
                    id="width"
                    type="text"
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="height">Height</label>
                <input
                    id="height"
                    type="text"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="backgroundColor">Background Color</label>
                <input
                    id="backgroundColor"
                    type="text"
                    name="backgroundColor"
                    value={formData.backgroundColor}
                    onChange={handleChange}
                />
            </div>
            <button disabled={!isFormValid}>Add Box</button>
        </form>
    );
}

export default NewBoxForm;
