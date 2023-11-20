export const ToDoListSearch = ({searchValue, setSearchValue}:{searchValue: string, setSearchValue:(value: string)=>void}) => {

    //@ts-ignore
    const handleChange = (event)=>{
        setSearchValue(event.target.value)
    }
    return <div className="search-header">
        <input type="text" onChange={handleChange} placeholder="Поиск по заголовку"/>
        <div> 
            <label>Показывать выполненные</label>
            <input type="checkbox"></input>
        </div>
    </div>
}