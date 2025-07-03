import React from "react";

const formHtml = `
<style>@import url(https://fonts.bunny.net/css?family=ibm-plex-sans:400,400i,700);</style>
<style>
#_form_6_ {font-size:16px;line-height:1.6;font-family:'IBM Plex Sans',arial,helvetica,sans-serif;margin:0;max-width:420px;margin:auto;}
#_form_6_ ._form-title {color:#fc0303;text-align:center;font-size:2rem;font-weight:700;margin-bottom:0.5rem;line-height:1.2;}
#_form_6_ ._html-code p {text-align:center;font-style:italic;color:#222;margin-bottom:1.5rem;}
#_form_6_ ._form-content {display:flex;flex-direction:column;gap:1.2rem;}
#_form_6_ ._form-fields-col {display:flex;flex-direction:column;gap:1rem;}
#_form_6_ ._form_element {display:flex;flex-direction:column;gap:0.3rem;flex:1;}
#_form_6_ ._form_element label {font-weight:600;color:#222;text-align:left;}
#_form_6_ input[type="text"] {padding:10px 12px;border:1px solid #bdbdbd;border-radius:8px;font-size:1rem;width:100%;color:#000;background:#fff;}
#_form_6_ input[type="text"]::-webkit-input-placeholder {color:#888 !important;}
#_form_6_ input[type="text"]::placeholder {color:#888 !important;}
#_form_6_ input[type="text"]:-webkit-autofill { -webkit-text-fill-color: #000 !important; box-shadow: 0 0 0 1000px #fff inset !important; }
#_form_6_ ._form-fieldset {border:0;padding:0;margin:0;}
#_form_6_ ._form-fieldset legend {font-weight:600;color:#222;text-align:left;margin-bottom:0.5rem;}
#_form_6_ ._row._checkbox-radio {display:flex;align-items:center;margin-bottom:0.2rem;}
#_form_6_ ._row._checkbox-radio label {font-weight:400;margin-left:0.5rem;color:#222;}
#_form_6_ ._submit {width:100%;max-width:220px;background:#fc0303 !important;color:#fff !important;font-weight:700;padding:14px 0;border-radius:12px;font-size:1.1rem;margin:1.5rem auto 0 auto;display:block;transition:background 0.2s;}
#_form_6_ ._submit:hover {background:#b80000 !important;}
@media (min-width:600px) {
  #_form_6_ {max-width:420px;}
  #_form_6_ ._form-content {gap:2rem;}
  #_form_6_ ._form-fields-col {gap:1.2rem;}
}
</style>
<div style="text-align: center;">
  <form method="POST" action="https://digitalresultsadm.activehosted.com/proc.php" id="_form_6_" class="_form _form_6 _inline-form _inline-style _dark" novalidate data-styles-version="5">
    <input type="hidden" name="u" value="6" />
    <input type="hidden" name="f" value="6" />
    <input type="hidden" name="s" />
    <input type="hidden" name="c" value="0" />
    <input type="hidden" name="m" value="0" />
    <input type="hidden" name="act" value="sub" />
    <input type="hidden" name="v" value="2" />
    <input type="hidden" name="or" value="273d5bf86428494760ed0744223b9561" />
    <div class="_form-content">
      <div class="_form_element _x77196438 _inline-style _clear" style="flex-direction:column;align-items:center;gap:0;" >
        <div class="_form-title">Cadastre-se para assistir a aula aberta da Vanguardia</div>
        <div class="_html-code"><p>Seja bem vindo a Vanguardia.</p></div>
      </div>
      <div class="_form-fields-col">
        <div class="_form_element _x94092531 _inline-style" >
          <label for="fullname" class="_form-label">Nome Completo</label>
          <div class="_field-wrapper"><input type="text" id="fullname" name="fullname" placeholder="Digite seu nome" required/></div>
        </div>
        <div class="_form_element _x95463307 _inline-style" >
          <label for="email" class="_form-label">Email</label>
          <div class="_field-wrapper"><input type="text" id="email" name="email" placeholder="Digite seu email" required/></div>
        </div>
        <div class="_form_element _x33054783 _inline-style" >
          <label for="phone" class="_form-label">Whatsapp</label>
          <div class="_field-wrapper"><input type="text" id="phone" name="phone" placeholder="Digite seu telefone" required/></div>
        </div>
      </div>
      <div class="_form_element _x30509167 _inline-style" >
        <fieldset class="_form-fieldset">
          <legend class="_form-label">Faturamento Mensal</legend>
          <div class="_row _checkbox-radio"><input id="field_12até R$ 15.000,00" type="radio" name="field[12]" value="até R$ 15.000,00" required><span><label for="field_12até R$ 15.000,00">até R$ 15.000,00</label></span></div>
          <div class="_row _checkbox-radio"><input id="field_12R$ 15.000,00 a R$ 30.000,00" type="radio" name="field[12]" value="R$ 15.000,00 a R$ 30.000,00"><span><label for="field_12R$ 15.000,00 a R$ 30.000,00">R$ 15.000,00 a R$ 30.000,00</label></span></div>
          <div class="_row _checkbox-radio"><input id="field_12R$ 30.000,00 a R$ 50.000,00" type="radio" name="field[12]" value="R$ 30.000,00 a R$ 50.000,00"><span><label for="field_12R$ 30.000,00 a R$ 50.000,00">R$ 30.000,00 a R$ 50.000,00</label></span></div>
          <div class="_row _checkbox-radio"><input id="field_12R$ 50.000,00 a R$ 100.000,00" type="radio" name="field[12]" value="R$ 50.000,00 a R$ 100.000,00"><span><label for="field_12R$ 50.000,00 a R$ 100.000,00">R$ 50.000,00 a R$ 100.000,00</label></span></div>
          <div class="_row _checkbox-radio"><input id="field_12R$ 100.000,00 a R$ 250.000,00" type="radio" name="field[12]" value="R$ 100.000,00 a R$ 250.000,00"><span><label for="field_12R$ 100.000,00 a R$ 250.000,00">R$ 100.000,00 a R$ 250.000,00</label></span></div>
          <div class="_row _checkbox-radio"><input id="field_12acima de R$ 250.000,00" type="radio" name="field[12]" value="acima de R$ 250.000,00"><span><label for="field_12acima de R$ 250.000,00">acima de R$ 250.000,00</label></span></div>
        </fieldset>
      </div>
      <div class="_button-wrapper _inline-style"><button id="_form_6_submit" class="_submit" type="submit">Enviar</button></div>
      <div class="_clear-element"></div>
      <div class="_form-thank-you" style="display:none;"></div>
    </div>
  </form>
</div>
`;

const ActiveCampaignForm = () => (
  <div dangerouslySetInnerHTML={{ __html: formHtml }} />
);

export default ActiveCampaignForm;
