export const CategoryOption = ({category}) => {
    return (
        <option name={`${category.id}`} value={`${category.name}`}>{category.name}</option>
    )
}