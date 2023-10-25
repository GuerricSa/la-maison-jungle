function Categories({categories, activeCategory, setActiveCategory}) {
  return(
    <div>
      <select
        name='categories'
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
        className="lmj-categories-select"
      >
        <option value=''>--Séléctionez une catégorie--</option>
        {categories.map((cat) => (
          <option value={cat} key={cat}>{cat}</option>
        ))}
      </select>
      <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
    </div>
  )
}

export default Categories
