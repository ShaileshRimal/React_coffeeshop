   import {Link} from "react-router-dom";
   const Filterbar =({categories, setfilter})=>{

    return (
    <div className="filter-bar">
        <button className="filter-button All-button" onClick={()=>setfilter("all")}  >
          All
        </button>
        {categories.map(cat=>(
            <button className="filter-button"  key={cat.id} onClick={()=>setfilter(cat.id)}>{cat.name}</button>
        ))}

    </div>

    );
   };
   export default Filterbar;