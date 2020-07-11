document.addEventListener('DOMContentLoaded', function () { 
  loadData()
  setInterval(loadData, 30000)
})

async function loadData() {
  const data = [] // await ( await fetch('./data.json') ).json()
  const dateTimeFormat = new Intl.DateTimeFormat('en', {
    hour12: false,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }) 
  const date = dateTimeFormat.formatToParts(new Date())
  data.month = date[0].value
  data.day = date[2].value
  data.year = date[4].value
  data.hour = date[6].value
  data.minute = date[8].value
  update(data)
}

function update(data) {
  document.getElementById('time').innerHTML = `${data.hour}:${data.minute}`
  document.getElementById('date').innerHTML = `${data.day} ${data.month} ${data.year}`
}

