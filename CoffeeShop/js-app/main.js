import { BeanForm } from "./BeanForm.js";

const url = "https://localhost:5001/api/beanvariety/";

const button = document.querySelector("#run-button");
const container = document.getElementById("#itemContainer");
const beanForm = document.querySelector("#bean-form");

beanForm.innerHTML = BeanForm();

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
            try {
                beanVarieties.forEach(item => {
                    const itemElement1 = document.createElement("div");
                    const itemElement2 = document.createElement("div");
                    const itemElement3 = document.createElement("div");
                    itemElement1.textContent = item.name;
                    itemElement2.textContent = item.region;
                    itemElement3.textContent = item.notes;
                    container.appendChild(itemElement1);
                    container.appendChild(itemElement2);
                    container.appendChild(itemElement3);
                });
            } catch (error) {
                console.error("Error:", error);
            }
        })
        .catch(error => {
            console.error("API Request Error:", error);
        });
});

export const AddBean = (beanVariety) => {
    const fetchOptions = {
        //The POST method on any HTTP request means "Hey API!! I want you to create something new!"
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(beanVariety)
    }

    return fetch(url, fetchOptions).then(res => res.json())
}


