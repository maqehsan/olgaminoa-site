import { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import Globe from 'react-globe.gl'
import * as THREE from 'three'
import { visitedCountries } from './data'
import styles from './TravelGlobe.module.css'

// Countries sorted chronologically for arc paths
const sortedEntries = Object.entries(visitedCountries).sort(
  ([, a], [, b]) => a.year - b.year
)

// Points data for markers
const pointsData = sortedEntries.map(([code, c]) => ({
  lat: c.lat,
  lng: c.lng,
  name: c.name,
  slug: c.slug,
  year: c.year,
  code,
}))

// Arc data connecting countries in chronological order
const arcsData = sortedEntries.slice(1).map(([, dest], i) => {
  const [, origin] = sortedEntries[i]
  return {
    startLat: origin.lat,
    startLng: origin.lng,
    endLat: dest.lat,
    endLng: dest.lng,
    order: i,
  }
})

export default function TravelGlobe({ onCountryClick }) {
  const globeRef = useRef()
  const containerRef = useRef()
  const [globeWidth, setGlobeWidth] = useState(0)
  const [isReady, setIsReady] = useState(false)
  const [hoveredPoint, setHoveredPoint] = useState(null)

  // Responsive sizing
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setGlobeWidth(entry.contentRect.width)
      }
    })
    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  // Globe initialization: set POV and auto-rotate
  useEffect(() => {
    const globe = globeRef.current
    if (!globe) return

    // Start with Europe in view
    globe.pointOfView({ lat: 45, lng: 15, altitude: 2.2 }, 0)

    // Enable auto-rotation
    const controls = globe.controls()
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.4
    controls.enableZoom = true
    controls.minDistance = 150
    controls.maxDistance = 500

    // Fade in after a short delay
    const timer = setTimeout(() => setIsReady(true), 300)
    return () => clearTimeout(timer)
  }, [globeWidth]) // re-run when globe renders at new size

  // Fly to country on click
  const handlePointClick = useCallback(
    (point) => {
      const globe = globeRef.current
      if (globe) {
        globe.pointOfView({ lat: point.lat, lng: point.lng, altitude: 1.8 }, 800)
      }
      // Navigate after the camera animation
      setTimeout(() => {
        if (onCountryClick) onCountryClick(point.slug)
      }, 900)
    },
    [onCountryClick]
  )

  // Globe material - warm earthy tones
  const globeMaterial = useMemo(() => {
    const material = new THREE.MeshPhongMaterial()
    material.color = new THREE.Color('#D6CABC')
    material.emissive = new THREE.Color('#1a1008')
    material.emissiveIntensity = 0.1
    material.shininess = 5
    return material
  }, [])

  const globeHeight = Math.min(globeWidth * 0.85, 520)

  return (
    <div
      ref={containerRef}
      className={`${styles.globeContainer} ${isReady ? styles.visible : ''}`}
    >
      {globeWidth > 0 && (
        <Globe
          ref={globeRef}
          width={globeWidth}
          height={globeHeight}
          backgroundColor="rgba(0,0,0,0)"
          atmosphereColor="#B5714A"
          atmosphereAltitude={0.18}
          globeMaterial={globeMaterial}
          // Points (pulsing markers)
          pointsData={pointsData}
          pointLat="lat"
          pointLng="lng"
          pointColor={() => '#B5714A'}
          pointAltitude={0.01}
          pointRadius={0.5}
          pointsMerge={false}
          onPointClick={handlePointClick}
          onPointHover={setHoveredPoint}
          // Rings (pulsing effect)
          ringsData={pointsData}
          ringLat="lat"
          ringLng="lng"
          ringColor={() => (t) => `rgba(181, 113, 74, ${1 - t})`}
          ringMaxRadius={3}
          ringPropagationSpeed={1.5}
          ringRepeatPeriod={2000}
          // Arcs (flight paths)
          arcsData={arcsData}
          arcColor={() => ['#CC8A5Aaa', '#B5714Aaa']}
          arcDashLength={0.4}
          arcDashGap={0.2}
          arcDashAnimateTime={2500}
          arcStroke={0.5}
          arcAltitudeAutoScale={0.35}
          // Labels
          labelsData={pointsData}
          labelLat="lat"
          labelLng="lng"
          labelText="name"
          labelSize={1.2}
          labelDotRadius={0}
          labelColor={() => '#F0E6D4'}
          labelAltitude={0.015}
          labelResolution={2}
        />
      )}
      {hoveredPoint && (
        <div className={styles.globeTooltip}>
          {hoveredPoint.name} · {hoveredPoint.year}
        </div>
      )}
    </div>
  )
}
