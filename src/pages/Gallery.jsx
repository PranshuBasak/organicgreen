
import Card from '../components/Card';
import  { data } from '../assets/organic'

const Gallery = () => {
  const dataImg = data;
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2  gap-6 bg-[#e7e7e3]  py-20 px-10'>
        {dataImg.map((data, index) =>{
          return (
            <Card 
              imgSrc={data.imgSrc}
              title={data.title}
              key={index}
            />
            
          )
        })}
        
    </div>
  )
}

export default Gallery