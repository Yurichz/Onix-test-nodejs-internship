const getCurrentRates = async (req, res) => {
  const { currency } = req.query;
  if(!currency) {
    return res.status(400).json({
      error: 'Missing params',
      example: 'http://localhost:3000/rates?currency=bitcoin'
    });
  }

  const rates = await fetch(`https://api.coincap.io/v2/assets/${currency}`);
  const { data } = await rates.json();

  return res.status(200).json({ 'usd': data.priceUsd});
};

module.exports = {
  getCurrentRates
}
