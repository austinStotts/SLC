export default function Banner (props) {
  return (
    <div className='sp-banner sp-banner-img' style={{backgroundImage: "url("+ props.url + ")"}}></div>
  )
}