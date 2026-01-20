import "./cartmodel.css"

const CartModel = () =>{
    return (
        <div style={{width:300, backgroundColor:"red", margin:"0 auto", padding: 5}}>
            <h2>Your Cart</h2>
            <div style={{display:"flex", justifyContent: "space-between"}}>
                <div style={{marginBottom:4}}>
                    <div>cappucino</div>
                    <p style={{marginTop:3, marginBottom:3}}>size: small</p>
                    <span>$4</span>
                </div>
                <div>
                    <button>+</button>
                    <span>1</span>
                    <button>-</button>
                    <button>X</button>
                </div>
            </div>
            <div style={{display:"flex", justifyContent: "space-between"}}>
                <div>
                    <div>cappucino</div>
                    <p>size: small</p>
                    <span>$4</span>
                </div>
                <div>
                    <button>+</button>
                    <span>1</span>
                    <button>-</button>
                    <button>X</button>
                </div>
            </div>
            <h2>Total :  $58.25</h2>
            <button style={{display:"block", width: "100%", marginBottom:5 }}>checkout</button>
            <button style={{display:"block", width: "100%", }} className="w-10">Close</button>
        </div>
    );
}
export default CartModel;