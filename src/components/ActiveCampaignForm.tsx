import React, { useEffect } from "react";

const formHtml = `
<style>@import url(https://fonts.bunny.net/css?family=ibm-plex-sans:400,400i,700);</style>
<style>
#_form_6_{font-size:14px;line-height:1.6;font-family:arial, helvetica, sans-serif;margin:0}#_form_6_ *{outline:0}._form_hide{display:none;visibility:hidden}._form_show{display:block;visibility:visible}#_form_6_._form-top{top:0}#_form_6_._form-bottom{bottom:0}#_form_6_._form-left{left:0}#_form_6_._form-right{right:0}#_form_6_ input[type="text"],#_form_6_ input[type="tel"],#_form_6_ input[type="date"],#_form_6_ textarea{padding:6px;height:auto;border:#979797 1px solid;border-radius:4px;color:#000 !important;font-size:14px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}#_form_6_ textarea{resize:none}#_form_6_ ._submit{-webkit-appearance:none;cursor:pointer;font-family:arial, sans-serif;font-size:14px;text-align:center;background:#FC0303 !important;border:3px solid #050401 !important;-moz-border-radius:10px !important;-webkit-border-radius:10px !important;border-radius:10px !important;color:#FFFFFF !important;padding:14px !important}#_form_6_ ._submit:disabled{cursor:not-allowed;opacity:0.4}#_form_6_ ._submit.processing{position:relative}#_form_6_ ._submit.processing::before{content:"";width:1em;height:1em;position:absolute;z-index:1;top:50%;left:50%;border:double 3px transparent;border-radius:50%;background-image:linear-gradient(#FC0303, #FC0303), conic-gradient(#FC0303, #FFFFFF);background-origin:border-box;background-clip:content-box, border-box;animation:1200ms ease 0s infinite normal none running _spin}#_form_6_ ._submit.processing::after{content:"";position:absolute;top:0;bottom:0;left:0;right:0;background:#FC0303 !important;border:3px solid #050401 !important;-moz-border-radius:10px !important;-webkit-border-radius:10px !important;border-radius:10px !important;color:#FFFFFF !important;padding:14px !important}@keyframes _spin{0%{transform:translate(-50%, -50%) rotate(90deg)}100%{transform:translate(-50%, -50%) rotate(450deg)}}#_form_6_ ._close-icon{cursor:pointer;background-image:url("https://d226aj4ao1t61q.cloudfront.net/esfkyjh1u_forms-close-dark.png");background-repeat:no-repeat;background-size:14.2px 14.2px;position:absolute;display:block;top:11px;right:9px;overflow:hidden;width:16.2px;height:16.2px}#_form_6_ ._close-icon:before{position:relative}#_form_6_ ._form-body{margin-bottom:30px}#_form_6_ ._form-image-left{width:150px;float:left}#_form_6_ ._form-content-right{margin-left:164px}#_form_6_ ._form-branding{color:#fff;font-size:10px;clear:both;text-align:left;margin-top:30px;font-weight:100}#_form_6_ ._form-branding ._logo{display:block;width:130px;height:14px;margin-top:6px;background-image:url("https://d226aj4ao1t61q.cloudfront.net/hh9ujqgv5_aclogo_li.png");background-size:130px auto;background-repeat:no-repeat}#_form_6_ .form-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}#_form_6_ ._form-label,#_form_6_ ._form_element ._form-label{font-weight:bold;margin-bottom:5px;display:block}#_form_6_._dark ._form-branding{color:#333}#_form_6_._dark ._form-branding ._logo{background-image:url("https://d226aj4ao1t61q.cloudfront.net/jftq2c8s_aclogo_dk.png")}#_form_6_ ._form_element{position:relative;margin-bottom:10px;font-size:0;max-width:100%}#_form_6_ ._form_element *{font-size:14px}#_form_6_ ._form_element._clear{clear:both;width:100%;float:none}#_form_6_ ._form_element._clear:after{clear:left}#_form_6_ ._form_element input[type="text"],#_form_6_ ._form_element input[type="date"],#_form_6_ ._form_element select,#_form_6_ ._form_element textarea:not(.g-recaptcha-response){display:block;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-family:inherit}#_form_6_ ._field-wrapper{position:relative}#_form_6_ ._inline-style{float:left}#_form_6_ ._inline-style input[type="text"]{width:150px}#_form_6_ ._inline-style:not(._clear){margin-right:20px}#_form_6_ ._form_element img._form-image{max-width:100%}#_form_6_ ._form_element ._form-fieldset{border:0;padding:0.01em 0 0 0;margin:0;min-width:0}#_form_6_ ._clear-element{clear:left}#_form_6_ ._full_width{width:100%}#_form_6_ ._form_full_field{display:block;width:100%;margin-bottom:10px}#_form_6_ input[type="text"]._has_error,#_form_6_ textarea._has_error{border:#F37C7B 1px solid}#_form_6_ input[type="checkbox"]._has_error{outline:#F37C7B 1px solid}#_form_6_ ._show_be_error{float:left}#_form_6_ ._error{display:block;position:absolute;font-size:14px;z-index:10000001}#_form_6_ ._error._above{padding-bottom:4px;bottom:39px;right:0}#_form_6_ ._error._below{padding-top:8px;top:100%;right:0}#_form_6_ ._error._above ._error-arrow{bottom:-4px;right:15px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #FFDDDD}#_form_6_ ._error._below ._error-arrow{top:0;right:15px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #FFDDDD}#_form_6_ ._error-inner{padding:12px 12px 12px 36px;background-color:#FFDDDD;background-image:url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 3V9H7V3H9ZM9 13V11H7V13H9Z' fill='%23CA0000'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:12px center;font-size:14px;font-family:arial, sans-serif;font-weight:600;line-height:16px;color:#000;text-align:center;text-decoration:none;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;box-shadow:0 1px 4px rgba(31, 33, 41, 0.298295)}@media only screen and (max-width:319px){#_form_6_ ._error-inner{padding:7px 7px 7px 25px;font-size:12px;line-height:12px;background-position:4px center;max-width:100px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}}#_form_6_ ._error-inner._form_error{margin-bottom:5px;text-align:left}#_form_6_ ._button-wrapper ._error-inner._form_error{position:static}#_form_6_ ._error-inner._no_arrow{margin-bottom:10px}#_form_6_ ._error-arrow{position:absolute;width:0;height:0}#_form_6_ ._error-html{margin-bottom:10px}.pika-single{z-index:10000001 !important}#_form_6_ input[type="text"].datetime_date{width:69%;display:inline}#_form_6_ select.datetime_time{width:29%;display:inline;height:32px}#_form_6_ input[type="date"].datetime_date{width:69%;display:inline-flex}#_form_6_ input[type="time"].datetime_time{width:29%;display:inline-flex}@media (min-width:320px) and (max-width:667px){::-webkit-scrollbar{display:none}#_form_6_{margin:0;width:100%;min-width:100%;max-width:100%;box-sizing:border-box}#_form_6_ *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-size:1em}#_form_6_ ._form-content{margin:0;width:100%}#_form_6_ ._form-inner{display:block;min-width:100%}#_form_6_ ._form-title,#_form_6_ ._inline-style{margin-top:0;margin-right:0;margin-left:0}#_form_6_ ._form-title{font-size:1.2em}#_form_6_ ._form_element{margin:0 0 20px;padding:0;width:100%}#_form_6_ ._form-element,#_form_6_ ._inline-style,#_form_6_ input[type="text"],#_form_6_ label,#_form_6_ p,#_form_6_ textarea:not(.g-recaptcha-response){float:none;display:block;width:100%}#_form_6_ ._row._checkbox-radio label{display:inline}#_form_6_ ._row,#_form_6_ p,#_form_6_ label{margin-bottom:0.7em;width:100%}#_form_6_ ._row input[type="checkbox"],#_form_6_ ._row input[type="radio"]{margin:0 !important;vertical-align:middle !important}#_form_6_ ._row input[type="checkbox"]+span label{display:inline}#_form_6_ ._row span label{margin:0 !important;width:initial !important;vertical-align:middle !important}#_form_6_ ._form-image{max-width:100%;height:auto !important}#_form_6_ input[type="text"]{padding-left:10px;padding-right:10px;font-size:16px;line-height:1.3em;-webkit-appearance:none}#_form_6_ input[type="radio"],#_form_6_ input[type="checkbox"]{display:inline-block;width:1.3em;height:1.3em;font-size:1em;margin:0 0.3em 0 0;vertical-align:baseline}#_form_6_ button[type="submit"]{padding:20px;font-size:1.5em}#_form_6_ ._inline-style{margin:20px 0 0 !important}#_form_6_ ._inline-style input[type="text"]{width:100%}}#_form_6_ .sms_consent_checkbox{position:relative;width:100%;display:flex;align-items:flex-start;padding:20px 0}#_form_6_ .sms_consent_checkbox input[type="checkbox"]{float:left;margin:5px 10px 10px 0}#_form_6_ .sms_consent_checkbox .sms_consent_message{display:inline;float:left;text-align:left;margin-bottom:10px;font-size:14px;color:#7D8799}#_form_6_ .sms_consent_checkbox .sms_consent_message.sms_consent_mini{width:90%}#_form_6_ .sms_consent_checkbox ._error._above{right:auto;bottom:0}#_form_6_ .sms_consent_checkbox ._error._above ._error-arrow{right:auto;left:5px}@media (min-width:320px) and (max-width:667px){#_form_6_ .sms_consent_checkbox ._error._above{top:-30px;left:0;bottom:auto}}#_form_6_ .field-required{color:#FF0000}#_form_6_{position:relative;text-align:left;margin:25px auto 0;padding-top:35px;padding-right:35px;padding-bottom:35px;padding-left:35px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;background:white !important;border-top:5px solid #0822a1 !important;border-right:5px solid #0822a1 !important;border-bottom:5px solid #0822a1 !important;border-left:5px solid #0822a1 !important;max-width:500px;-moz-border-radius:23px !important;-webkit-border-radius:23px !important;border-radius:23px !important;color:#000000}#_form_6_ ._show_be_error{min-width:100%}#_form_6_._inline-form,#_form_6_._inline-form ._form-content{font-family:IBM Plex Sans;font-size:14px;font-weight:400}#_form_6_._inline-form ._row span:not(.field-required),#_form_6_._inline-form ._row label{font-family:IBM Plex Sans;font-size:14px;font-weight:400;line-height:1.6em;color:black !important}#_form_6__inlineform input[type="text"],#_form_6__inlineform input[type="date"],#_form_6__inlineform input[type="tel"],#_form_6__inlineform select,#_form_6__inlineform textarea:not(.g-recaptcha-response){font-family:IBM Plex Sans;font-size:14px;font-weight:400;font-color:#000000;line-height:1.6em}#_form_6_._inline-form ._html-code *:not(h1, h2, h3, h4, h5, h6),#_form_6_._inline-form .sms_consent_message,#_form_6_._inline-form ._form-thank-you{font-family:IBM Plex Sans;font-size:14px;font-weight:400;font-style:italic;color:black !important}#_form_6_._inline-form ._form-label,#_form_6_._inline-form ._form-emailidentifier,#_form_6_._inline-form ._form-checkbox-option-label{font-family:IBM Plex Sans;font-size:14px;font-weight:700;line-height:1.6em;color:black !important}#_form_6_._inline-form ._submit{margin-top:12px;font-family:IBM Plex Sans;font-size:14px;font-weight:400}#_form_6_._inline-form ._html-code h1,#_form_6_._inline-form ._html-code h2,#_form_6_._inline-form ._html-code h3,#_form_6_._inline-form ._html-code h4,#_form_6_._inline-form ._html-code h5,#_form_6_._inline-form ._html-code h6,#_form_6_._inline-form ._form-title{font-family:IBM Plex Sans;font-size:30px;line-height:normal;font-weight:700;color:#f90202;margin-bottom:0;display:block}#_form_6_._inline-form ._form-branding{font-family:"IBM Plex Sans", Helvetica, sans-serif;font-size:13px;font-weight:100;font-style:normal;text-decoration:none}#_form_6_:before,#_form_6_:after{content:" ";display:table}#_form_6_:after{clear:both}#_form_6_._inline-style{width:auto;display:inline-block}#_form_6_._inline-style input[type="text"],#_form_6_._inline-style input[type="date"]{padding:10px 12px}#_form_6_._inline-style button._inline-style{position:relative;top:27px}#_form_6_._inline-style p{margin:0}#_form_6_._inline-style ._button-wrapper{position:relative;margin:16px 12.5px 0 20px}#_form_6_ ._form-thank-you{position:relative;left:0;right:0;text-align:center;font-size:18px}#_form_6_ ._form-pc-confirmation ._submit{margin-top:16px}@media (min-width:320px) and (max-width:667px){#_form_6_._inline-form._inline-style ._inline-style._button-wrapper{margin-top:20px !important;margin-left:0 !important}}#_form_6_ .iti{width:100%}#_form_6_ .iti.iti--allow-dropdown.iti--separate-dial-code{width:100%}#_form_6_ .iti input{width:100%;border:#979797 1px solid;border-radius:4px}#_form_6_ .iti--separate-dial-code .iti__selected-flag{background-color:#FFFFFF;border-radius:4px}#_form_6_ .iti--separate-dial-code .iti__selected-flag:hover{background-color:rgba(0, 0, 0, 0.05)}#_form_6_ .iti__country-list{border-radius:4px;margin-top:4px;min-width:460px}#_form_6_ .iti__country-list--dropup{margin-bottom:4px}#_form_6_ .phone-error-hidden{display:none}#_form_6_ .phone-error{color:#E40E49}#_form_6_ .phone-input-error{border:1px solid #E40E49 !important}#_form_6_._inline-form ._form-content ._form-list-subscriptions-field fieldset{margin:0;margin-bottom:1.1428571429em;border:none;padding:0}#_form_6_._inline-form ._form-content ._form-list-subscriptions-field fieldset:last-child{margin-bottom:0}#_form_6_._inline-form ._form-content ._form-list-subscriptions-field legend{margin-bottom:1.1428571429em}#_form_6_._inline-form ._form-content ._form-list-subscriptions-field label{display:flex;align-items:flex-start;justify-content:flex-start;margin-bottom:0.8571428571em}#_form_6_._inline-form ._form-content ._form-list-subscriptions-field label:last-child{margin-bottom:0}#_form_6_._inline-form ._form-content ._form-list-subscriptions-field input{margin:0;margin-right:8px}#_form_6_._inline-form ._form-content ._form-list-subscriptions-field ._form-checkbox-option-label{display:block;font-weight:400;margin-top:-4px}#_form_6_._inline-form ._form-content ._form-list-subscriptions-field ._form-checkbox-option-label-with-description{display:block;font-weight:700;margin-top:-4px}#_form_6_._inline-form ._form-content ._form-list-subscriptions-field ._form-checkbox-option-description{margin:0;font-size:0.8571428571em}#_form_6_._inline-form ._form-content ._form-list-subscriptions-field ._form-subscriptions-unsubscribe-all-description{line-height:normal;margin-top:-2px}</style>
<div style="text-align: center;">
  <form method="POST" action="https://digitalresultsadm.activehosted.com/proc.php" id="_form_6_" class="_form _form_6 _inline-form _inline-style _dark" novalidate data-styles-version="5">
    <input type="hidden" name="u" value="6" />
    <input type="hidden" name="f" value="6" />
    <input type="hidden" name="s" />
    <input type="hidden" name="c" value="0" />
    <input type="hidden" name="m" value="0" />
    <input type="hidden" name="act" value="sub" />
    <input type="hidden" name="v" value="2" />
    <input type="hidden" name="or" value="09a151114f7163b0e546b972ec7f0b66" />
    <div class="_form-content">
      <div class="_form_element _x77196438 _inline-style _clear" >
        <title class="_form-title">
          Cadastre-se para assistir a aula aberta da Vanguardia
        </title>
      </div>
      <div class="_form_element _x68176403 _inline-style _clear" >
        <div class="_html-code">
          <p>
            Seja bem vindo a Vanguardia.
          </p>
        </div>
      </div>
      <div class="_form_element _x94092531 _inline-style " >
        <label for="fullname" class="_form-label">
          Nome completo<span class="field-required">
          *
        </span>
      </label>
      <div class="_field-wrapper">
        <input type="text" id="fullname" name="fullname" placeholder="Digite seu nome" required/>
      </div>
    </div>
    <div class="_form_element _x95463307 _inline-style " >
      <label for="email" class="_form-label">
        Email<span class="field-required">
        *
      </span>
    </label>
    <div class="_field-wrapper">
      <input type="text" id="email" name="email" placeholder="Digite seu email" required/>
    </div>
  </div>
  <div class="_form_element _x33054783 _inline-style " >
    <label for="phone" class="_form-label">
      Telefone<span class="field-required">
      *
    </span>
  </label>
  <div class="_field-wrapper">
    <input type="text" id="phone" name="phone" placeholder="Digite seu telefone" required/>
  </div>
</div>
<div class="_form_element _x30509167 _inline-style " >
  <fieldset class="_form-fieldset">
    <legend class="_form-label">
      Faturamento_mensal<span class="field-required">
      *
    </span>
  </legend>
  <div class="_row _checkbox-radio">
    <input id="field_12até R$ 15.000,00" type="radio" name="field[12]"
    value="até R$ 15.000,00"                                     required                                >
    <span>
      <label for="field_12até R$ 15.000,00">
        até R$ 15.000,00
      </span>
    </div>
    <div class="_row _checkbox-radio">
      <input id="field_12R$ 15.000,00 a R$ 30.000,00" type="radio" name="field[12]"
      value="R$ 15.000,00 a R$ 30.000,00"                                                                     >
      <span>
        <label for="field_12R$ 15.000,00 a R$ 30.000,00">
          R$ 15.000,00 a R$ 30.000,00
        </span>
      </div>
      <div class="_row _checkbox-radio">
        <input id="field_12R$ 30.000,00 a R$ 50.000,00" type="radio" name="field[12]"
        value="R$ 30.000,00 a R$ 50.000,00"                                                                     >
        <span>
          <label for="field_12R$ 30.000,00 a R$ 50.000,00">
            R$ 30.000,00 a R$ 50.000,00
          </span>
        </div>
        <div class="_row _checkbox-radio">
          <input id="field_12R$ 50.000,00 a R$ 100.000,00" type="radio" name="field[12]"
          value="R$ 50.000,00 a R$ 100.000,00"                                                                     >
          <span>
            <label for="field_12R$ 50.000,00 a R$ 100.000,00">
              R$ 50.000,00 a R$ 100.000,00
            </span>
          </div>
          <div class="_row _checkbox-radio">
            <input id="field_12R$ 100.000,00 a R$ 250.000,00" type="radio" name="field[12]"
            value="R$ 100.000,00 a R$ 250.000,00"                                                                     >
            <span>
              <label for="field_12R$ 100.000,00 a R$ 250.000,00">
                R$ 100.000,00 a R$ 250.000,00
              </span>
            </div>
            <div class="_row _checkbox-radio">
              <input id="field_12acima de R$ 250.000,00" type="radio" name="field[12]"
              value="acima de R$ 250.000,00"                                                                     >
              <span>
                <label for="field_12acima de R$ 250.000,00">
                  acima de R$ 250.000,00
                </span>
              </div>
            </fieldset>
          </div>
          <div class="_form_element _x68593708 _inline-style " >
            <input type="hidden" name="field[22]" value="" />
          </div>
          <div class="_form_element _x16678713 _inline-style " >
            <input type="hidden" name="field[23]" value="" />
          </div>
          <div class="_form_element _x80564743 _inline-style " >
            <input type="hidden" name="field[24]" value="" />
          </div>
          <div class="_form_element _x28817463 _inline-style " >
            <input type="hidden" name="field[26]" value="" />
          </div>
          <div class="_form_element _x86482337 _inline-style " >
            <input type="hidden" name="field[27]" value="" />
          </div>
          <div class="_button-wrapper _inline-style">
            <button id="_form_6_submit" class="_submit" type="submit">
              Enviar
            </button>
          </div>
          <div class="_clear-element">
          </div>
        </div>
        <div class="_form-thank-you" style="display:none;">
        </div>
      </form>
    </div>
`;

function setUTMFields() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const utmMap = {
    "utm_source": "field[22]",
    "utm_medium": "field[23]",
    "utm_campaign": "field[24]",
    "utm_content": "field[26]",
    "utm_term": "field[27]"
  };
  Object.entries(utmMap).forEach(([utm, field]) => {
    const value = params.get(utm) || "";
    const input = document.querySelector(`#_form_6_ input[name='${field}']`);
    if (input && 'value' in input) {
      (input as HTMLInputElement).value = value;
    }
  });
}

const ActiveCampaignForm = () => {
  useEffect(() => {
    setUTMFields();
  }, []);
  return (
    <div style={{width: '100%'}} dangerouslySetInnerHTML={{ __html: formHtml }} />
  );
};

export default ActiveCampaignForm;
