import {AddBean} from "./main.js"

const beanForm = document.querySelector("#bean-form");

export const BeanForm = () => {

    return`
        <div class="field">
            <label class="label" for="bean-name">Bean Variety Name:</label>
            <input type="text" name="bean-name" class="input" />
        </div>
        <div class="field">
            <label class="label" for="bean-region">Region</label>
            <input type="text" name="bean-region" class="input" />
        </div>
        <div class="field">
            <label class="label" for="bean-notes">Notes</label>
            <input type="text" name="bean-notes" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

}
beanForm.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const beanName = document.querySelector("input[name='bean-name']").value
        const beanRegion = document.querySelector("input[name='bean-region']").value
        const beanNotes = document.querySelector("input[name='bean-notes']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            Name: beanName,
            Region: beanRegion,
            Notes : beanNotes,
        }

        // Send the data to the API for permanent storage
        AddBean(dataToSendToAPI)
    }
})