const MensageBuyService = (product) => {
  return {
    href: `https://api.whatsapp.com/send?phone=5581992628016&text=Olá quero comprar ${product.type} de ${product.description} da ${product.productBrand} que está por ${product.priceWithoutDiscount} e ${product.discountPrice} á vista`,
    target: "_blank",
  };
};

export default MensageBuyService;
