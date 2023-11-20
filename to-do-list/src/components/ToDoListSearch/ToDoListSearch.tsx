export const ToDoListSearch = ({searchValue, setSearchValue}:{searchValue: string, setSearchValue:(value: string)=>void}) => {

    //@ts-ignore
    const handleChange = (event)=>{
        setSearchValue(event.target.value)
    }
    return <>
        <input type="text" onChange={handleChange}/>
    </>
}