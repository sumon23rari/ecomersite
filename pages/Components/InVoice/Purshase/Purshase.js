import React from 'react';
import { Table } from 'react-bootstrap';
import Invoiced from '../../../../public/css/Invoice.module.css';
import {FaChevronLeft,FaChevronRight} from "react-icons/fa";
const Purshase = () => {
    const purshasData=[
        {
            inVId:'INV-008-248',
        details:'Revel eCommerce-Multi vendor',
            invoice:'48452022',
            data:'Mar 11 2022',
            Amount:'$144'
        },
        {
            inVId:'INV-011-195',
        details:'Revel eCommerce-Multi vendor',
            invoice:'48452023',
            data:'Mar 15 2022',
            Amount:'$214'
        },
        {
            inVId:'INV-010-305',
        details:'Revel eCommerce-Multi vendor',
            invoice:'48462022',
            data:'Apr 15 2022',
            Amount:'$431'
        },
        {
            inVId:'INV-011-385',
        details:'Revel eCommerce-Multi vendor',
            invoice:'48462022',
            data:'May 09 2022',
            Amount:'$357',
          
        },
        {
            inVId:'INV-012-245',
        details:'Revel eCommerce-Multi vendor',
            invoice:'47452022',
            data:'August 24 2022',
            Amount:'$257'
           
        },
        {
            inVId:'INV-112-365',
        details:'Revel eCommerce-Multi vendor',
            invoice:'58412022',
            data:'oct 15 2022',
            Amount:'$256'
           
        }
    ]
    return (
        <div>
           <div className="invoiceContent">
                        <div>
                            <h4 class={Invoiced.invoiceTitle}>purshase history</h4>
                        </div>
                        
                       <div className="tableResponsive">
<div className="overflow-x-auto mt-3">
    <Table>
        <thead>
<tr>
    <th className={Invoiced.tableheading}> ID</th>
    <th className={Invoiced.tableheading}>Date</th>
    <th className={Invoiced.tableheading}>Details</th>
    <th className={Invoiced.tableheading}>Amount</th>

</tr>
        </thead>
        <tbody>
          {
         purshasData.map((itemData)=><tr key={itemData.inVId}>
            <td  className={Invoiced.tableData}>{itemData.inVId}</td>
            <td  className={Invoiced.tableData}>{itemData.data}</td>
            <td  className={Invoiced.tableData}>{itemData.details} <br /> <span>Invoice:{itemData.invoice}</span></td>
            <td  className={Invoiced.tableData}>{itemData.Amount}</td>
         
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

export default Purshase;