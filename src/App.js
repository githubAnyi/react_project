import Categories from "./components/categories/categories.component";
const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
    },
    {
      id: 4,
      title: 'Womans',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
    }
  ]
  return (
    <Categories categories={categories}/>
  );
}

export default App;
