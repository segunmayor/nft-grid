export default (
    setTimeout(() => {
        const bodyHeight = document.querySelector('body')?.offsetHeight

   const overlay = document.getElementsByClassName('overlay') as HTMLCollectionOf<HTMLElement>

   console.log('over',overlay)
   
   overlay[0].style.height = bodyHeight + 'px'

    }, 2000)
)