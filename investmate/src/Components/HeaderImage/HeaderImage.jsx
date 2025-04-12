import image from '../../assets/headerImage.jpg'

function HeaderImage() {
  return (
    <div className="w-full min-h-[342px] bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }}>
    </div>
  )
}

export default HeaderImage