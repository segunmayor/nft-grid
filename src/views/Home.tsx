import React, { useState } from 'react'
import Cards from '../components/Card'
import SingleItem from '../widgets/SingleItem'

// const [single_item_payload, setSingleItemPayload] = useState<any>({})

// const [single_item_slug, setSingleItemSlug] = useState<any>('')

const card_info: any = (payload: Array<object>, columns: Number) => {

    let arr: Array<Array<object>> = []

    console.log('arr', payload)

    for(let i = 0; i <= payload.length;) {

        const obj_arr: Array<object> = []

        arr.push(obj_arr)

    console.log('arr iteration 1', i, arr)

    
       
for(let j = 1; j <= columns; j++){

    if(payload.length > 0 && payload[i] !== undefined) obj_arr.push(payload[i])
    
    console.log('arr iteration 2', arr)

    i++

}
    }

console.log('arr 2', arr)
    return arr
}

const slug = (payload: string) => {
let slug: any = null
    if(payload !== null)
      slug = payload.replace(/[.*+#?\-^${}()!|[\]\\]/g, '').replace(/ /g, '_').toLowerCase()
    return slug
}

const Home: any = () => {

    const single_item_payload: Array<object> = []
let single_item_slug: Array<string> = []

      const [itemdata, setItemData] = useState<any>([])
    
        const [itemslug, setItemSlug] = useState<string>('')

    const HandleClick = (payload: any, title: string): void => {

        const item_slug: any = slug(title)
    
            setItemData((itemdata: any) => itemdata = payload)
    setItemSlug((itemslug: any) => itemslug = item_slug)

        single_item_payload.push(payload)
    single_item_slug.push(item_slug)
    
    console.log('HandleClick', single_item_payload, single_item_slug)
    
    // const singleitem = renderToStaticMarkup(<SingleItem item={payload} slug={item_slug}/>)
    
    const container = document.getElementsByClassName('single-item-container') as HTMLCollectionOf<HTMLElement>
    
    const overlay = document.getElementsByClassName('overlay') as HTMLCollectionOf<HTMLElement>
    
    overlay[0].style.display = 'block'

    const animate = [
        {translate: '100%'},
        {translate: '0'},
    ]

    const animateOption = {
        duration: 500,
        iteration: 2
    }

    container[0].animate(animate, animateOption)

    container[0].style.display = 'block'
    
    
    }

    console.log('console handleclick', single_item_payload, single_item_slug)

    const payload = [
        {
            avatar: 'https://penntoday.upenn.edu/sites/default/files/2022-01/cryptocurrency-main.jpg',
            title: 'The Association NFT #9248',
            price: '$32.42',
            author: 'Jasmine Iyke',
            id: 1,
            address: '12, Simpson Brown Avenue, USA',
            description: 'Just about this nft',
            action: (value?: any) => HandleClick(value, 'The Association NFT #9248')
        },
        {
            avatar: 'https://penntoday.upenn.edu/sites/default/files/2022-01/cryptocurrency-main.jpg',
            title: 'Football Competition NFT #00293',
            price: '$52.42',
            id: 2,
            address: '12, Simpson Brown Avenue, USA',
            description: 'Just about this nft',
            author: 'John Joe Emma',
            action: (value?: any) => HandleClick(value, 'Football Competition NFT #00293')
        },
        {
            avatar: 'https://penntoday.upenn.edu/sites/default/files/2022-01/cryptocurrency-main.jpg',
            title: 'The Nollywood NFT #2232',
            price: '$13.22',
            author: 'Ramsey Noah',
            id: 3,
            address: '12, Simpson Brown Avenue, USA',
            description: 'Just about this nft',
            action: (value?: any) => HandleClick(value, 'The Nollywood NFT #2232')
        },
        {
            avatar: 'https://penntoday.upenn.edu/sites/default/files/2022-01/cryptocurrency-main.jpg',
            title: 'UEFA Eurpa League Competition NFT #6534',
            price: '$88.34',
            author: 'Messi Ronaldo',
            id: 4,
            address: '12, Simpson Brown Avenue, USA',
            description: 'Just about this nft',
            action: (value?: any) => HandleClick(value, 'UEFA Eurpa League Competition NFT #6534')
        },
        {
            avatar: 'https://penntoday.upenn.edu/sites/default/files/2022-01/cryptocurrency-main.jpg',
            title: 'Superman NFT #9342',
            price: '$25.77',
            author: 'Jackie Chan',
            id: 5,
            address: '12, Simpson Brown Avenue, USA',
            description: 'Just about this nft',
            action: (value?: any) => HandleClick(value, 'Superman NFT #9342')
        },
        {
            avatar: 'https://penntoday.upenn.edu/sites/default/files/2022-01/cryptocurrency-main.jpg',
            title: 'Peace Treaty NFT #00293',
            price: '$98.48',
            author: 'World',
            id: 6,
            address: '12, Simpson Brown Avenue, USA',
            description: 'Just about this nft',
            action: (value?: any) => HandleClick(value, 'Peace Treaty NFT #00293')
        },
        {
            avatar: 'https://penntoday.upenn.edu/sites/default/files/2022-01/cryptocurrency-main.jpg',
            title: 'CCC NFT #00293',
            price: '$16.93',
            author: 'Oshoffa',
            id: 7,
            address: '12, Simpson Brown Avenue, USA',
            description: 'Just about this nft',
            action: (value?: any) => HandleClick(value, 'CCC NFT #00293')
        },
        {
            avatar: 'https://penntoday.upenn.edu/sites/default/files/2022-01/cryptocurrency-main.jpg',
            title: 'Bollywood Actions NFT #8864',
            price: '$25.77',
            author: 'Jackie Chan',
            id: 8,
            address: '12, Simpson Brown Avenue, USA',
            description: 'Just about this nft',
            action: (value?: any) => HandleClick(value, 'Hollywood Actions NFT #5352')
        },
    ]

    /**
     * get the length of the array
     * set the card list of items column
     * return new array
     */

const column = 4

const new_payload = card_info(payload, column)

console.log('n p', new_payload)

const _new_payload: Array<Array<object>> = []

const filter_payload = new_payload.forEach((value: any) => {
    if(value.length > 0) {
        _new_payload.push(value)
    }
})

console.log('filter payload', filter_payload, _new_payload)

//     const payload_length = new_payload.length

//     const payload_new_length = payload_length - 1

//     const payload_last_item = new_payload[payload_new_length]

//     const payload_last_item_length = payload_last_item.length

//     const column_last_index = column - 1
//     const payload_undefined_index = payload_last_item_length - column_last_index

  

//     payload_last_item.splice(payload_undefined_index)

// console.log('card info payload payload', new_payload)


    return (
        <div className='container p-0'>
            <div className='slider-section'>
               <img src='https://www.analyticsinsight.net/wp-content/uploads/2021/05/AdobeStock_288803828-1-scaled.jpeg' alt='crypto-banner' />
            </div>
            <div className='nft-container'>
                    <Cards card_info={_new_payload} card_wrapper={{style: { background: '#fff'}}}/>
            </div>
            <div className='single-item-container'>
            <SingleItem item={itemdata} slug={itemslug}/>
            </div>
        </div>
    )
}

export default Home