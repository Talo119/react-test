import { useEffect, useState } from "react"
import { useTips } from "../hooks/useTips"
import { Message } from "./Message"
import { TablePayment } from "./TablePayment"

export const TipsForm = ( {listMenu = []} ) => {
    
    const [tipState, setTipState] = useState({
        tipNumber: 0        
    }, )    

    const [totalsState, setTotals] = useState({
        subTotal: 0,
        netTotal: 0
    })
    
    const suma = listMenu.reduce( (prev, next) => prev  + (next.amount * next.cost), 0 )
    console.log('Suma: ',suma)

    listMenu.forEach(element => {
        console.log(element.cost)
    });

    const { tipNumber } = tipState
    const { subTotal, netTotal } = totalsState

    const onInputChange = ( {target} ) => {
        const { name, value } = target
        setTipState({
            ...tipState,
            [ name ]: value,
        })
    }    
        
    useEffect(() => {
        if (tipNumber < 0 || tipNumber > 100) return
        setTotals({
        ...totalsState,      
        subTotal: listMenu.reduce( (prev, next) => prev  + (next.amount * next.cost), 0 ),
        netTotal: tipNumber > 0 ? subTotal + ( subTotal * (tipNumber / 100) ) : subTotal

      })
    }, [tipNumber])
    
    
  return (
    <>
        <h3>Tip</h3>
        <input 
            type="number" 
            className="form-control mb-2"
            name="tipNumber"
            value={ tipNumber }
            onChange={ onInputChange } 
        />

        {
            tipNumber < 0 || tipNumber > 100 && <Message/>
        }
        <h4 className="mt-2">Payment</h4>
        <hr />
        <TablePayment subTotal={subTotal} netTotal={ netTotal }/>
    </>
  )
}