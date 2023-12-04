// eslint-disable-next-line no-unused-vars
const MensageBuyService = (product) => {
  const priceWithoutDiscount = parseFloat(
    product.priceWithoutDiscount.replace("$", "")
  );
  const discount = priceWithoutDiscount * 0.1; //(10%)
  const discountedPrice = priceWithoutDiscount - discount;
  return {
    href: `https://api.whatsapp.com/send?phone=5581992628016&text=Olá quero comprar ${
      product.type
    } de ${product.description} da ${product.productBrand} que está por ${
      product.priceWithoutDiscount
    } e ${discountedPrice.toFixed(2)} á vista, ainda está disponivel ?`,
    target: "_blank",
  };
};

export default MensageBuyService;
