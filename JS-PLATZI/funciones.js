function calculateDiscountedPrice (price, discountPercentage) {
    const discount = (price * discountPercentage) / 100
    const priceWithDiscount = price - discount
  
    return priceWithDiscount
  }
  
  const originalPrice = 1000
  const discountPercentage = 15
  const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage)

console.log(`Original Price: $${originalPrice}
Discount: ${discountPercentage}%
Price with discount: $${finalPrice}`)