

const CartDetails =({cart, setCart})=>{
    const increaseqty =(id)=>{
        setCart(prev=>
            prev.map(item=>(
                item.id===id
                ?{...item, qty: item.qty+1}
                :item
            ))
    )
    }
    const decreaseqty =(id)=>{
        setCart(prev=>
            prev.map(item=>(    
                item.id===id
                ?{...item, qty: item.qty-1}
                :item
            ))
            .filter(item=>item.qty>0 )
        )
    }
    const removeitem = (id)=>{
        setCart(prev=>
            prev.filter(item2=>item2.id!==id)
        )
        }
    
    const total = cart.reduce((sum,item)=>sum+ item.price*item.qty ,0)
    


    return (
        <>
            <h2>Your Cart</h2>
            {cart.length==0 && <p>Cart is empty !!!</p>}
            {cart.map(item=>(

                <div key={item.id} style={{display:"flex", width:"90%",justifyContent: "space-between", marginBottom:10, border:"1px solid #cacfcc", padding: 8}}>
                    <div style={{marginBottom:4}}>
                        <div style={{marginBottom:"8px"}}>Name : {item.title}</div>
                        <span>$ {item.price}</span>
                    </div>
                    <div style={{display:"flex", height:25, gap:3, alignItems:"center"}}>
                        <button onClick={()=>{increaseqty(item.id)}}>+ </button>
                        <span>{ item.qty }</span>
                        <button onClick={()=>{decreaseqty(item.id)}}> -</button>
                        <button onClick={()=>{removeitem(item.id)}} style={{color:"red"}}>X</button>
                    </div>
                </div>
            ))}
            
           
            
            <h2>Total : ${total} </h2>
            </>
    );
}

export default CartDetails;