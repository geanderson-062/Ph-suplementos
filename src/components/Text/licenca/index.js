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
          Copyright © 2023 - 2024 Ph Suplementos, TODOS OS DIREITOS RESERVADOS.
          Todo o conteúdo do site, todas as fotos, imagens, logotipos, marcas,
          dizeres, som, software, conjunto imagem, layout, trade dress, aqui
          veiculados são de propriedade exclusiva da Ph Suplementos. ou de seus
          parceiros. É vedada qualquer reprodução, total ou parcial, de qualquer
          elemento de identidade, sem expressa autorização. A violação de
          qualquer direito mencionado implicará na responsabilização cível e
          criminal nos termos da Lei.
        </MobileText>
        <DesktopText className="d-none d-md-block">
          Copyright © 2023 - 2024 Ph Suplementos, TODOS OS DIREITOS RESERVADOS.
          Todo o conteúdo do site, todas as fotos, imagens, logotipos, marcas,
          dizeres, som, software, conjunto imagem, layout, trade dress, aqui
          veiculados são de propriedade exclusiva da Ph Suplementos. ou de seus
          parceiros. É vedada qualquer reprodução, total ou parcial, de qualquer
          elemento de identidade, sem expressa autorização. A violação de
          qualquer direito mencionado implicará na responsabilização cível e
          criminal nos termos da Lei.
        </DesktopText>
      </>
    );
  }
}

export default Index;
