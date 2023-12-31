const 

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}); // request all data
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};