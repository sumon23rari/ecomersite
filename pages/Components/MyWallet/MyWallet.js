import React from 'react';
import wallet from '../../../public/css/Wallet.module.css';
import { FiArrowUpRight,FiArrowDownLeft } from  "react-icons/fi";
import { RxMagnifyingGlass } from "react-icons/rx";
import Invoiced from '../../../public/css/Invoice.module.css';
import Link from 'next/link';
import { Table } from 'react-bootstrap';
import {FaChevronLeft,FaChevronRight} from "react-icons/fa";
import AccountChart from './AccountChart';
const MyWallet = () => {
    const walletData=[
        {
            inVId:'INV-008-248',
        Transfer_type:'Revel eCommerce-Multi vendor',
            user:'Salman',
            data:'Mar 11 2022',
            Amount:'$144'
        },
        {
            inVId:'INV-011-195',
        Transfer_type:'Revel eCommerce-Multi vendor',
            user:'Salman',
            data:'Mar 15 2022',
            Amount:'$214'
        },
        {
            inVId:'INV-010-305',
        Transfer_type:'Revel eCommerce-Multi vendor',
            user:'Salman',
            data:'Apr 15 2022',
            Amount:'$431'
        }
    ]
    return (
        <div className='row'>
            <div className={wallet.accountTitle}>my wallet</div>
            <div className="col-md-6">
                <div className={wallet.accountTotal}>
                    <div className={wallet.top}>
                        <h4>total balance</h4>
                        <div className={wallet.tags}>
                        <span className={`${wallet.tag} ${wallet.tagUp}`}>
                            <FiArrowUpRight></FiArrowUpRight>
                            $600.99</span>
                        <span className={`${wallet.tag} ${wallet.tagdown}`}>
                            <FiArrowDownLeft></FiArrowDownLeft>
                            $700.99</span>
                    </div>
                    </div>
                    <div className={wallet.middle}>
                     <h3>$795086</h3>
                    </div>
                    <div className={wallet.btnBox}>
                        <Link href={'#'} className={wallet.btnFirst}>Deposit</Link>
                        <Link href={'#'}className={wallet.btnFirst}>withdraw</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className={wallet.chartPanel}>
                    <AccountChart></AccountChart>
                </div>
            </div>
            <div className="col-12 mt-3">
                <div className={wallet.tableWrap}>
                    <div className={wallet.tableTop}>
                        <h4 className={wallet.title}>transfer history</h4>
                        <from className={wallet.searchBox}>
                            <input type="search" placeholder='search' />
                            <button type="submit"><RxMagnifyingGlass></RxMagnifyingGlass></button>
                        </from>
                    </div>
<div className="table-responsive">
<div className="overflow-x-auto mt-3">
    <Table>
        <thead>
<tr>
    <th className={wallet.tableheading}> ID</th>
    <th className={wallet.tableheading}>Date</th>
    <th className={wallet.tableheading}>Transfer_type</th>
    <th className={wallet.tableheading}>Amount</th>

</tr>
        </thead>
        <tbody>
          {
         walletData.map((itemData)=><tr key={itemData.inVId}>
            <td  className={wallet.tableData}>{itemData.inVId}</td>
            <td  className={wallet.tableData}>{itemData.data}</td>
            <td  className={wallet.tableData}>{itemData.Transfer_type}</td>
            <td  className={wallet.tableData}>{itemData.Amount}</td>
         
         </tr>)
          }
       
        </tbody>
        </Table>
    
</div>
</div>
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
        </div>
    );
};

export default MyWallet;