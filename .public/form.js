const UIElement = document.querySelector("#ui")
const formTitle = document.querySelector("#form-title")
const keywordInput = document.querySelector("#keyword")
const submitButton = document.querySelector("#form-submit")
console.log({ submitButton })

keywordInput.addEventListener("input", handleInput)
submitButton.addEventListener("click", handleSubmit)

let keywordValue = ""
function handleInput(e) {
  keywordValue = e.target.value
  console.log(keywordValue.length, submitButton.disabled)
  if (keywordValue.length > 0) {
    submitButton.disabled = false
  } else {
    submitButton.disabled = true
  }
}

const eventsSearchQuery = () => {
  return `/api/fetch_events?keyword=${keywordValue}`
}

async function handleSubmit(e) {
  e.preventDefault()
  const events = await fetch(eventsSearchQuery()).then((res) => res.json())
    .then((data) => data)
  formTitle.innerText = `${events.length} Events found!`
  console.log({ events })
  submitButton.style.margin = "5px 0 0 0"
  UIElement.classList.toggle("top-corner")
  if (window.mapReady) {
    const points = []
    events.map((event) => {
      if (event?._embedded?.venues[0]?.location.longitude) {
        points.push([
          parseFloat(event._embedded.venues[0]?.location.longitude),
          parseFloat(event._embedded.venues[0]?.location.latitude),
        ])
      }
    })
    console.log({ points })
    const center = turf.center(turf.points(points))
    console.log(center)
    events.forEach(addMarker)
    window.map.flyTo({
      center: center.geometry.coordinates,
      essential: true,
      zoom: 2,
    })
  }
}

function addMarker(event) {
  console.log(event?._embedded.venues[0]?.location.longitude)
  if (
    event?._embedded.venues[0]?.location.longitude &&
    event?._embedded.venues[0]?.location.latitude
  ) {
    new mapboxgl.Marker()
      .setLngLat([
        event._embedded.venues[0]?.location.longitude,
        event._embedded.venues[0]?.location.latitude,
      ])
      .setPopup(new mapboxgl.Popup().setText(event.name))
      .addTo(window.map)
  }
}
