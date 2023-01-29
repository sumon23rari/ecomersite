import React, { useState } from 'react';
import Conversation from '../Conversation/Conversation';
import ManageProfile from '../ManageProfile/ManageProfile';
import MyWallet from '../MyWallet/MyWallet';
import InvoiceInfo from './InvoiceInfo';
import InvoicePic from './InvoicePic';
import Purshase from './Purshase/Purshase';

const Invoice = () => {
    const [active,setActive]=useState('firstElement');
    return (
        <>
            <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <InvoicePic active={active} setActive={setActive}></InvoicePic>
                </div>
                <div className="col-lg-9">
                  {active==='firstElement' && <InvoiceInfo></InvoiceInfo>}
                  {active==='secondElement' && <Purshase></Purshase>}
                  {active==='thirdElement' && <Conversation></Conversation>}
                  {active==='fourthElement' && <MyWallet></MyWallet>}
                  {active==='fiveElement' && <ManageProfile></ManageProfile>}
              
                </div>
            </div>
            </div>
        </>
    );
};

export default Invoice;