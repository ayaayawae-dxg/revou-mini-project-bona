const init = () => {
    console.log('Loaded')
}

document
    .getElementById('participant-form')
    .addEventListener('submit', (e) => {
        e.preventDefault()

        const participantTable = document.getElementById('participant-data')
        const tableBody = participantTable.querySelector('tbody')
        
        const nama = e.target['nama'].value
        const umur = e.target['umur'].value

        const newTr = document.createElement('tr')
        const tdNama = document.createElement('td')
        const tdUmur = document.createElement('td')
        tdNama.innerHTML = nama
        tdUmur.innerHTML = umur

        newTr.appendChild(tdNama)
        newTr.appendChild(tdUmur)

        tableBody.appendChild(newTr)
    })