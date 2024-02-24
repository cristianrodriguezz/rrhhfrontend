export const getIdToLocation = (locationCandidate, locations) => {

  let id

  Array.from(locations).forEach(location => {
    if(location.name === locationCandidate){
      id = location.location_id
    }
  })

  return id
}
export const getIdToPosition = (positionCandidate, positions) => {

  let id

  Array.from(positions).forEach(position => {
    if(position.current_position === positionCandidate){
      id = position.current_position_id
    }
  })
  
  return id
}
export const getIdToAvailabilty = (availabilityCandidate, availabilities) => {

  let id

  Array.from(availabilities).forEach(availability => {
    if(availability.availability_schedule === availabilityCandidate){
      id = availability.availability_id
    }
  })
  
  return id
}
