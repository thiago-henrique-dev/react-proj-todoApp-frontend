import React from "react";
import If from './if'

export default props => (
    <If teste={!props.hide}> {/*Se o teste não esta escondido automaticamente ele mostra e se estiver escondido ela pula renderizaçap*/}
     <button className={'btn btn-'+ props.style}
        onClick={props.onClick}>
         <i className={'fa fa-'+ props.icon}></i>
   </button>
      </If>

)

