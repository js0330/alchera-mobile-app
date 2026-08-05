import type { Facility } from '../types'

function haversineDistanceMeters(lat1: number, lng1: number, lat2: number, lng2: number) {
  const toRad = (deg: number) => (deg * Math.PI) / 180
  const R = 6371000
  const dLat = toRad(lat2 - lat1)
  const dLng = toRad(lng2 - lng1)
  const a =
    Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(a))
}

export function findNearestFacility(lat: number, lng: number, facilities: Facility[]) {
  return facilities.reduce((nearest, facility) => {
    const distance = haversineDistanceMeters(lat, lng, facility.lat, facility.lng)
    if (!nearest || distance < nearest.distance) return { facility, distance }
    return nearest
  }, null as { facility: Facility; distance: number } | null)
}
