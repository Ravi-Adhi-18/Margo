import Image from 'next/image'
import styles from './style.module.scss'
import { NormalButton } from '@/components/Common/Inputs/NormalButton'
import { Table } from 'react-bootstrap'
import { useRouter } from 'next/router'

export const Orders = () => {
    const router = useRouter();
    return (
        <>
            <div className="card my-5">
                <div className={`${styles.orderPage} card-body`}>
                    <div className="d-flex flex-wrap justify-content-between">
                        <div className="card_front d-flex flex-wrap">
                            <Image
                                className=""
                                src={'/images/order_icon.png'}
                                alt="Margo Logo"
                                width={100}
                                height={100}
                                blurDataURL={'/images/order_icon.png'}
                                placeholder="blur"
                            />
                           <div className="p-2 ms-4">
                                <h4>Current Order</h4>
                                <h5 className='py-2'>No Current Order</h5>
                                <h6>8AM - 1PM</h6>
                           </div>
                        </div>
                        <div className="d-flex flex-wrap align-items-center flex-row">
                            <div className="p-2">
                                <NormalButton
                                    className='p-md-3'
                                    bgColor='whiteBtn'
                                    onClick={() => console.log("clicked")} 
                                    type="submit" 
                                    disabled={false}
                                >Skip This Order</NormalButton>
                            </div>
                          <div className="p-2">
                                <NormalButton
                                    className='p-md-3'
                                    onClick={() => router.push("/user/plan")} 
                                    type="submit" 
                                    disabled={false}
                                >Start New Order</NormalButton>
                          </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <h3 className='pb-3'>Past Orders</h3>
            <div className={styles.orderTable}>
                <Table hover responsive="sm" className='table-borderless'>
                    <thead>
                        <tr>
                            <th className="col-2">Delivery Date</th>
                            <th className="col-2">Order Number</th>
                            <th className="col-1">Price</th>
                            <th className="col-2">Status</th>
                            <th className="col">Invoice</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>12/12/2026</td>
                            <td>1234567890</td>
                            <td>$17.00</td>
                            <td style={{ color: "#F27507"}}>Pickup Schedule</td>
                            <td>
                                <a href='#'>View Invoice</a>
                            </td>
                        </tr>
                        <tr>
                            <td>12/12/2026</td>
                            <td>1234567890</td>
                            <td>$19.00</td>
                            <td style={{ color: "#F27507"}}>Pickup shipped</td>
                            <td>
                                <a href='#'>View Invoice</a>
                            </td>
                        </tr>
                        <tr>
                            <td>12/12/2026</td>
                            <td>1234567890</td>
                            <td>$17.00</td>
                            <td style={{ color: "#F27507"}}>Delivery completed</td>
                            <td>
                                <a href='#'>View Invoice</a>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>

        </>
    )
}