import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
  ZoomableGroup,
} from 'react-simple-maps'
import { visitedCodes, visitedCountries } from './data'
import styles from './Travel.module.css'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

// Map from numeric ISO 3166-1 (used by topojson) to alpha-2
// Only need entries for countries we actually visited
const NUMERIC_TO_ALPHA2 = {
  '360': 'ID', // Indonesia
  '380': 'IT', // Italy
  '724': 'ES', // Spain
  '620': 'PT', // Portugal
  '643': 'RU', // Russia
  '040': 'AT', // Austria
  '250': 'FR', // France
}

export default function Travel() {
  const navigate = useNavigate()
  const [tooltip, setTooltip] = useState(null) // { name, x, y }

  function getAlpha2(geo) {
    const num = geo.id != null ? String(geo.id).padStart(3, '0') : null
    return num ? NUMERIC_TO_ALPHA2[num] ?? null : null
  }

  function isVisited(geo) {
    return visitedCodes.includes(getAlpha2(geo))
  }

  function handleClick(geo) {
    const code = getAlpha2(geo)
    if (!code) return
    const country = visitedCountries[code]
    if (country) navigate(`/travel/${country.slug}`)
  }

  return (
    <div className={styles.page}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Travel</h1>
        <p className={styles.sub}>
          Places I have been. Click a highlighted country to read more.
        </p>
      </div>

      <div className={styles.mapWrap}>
        <ComposableMap
          projection="geoNaturalEarth1"
          projectionConfig={{ scale: 153, center: [10, 10] }}
          className={styles.map}
        >
          <ZoomableGroup zoom={1} minZoom={1} maxZoom={6}>
            <Sphere fill="var(--color-travel-ocean)" stroke="var(--color-travel-sphere-stroke)" strokeWidth={0.5} />
            <Graticule stroke="var(--color-travel-graticule)" strokeWidth={0.3} />
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const visited = isVisited(geo)
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={() => visited && handleClick(geo)}
                      onMouseEnter={(e) => {
                        if (!visited) return
                        const code = getAlpha2(geo)
                        const name = visitedCountries[code]?.name
                        setTooltip({ name, x: e.clientX, y: e.clientY })
                      }}
                      onMouseMove={(e) => {
                        if (!visited) return
                        setTooltip((t) => t ? { ...t, x: e.clientX, y: e.clientY } : t)
                      }}
                      onMouseLeave={() => setTooltip(null)}
                      style={{
                        default: {
                          fill: visited ? 'var(--color-travel-visited)' : 'var(--color-travel-land)',
                          stroke: 'var(--color-travel-border)',
                          strokeWidth: 0.4,
                          outline: 'none',
                          cursor: visited ? 'pointer' : 'default',
                          transition: 'fill 0.15s ease',
                        },
                        hover: {
                          fill: visited ? 'var(--color-travel-hover)' : 'var(--color-travel-land)',
                          stroke: 'var(--color-travel-border)',
                          strokeWidth: 0.4,
                          outline: 'none',
                          cursor: visited ? 'pointer' : 'default',
                        },
                        pressed: {
                          fill: visited ? 'var(--color-travel-hover)' : 'var(--color-travel-land)',
                          outline: 'none',
                        },
                      }}
                    />
                  )
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>

        {tooltip && (
          <div
            className={styles.tooltip}
            style={{ left: tooltip.x + 14, top: tooltip.y - 36 }}
          >
            {tooltip.name}
          </div>
        )}
      </div>

      <div className={styles.hint}>Scroll or pinch to zoom · Drag to pan</div>

      <div className={styles.grid}>
        {Object.entries(visitedCountries).map(([, country]) => (
          <button
            key={country.slug}
            className={styles.card}
            onClick={() => navigate(`/travel/${country.slug}`)}
          >
            <span className={styles.cardEmoji}>{country.coverEmoji}</span>
            <div className={styles.cardBody}>
              <div className={styles.cardName}>{country.name}</div>
              <div className={styles.cardYear}>{country.year}</div>
              <p className={styles.cardSummary}>{country.summary}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
