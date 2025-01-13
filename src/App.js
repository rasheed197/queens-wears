const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Boots'
    },
    {
      id: 2,
      title: 'Flats'
    },
    {
      id: 3,
      title: 'Heels'
    },
    {
      id: 4,
      title: 'Sandals'
    },
    {
      id: 5,
      title: 'Sneakers'
    },
  ]

  return (
    <div className="categories-container">
      {
        categories.map(({ id, title }) => {
          return (
            <div key={id} className="category-container">
              {/* <img /> */}
              <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
