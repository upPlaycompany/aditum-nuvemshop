
import React from 'react';

const Message = () => {
    const [campos, setCampos] = React.useState({
        txtAtivar: '',
        txtAmbiente: '',
        txtTipoFraude: '',
        txtIdFraude: '',
        txtCNPJ: '',
        txtMercToken: '',
        txtTimeExpire: 0,
        txtStatus: '',
        txtRua: '',
        txtNumero: '',
        txtComplemento: '',
        txtBairro: '',

        //Aditum Cartão de crédito

        txtAtivarCredito: '',
        txtParcelas: 0,

        //Aditum Boleto

        txtAtivarBoleto: '',
        txtVencimento: 0,
        txtDiasMulta: 0,
        txtFixoMulta: 0,
        txtPercentualMulta: 0,



    });


    function handleInputChange(event) {
        campos[event.target.name] = event.target.value;
        setCampos(campos);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(campos);
    }
}

export default Message;