const [campos, setCampos] = useState({
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

    //Aditum Cartão de crédito

    txtAtivarCredito: '',
    txtVencimento: 0,
    txtDiasMulta: 0,
    txtFixoMulta: 0,
    txtPercentualMulta: 0,



});
function handleInputChange(event) {
    campos[event.target.name] = event.target.value;
    setCampos(campos);
}