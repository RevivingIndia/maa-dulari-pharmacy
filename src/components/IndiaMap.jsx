import React, { useState, useCallback } from 'react'
import indiaMapData from '@svg-maps/india'
import './IndiaMap.css'

/**
 * Interactive India map with proper state/UT boundaries from @svg-maps/india.
 * Each state is clickable; use onLocationClick to handle navigation, API calls, or logging.
 */
const IndiaMap = ({ onLocationClick, className = '' }) => {
  const [hoveredId, setHoveredId] = useState(null)

  // Example click handler: receives state id and name. Replace with your logic
  // (e.g. navigate to /availability/:stateId, call API, open modal).
  const handleLocationClick = useCallback(
    (event, location) => {
      const { id, name } = location
      if (typeof onLocationClick === 'function') {
        onLocationClick({ id, name }, event)
      } else {
        // Default: log to console. Remove or replace with your action.
        console.log('India map — state clicked:', { id, name })
        // Optional: navigate — e.g. navigate(`/availability/${id}`)
        // Optional: API — e.g. fetchAvailabilityByState(id)
      }
    },
    [onLocationClick]
  )

  const handleMouseEnter = useCallback((id) => setHoveredId(id), [])
  const handleMouseLeave = useCallback(() => setHoveredId(null), [])

  const { viewBox, locations } = indiaMapData

  return (
    <div className={`india-map-wrapper ${className}`.trim()} role="img" aria-label="Map of India with states and union territories">
      <svg
        className="india-map-svg"
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <g className="india-map-locations">
          {locations.map((location) => (
            <path
              key={location.id}
              id={location.id}
              d={location.path}
              className={`india-map-location ${hoveredId === location.id ? 'india-map-location--hover' : ''}`}
              tabIndex={0}
              role="button"
              aria-label={location.name}
              onClick={(e) => handleLocationClick(e, location)}
              onMouseEnter={() => handleMouseEnter(location.id)}
              onMouseLeave={handleMouseLeave}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleLocationClick(e, location)
                }
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  )
}

export default IndiaMap
