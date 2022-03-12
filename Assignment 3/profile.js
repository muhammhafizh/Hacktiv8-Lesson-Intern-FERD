function submitForm() {
    const form = document.getElementById('form')

    //Input Data
    const InputName = document.getElementById('InputName')
    const InputRole = document.getElementById('InputRole')
    const InputAvailability = document.getElementById('InputAvailability')
    const InputUsia = document.getElementById('InputUsia')
    const InputLokasi = document.getElementById('InputLokasi')
    const InputExperience = document.getElementById('InputExperience')
    const InputEmail = document.getElementById('InputEmail')

    // Form Data
    const name = document.getElementById('name')
    name.textContent = InputName.value

    const role = document.getElementById('role')
    role.textContent = InputRole.value

    const availability = document.getElementById('availability')
    availability.textContent = InputAvailability.value

    const age = document.getElementById('age')
    age.textContent = InputUsia.value

    const location = document.getElementById('location')
    location.textContent = InputLokasi.value

    const experience = document.getElementById('experience')
    experience.textContent = InputExperience.value

    const email = document.getElementById('email')
    email.textContent = InputEmail.value
}