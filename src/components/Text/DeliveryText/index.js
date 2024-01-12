import React, { Component } from "react";
import styled from "styled-components";

const MobileText = styled.div`
  font-size: 1rem;
  text-align: center;
`;

const DesktopText = styled.div`
  font-size: 2rem;
  text-align: center;
`;

class Index extends Component {
  render() {
    return (
      <>
        <MobileText className="d-md-none">
          Enviamos todos os produtos conforme a opção escolhida pelo cliente. A
          entrega em Gravatá será feita assim que o pagamento for confirmado.
          Caso o envio seja pelos Correios, o prazo é de até 2 dias úteis após a
          confirmação do pagamento. O prazo de entrega varia de acordo com a
          modalidade de envio selecionada e não está sob nossa responsabilidade,
          pois a entrega é realizada pelos Correios. Assim que a encomenda for
          postada, você receberá um código de rastreamento para acompanhar o
          status da entrega através do site dos Correios.
        </MobileText>
        <DesktopText className="d-none d-md-block">
          Enviamos todos os produtos conforme a opção escolhida pelo cliente. A
          entrega em Gravatá será feita assim que o pagamento for confirmado.
          Caso o envio seja pelos Correios, o prazo é de até 2 dias úteis após a
          confirmação do pagamento. O prazo de entrega varia de acordo com a
          modalidade de envio selecionada e não está sob nossa responsabilidade,
          pois a entrega é realizada pelos Correios. Assim que a encomenda for
          postada, você receberá um código de rastreamento para acompanhar o
          status da entrega através do site dos Correios.
        </DesktopText>
      </>
    );
  }
}

export default Index;
