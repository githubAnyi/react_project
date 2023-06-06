import './categories.style.scss'
import CategoryItem from '../category-item/category-item.component'

const Categories = ({categories}) => {
  return (
    <div className="categories-container">
      {/* 此处使用解构赋值获得数组元素的title属性 */}
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category}/>
      ))}
    </div>
  )
}

export default Categories