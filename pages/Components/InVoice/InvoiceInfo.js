import React from 'react';
import { Table } from 'react-bootstrap';
import Invoiced from '../../../public/css/Invoice.module.css';
import {FaChevronLeft,FaChevronRight} from "react-icons/fa";
const InvoiceInfo = () => {
    const invoiceData=[
        {
            inVId:'INV-008-248',
            recipient:'john Doe',
            data:'Mar 11 2022',
            Amount:'$44',
            status:'paid'
        },
        {
            inVId:'INV-011-195',
            recipient:'john Doe',
            data:'Mar 15 2022',
            Amount:'$54',
            status:'unpaid'
        },
        {
            inVId:'INV-010-305',
            recipient:'john Doe',
            data:'Apr 15 2022',
            Amount:'$54',
            status:'paid'
        },
        {
            inVId:'INV-011-385',
            recipient:'john Doe',
            data:'May 09 2022',
            Amount:'$98',
            status:'unpaid'
        },
        {
            inVId:'INV-012-245',
            recipient:'john Doe',
            data:'August 24 2022',
            Amount:'$74',
            status:'paid'
        },
        {
            inVId:'INV-112-365',
            recipient:'john Doe',
            data:'oct 15 2022',
            Amount:'$20',
            status:'unpaid'
        }
    ]
    return (
        <div>
            <div className="invoiceContent">
                        <div>
                            <h4 class={Invoiced.invoiceTitle}>Invoice</h4>
                        </div>
                        
                       <div className="tableResponsive">
<div className="overflow-x-auto mt-3">
    <Table>
        <thead>
<tr>
    <th className={Invoiced.tableheading}>Invoice ID</th>
    <th className={Invoiced.tableheading}>Recipient</th>
    <th className={Invoiced.tableheading}>Date</th>
    <th className={Invoiced.tableheading}>Amount</th>
    <th className={Invoiced.tableheading}>Status</th>
</tr>
        </thead>
        <tbody>
          {
         invoiceData.map((itemData)=><tr key={itemData.inVId}>
            <td  className={Invoiced.tableData}>{itemData.inVId}</td>
            <td  className={Invoiced.tableData}>{itemData.recipient}</td>
            <td  className={Invoiced.tableData}>{itemData.data}</td>
            <td  className={Invoiced.tableData}>{itemData.Amount}</td>
            <td  className={Invoiced.tableData}><span className={`${itemData.status==='paid'?Invoiced.tablestatus:Invoiced.tableinActive}`}>{itemData.status}</span></td>
         </tr>)
          }
       
        </tbody>
        </Table>
    {/* dfsdfs */}
</div>
                    
                       </div>
                      {/* table bottom  */}
                      <div className={Invoiced.tableBottom}>
                        <div className="partText">
                            <p>Showing 06 from 50 data</p>
                        </div>
                        <div className={Invoiced.pagination}>
                            <button disabled><FaChevronLeft></FaChevronLeft></button>
                            <button className={Invoiced.activebutton}>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button><FaChevronRight></FaChevronRight></button>
                        </div>
                      </div>
                       
                    </div> 
        </div>
    );
};

export default InvoiceInfo;