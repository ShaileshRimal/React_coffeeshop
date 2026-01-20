   
   const Filterbar =({categories, setfilter, qnty})=>{

    return (
    <div className="filter-bar">
        <button className="filter-button All-button" onClick={()=>setfilter("all")}  >
          All
        </button>
        {categories.map(cat=>(
            <button className="filter-button"  key={cat.id} onClick={()=>setfilter(cat.id)}>{cat.name}</button>
        ))}
        <div style={{marginLeft:"auto", marginRight:"8px"}} >cart: 9</div>
    </div>

    );
   };
   export default Filterbar;