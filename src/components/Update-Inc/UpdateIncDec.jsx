function UpdateIncDec({incrementValue, decrementValue , handleIncrementChange,handleDecrementChange, }){
    return(
        <div>
            <label>increment</label>
            <input type='number' value={incrementValue} onChange={handleIncrementChange} />
            <label>decrement</label>
            <input type='number' value={decrementValue} omChange={handleDecrementChange}/>
        </div>
    )
}


export default UpdateIncDec