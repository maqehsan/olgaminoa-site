import { useState, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipes } from './data'
import styles from './Recipes.module.css'

// ── All unique tags across all recipes ───────────────────────
function getAllTags(recipes) {
  const set = new Set()
  recipes.forEach((r) => r.tags.forEach((t) => set.add(t)))
  return [...set].sort()
}

// ── Card ─────────────────────────────────────────────────────
function RecipeCard({ recipe, onClick }) {
  return (
    <button className={styles.card} onClick={onClick}>
      <div className={styles.cardImage}>
        {recipe.image
          ? <img src={recipe.image} alt={recipe.name} className={styles.cardPhoto} />
          : <span className={styles.cardEmoji}>{recipe.emoji}</span>
        }
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardName}>{recipe.name}</div>
        <div className={styles.cardMeta}>
          <span>{recipe.time}</span>
          <span className={styles.metaDot}>·</span>
          <span>{recipe.difficulty}</span>
          <span className={styles.metaDot}>·</span>
          <span>Serves {recipe.servings}</span>
        </div>
        <div className={styles.cardTags}>
          {recipe.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </button>
  )
}

// ── Detail view ───────────────────────────────────────────────
function RecipeDetail({ recipe, onBack }) {
  return (
    <div className={styles.detail}>
      <button className={styles.back} onClick={onBack}>
        ← Back
      </button>

      {recipe.image && (
        <div className={styles.detailHero}>
          <img src={recipe.image} alt={recipe.name} className={styles.detailHeroImg} />
        </div>
      )}

      <div className={styles.detailHeader}>
        <span className={styles.detailEmoji}>{recipe.emoji}</span>
        <div>
          <h1 className={styles.detailName}>{recipe.name}</h1>
          <div className={styles.detailMeta}>
            <span>⏱ {recipe.time}</span>
            <span className={styles.metaDot}>·</span>
            <span>🍽 Serves {recipe.servings}</span>
            <span className={styles.metaDot}>·</span>
            <span>{recipe.difficulty}</span>
          </div>
          <div className={styles.cardTags} style={{ marginTop: 8 }}>
            {recipe.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.detailBody}>
        {/* Ingredients */}
        <div className={styles.ingredients}>
          <h2 className={styles.sectionHeading}>Ingredients</h2>
          <ul className={styles.ingredientList}>
            {recipe.ingredients.map((item, i) => (
              <li key={i} className={styles.ingredientItem}>
                <span className={styles.ingredientBullet} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Steps */}
        <div className={styles.steps}>
          <h2 className={styles.sectionHeading}>Method</h2>
          <ol className={styles.stepList}>
            {recipe.steps.map((step, i) => (
              <li key={i} className={styles.step}>
                <span className={styles.stepNumber}>{i + 1}</span>
                <p className={styles.stepText}>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

// ── Main ──────────────────────────────────────────────────────
export default function Recipes() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [activeTag, setActiveTag] = useState(null)
  const allTags = useMemo(() => getAllTags(recipes), [])

  const selected = id ? recipes.find((r) => r.id === id) : null

  const filtered = useMemo(
    () => (activeTag ? recipes.filter((r) => r.tags.includes(activeTag)) : recipes),
    [activeTag]
  )

  if (selected) {
    return <RecipeDetail recipe={selected} onBack={() => navigate(-1)} />
  }

  return (
    <div className={styles.page}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Recipes</h1>
        <p className={styles.sub}>Things worth making again.</p>
      </div>

      {/* Tag filter */}
      <div className={styles.filters}>
        <button
          className={`${styles.filterChip} ${activeTag === null ? styles.filterActive : ''}`}
          onClick={() => setActiveTag(null)}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`${styles.filterChip} ${activeTag === tag ? styles.filterActive : ''}`}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {filtered.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} onClick={() => navigate(`/recipes/${recipe.id}`)} />
        ))}
      </div>
    </div>
  )
}
