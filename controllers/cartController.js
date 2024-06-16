import userModel from './../models/userModel.js';

// add items to user cart
const addToCart = async (req,res) => {
        try {
            let userData = await userModel.findById(req.body.userId);
            let cartData = await userData.cartData;
            if(!cartData[req.body.itemId])
                {
                    cartData[req.body.itemId] = 1
                }
                else{
                    cartData[req.body.itemId] += 1;
                }
                await userModel.findByIdAndUpdate(req.body.userId,{cartData});
                res.json({success:true,message:"Added To Cart"});
        } catch (error) {
            console.log(error);
            res.json({success:false,message:"Error"})
        }

}

// remove items from user cart
const removeFromCart = async (req,res) => {
        try {
            let userData = await userModel.findById(req.body.userId);
            let cartData = await userData.cartData;
            if (cartData[req.body.itemId]>0) {
                cartData[req.body.itemId] -=1;
            }
            await userModel.findByIdAndUpdate(req.body.userId,{cartData});
            res.json({success:true,message:"Remove From Cart"})
        } catch (error) {
            console.log(error);
            res.json({success:false,message:"Error"})
        }
}

// fetch user cart data
const getCart = async (req,res) => {
        try {
            let userData = await userModel.findById(req.body.userId);
            let cartData = await userData.cartData;
            res.json({success:true,cartData})
        } catch (error) {
            console.log(error);
            res.json({success:false,message:"Error"})
        }
}

export {addToCart,removeFromCart,getCart};


// import userModel from './../models/userModel.js';

// // Add items to user cart
// const addToCart = async (req, res) => {
//     try {
//         const { userId, itemId } = req.body;
//         if (!userId || !itemId) {
//             return res.status(400).json({ success: false, message: "userId and itemId are required" });
//         }

//         let user = await userModel.findById(userId);
//         if (!user) {
//             return res.status(404).json({ success: false, message: "User not found" });
//         }

//         let cartData = user.cartData || {};
//         if (!cartData[itemId]) {
//             cartData[itemId] = 1;
//         } else {
//             cartData[itemId] += 1;
//         }

//         await userModel.findByIdAndUpdate(userId, { cartData });

//         res.status(200).json({ success: true, message: "Added To Cart" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
// };

// // Remove items from user cart
// const removeFromCart = async (req, res) => {
//     try {
//         const { userId, itemId } = req.body;
//         if (!userId || !itemId) {
//             return res.status(400).json({ success: false, message: "userId and itemId are required" });
//         }

//         let user = await userModel.findById(userId);
//         if (!user) {
//             return res.status(404).json({ success: false, message: "User not found" });
//         }

//         let cartData = user.cartData || {};
//         if (cartData[itemId] && cartData[itemId] > 0) {
//             cartData[itemId] -= 1;
//         }

//         await userModel.findByIdAndUpdate(userId, { cartData });

//         res.status(200).json({ success: true, message: "Removed From Cart" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
// };

// // Fetch user cart data
// const getCart = async (req, res) => {
//     try {
//         const { userId } = req.body;
//         if (!userId) {
//             return res.status(400).json({ success: false, message: "userId is required" });
//         }

//         let user = await userModel.findById(userId);
//         if (!user) {
//             return res.status(404).json({ success: false, message: "User not found" });
//         }

//         let cartData = user.cartData || {};
//         res.status(200).json({ success: true, cartData });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
// };

// export { addToCart, removeFromCart, getCart };
