<template>
    <div class="page-container">
      <img class="logo" src="@/assets/images/Logo.svg" alt="Logo">
      <div class="main-content">
        <div class="menu-selection">
          <div class="menu-header">Monte aqui o seu cardápio. O que está esperando?</div>
          <div class="input-container">
            <input class="input-title" type="text" placeholder="Título do pedido" />
            <input class="input-flavor" type="text" placeholder="Sabor" />
            <input class="input-price" type="text" placeholder="R$" />
          </div>
          <textarea class="textarea-description" placeholder="Descrição"></textarea>
          <div class="upload-section">
            <div class="upload-icon"></div>
            <div class="upload-instructions">Jogue aqui o arquivo de imagem do seu pastel ou clique para localizar a pasta.</div>
          </div>
          <button class="button-clear">Limpar</button>
          <button class="button-register">Cadastrar</button>
        </div>
        <img class="parallax-pastel" src="../assets/images/pastel-parallax.png" alt="Parallax Pastel">
        <img class="pastels-img" src="../assets/images/pastelis-img.png" alt="Pastéis">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainPage',
    // Script data and methods would go here
  }
  </script>
  
  <style scoped>
  .page-container {
    position: relative;
    width: 1920px;
    height: 1233px;
    background: transparent radial-gradient(closest-side at 50% 50%, #FFFFFF 0%, #FFFFFF 67%, #FFFFFF00 100%) 0% 0% no-repeat padding-box;
  }
  
  .logo, .parallax-pastel, .pastels-img {
    position: absolute;
    opacity: 1;
  }
  
  .logo {
    top: 0px;
    left: 0px;
  }
  
  .parallax-pastel {
    top: 17px;
    left: 65px;
    width: 555px;
    height: 555px;
    transform: matrix(0.68, -0.73, 0.73, 0.68, 0, 0);
    filter: blur(5px);
  }
  
  .pastels-img {
    top: 193px;
    left: 1172px;
    width: 393px;
    height: 316px;
  }
  
  .menu-selection {
    position: absolute;
    top: 348px;
    left: 370px;
    width: 1180px;
    background: #FFCA00;
    border-radius: 20px 20px 0px 0px;
  }
  
  .menu-header {
    top: 373px;
    left: 430px;
    width: 540px;
    height: 29px;
    text-align: center;
    font: italic normal bold 24px/29px Roboto;
    color: #A03400;
  }
  
  .input-container {
    display: flex;
    justify-content: space-between;
  }
  
  .input-title, .input-flavor, .input-price, .textarea-description {
    background: #FFFFFF;
    border: 1px solid #E43636;
    border-radius: 10px;
    font: normal normal normal 16px/21px Roboto;
    color: #A03400;
  }
  
  /* The rest of the CSS properties would be applied to their respective classes similarly */
  </style>
  