import './featured.css';

const Featured = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <img src='https://cf.bstatic.com/xdata/images/city/square250/664109.webp?k=a8175b074619f9dd16218eac4068dc403c1c1ff2918aaf6590f98fd4d5c9322a&o=' className='itemImg' alt='featured'/>
            <div className='featuredTitles'>
                <h1>El calafate</h1>
                <h2>252 properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img src='https://cf.bstatic.com/xdata/images/city/square250/664052.webp?k=e0c8a97ea4cd0ab7e3757392c8fb02708767377e288a6c3e0889d22497e8e8f1&o=' className='itemImg' alt='featured'/>
            <div className='featuredTitles'>
                <h1>Buenos Aires</h1>
                <h2>2.352 properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img src='https://cf.bstatic.com/xdata/images/city/square250/664442.webp?k=b3b40288facb1bf74fa0124e88d99fa474360b7ad0372fa1101ef16cdc3276e7&o=' className='itemImg' alt='featured'/>
            <div className='featuredTitles'>
                <h1>San Martín de los Andes</h1>
                <h2>552 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured