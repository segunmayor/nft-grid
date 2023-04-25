import React, {FC} from 'react'
import Button from './Button'

interface Props extends React.HTMLAttributes<any> {
    card_wrapper?: object
    card_info?: Array<object>
}

type JSXElement = JSX.Element

function items_list (items: any) {

    console.log('items map not map yet', items)

    let output: JSXElement = (<></>)

    if(items.length !== 0)
      output = (
        <div className='card-wrapper'>
            {
             items.map((item: any, index: number) => {
                // console.log('item massssp', item)
                return (
                    <div className='grid' key={`card_row_${index}`}> 
                    { item.map((value: any, _index: number) => {
                        // console.log('item map', value.price)

                        /**
                         * reduce the title lenght of each card
                         * 
                         */

                        const char_count = 25

                        const title = value.title

                        let char = null

                        if(title.length > char_count) {
                            const new_title_length = title.length - char_count

                            const new_title = title.slice(0, char_count)

                            console.log('new title length', new_title_length)

                            char = `${new_title}...`
                        }else{
                            char = title
                        }

                            return (
                                <div className='card-direct-wrapper' key={`card_col_${_index}`}>
                    <div className='nft-avatar'>
                        <img src={value.avatar} alt='nft' />
                    </div>
                    <div className='nft-details'>
                        <h6 style={{fontWeight: 'bold'}}> { char } </h6>
                        <p style={{color: '#f9a024'}}> price: <span style={{color: '#000'}}> { value.price }</span></p>
                        <p> <small>
                        Author: <span style={{color: '#000'}}> { value.author }</span>
                            </small></p>
                    </div>
                        <div className='nft-cta-container'>
                            <Button  className='nft-cta' type='button' onClick={() => value.action(value)}>
                            View Details
                            </Button>
                        </div>
                    </div>
                            )
                        }) 
                        }
                </div>
                )
            })
            }
        </div>
      )
    return output
}

const Cards: FC<Props>  = ({ card_wrapper, card_info}) =>
{

console.log('settings card info', {...card_info})
// const mainWrapper: React.HTMLAttributes<HTMLDivElement> = {
//     style: settings
// }

console.log('item list', items_list(card_info))

    return (
        <div {...card_wrapper}>
           {items_list(card_info)}
        </div>
    )
}

export default Cards
