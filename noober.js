window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned jSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code

  // rename variable
  let rides = json

  // loop through all rides
  for (let i = 0; i < rides.length; i++) {


    // logic from hw3 (((not working...I tried many ways but it didn't work :( )))

let service 

   if (rides[1].purpleRequested==true) {
     Service = 'Noober Purple'
    } else if (rides[1].numberOfPassengers > 3) {
     Service = 'Noober XL'
    } else {
      Service = 'Noober X'
    }
  }

  // insert service type info from html 

  document.querySelector('.rides').insertAdjacentHTML('beforeend', `
  <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>${Service}</span>
  </h1>
`)

// loop through details of each ride, with X as a variable
for (let x = 0; x < rides.length; x++) {

  let detail = rides[x]
 

  // insert passenger details info from html
  document.querySelector('.rides').insertAdjacentHTML('beforeend', `
    <div class="border-4  p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">detail.passengerDetails.first} ${detail.passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${detail.passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl  text-white p-2">
            ${detail.numberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${detail.pickupLocation.address}</p>
          <p>${detail.pickupLocation.city}, ${detail.pickupLocation.state} ${detail.pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${detail.dropoffLocation.address}</p>
          <p>${detail.dropoffLocation.city}, ${detail.dropoffLocation.state} ${detail.dropoffLocation.zip}</p>
        </div>
      </div>
    </div>
  `)
}
}

)
