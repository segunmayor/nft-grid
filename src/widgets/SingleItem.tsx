import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import Button from '../components/Button'

//  interface SingleItemProp extends React.MouseEventHandler<SVGElement> {
//     buttonAction: (event: any) => any
//  }

const isResSingleItemDisplayClosed = (event: any) => {

    console.log('e', event)

    const container = document.getElementsByClassName('single-item-container') as HTMLCollectionOf<HTMLElement>
    
    const overlay = document.getElementsByClassName('overlay') as HTMLCollectionOf<HTMLElement>

    const animate = [
        {translate: '0'},
        {translate: '130%'}
    ]

    const animateOption = {
        duration: 500,
        iteration: 2
    }

    container[0].animate(animate, animateOption)

    setTimeout(() => {
        container[0].style.display = 'none'
    overlay[0].style.display = 'none'
    }, 500);

}

const GetItem: any = (event: any) => {

event.preventDefault()
    console.log('me')
    window.open('https://opensea.io/', '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');

}

const SingleItem = (item: any, slug: string) => {

    console.log('item', item, slug)

    const {...prop} = item

    if( prop.item !== undefined &&  prop.slug !== undefined) {

        console.log('item item second', item, slug)

        console.log('item item me item', typeof item, typeof slug)

    return (
        <div className='nft-card single-item-wrapper'>
            <div className='grid nft-cols box-shadow-primary'>
                <div className='left-content nft-col'>
                <div className='close-popup close-popup-mobile' >
                            <AiFillCloseCircle className='icon' onClick={isResSingleItemDisplayClosed} />
                            </div>
                    <div className='left-content-wrapper'>
                        <img src={prop.item.avatar} alt={prop.item.alt} />
                    </div>
                </div>
                <div className='right-content nft-col'>
                    <div className='right-content-wrapper'>
                        <form>
                            <div className='close-popup close-popup-desktop' >
                            <AiFillCloseCircle className='icon' onClick={isResSingleItemDisplayClosed} />
                            </div>
                        <h5> {prop.item.title} </h5>
                        <p style={{color: '#f9a024'}}> price: <span style={{color: '#000'}}> {prop.item.price} </span> </p>
                        <p> <small>
                        Author: <span style={{color: '#000'}}> { prop.item.author }</span>
                            </small></p>
                            <p> <small>
                        Address: <span style={{color: '#000'}}> { prop.item.address }</span>
                            </small></p>
                            <p> <small>
                        Description: <span style={{color: '#000'}}> { prop.item.description }</span>
                            </small></p>
                        <div className='button-wrapper'>
                        <Button  className='nft-cta' type='submit' onClick={GetItem}>
                            Buy Now
                            </Button>
                        </div>
                        </form>
                    </div>
                    </div>
            </div>
        </div>
    )

    }

    return <div></div>

}

export default SingleItem
