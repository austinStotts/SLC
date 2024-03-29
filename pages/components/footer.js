import { useRouter } from 'next/router';

const Footer = (props) => {
  const router = useRouter();
  const route = (string) => {
    router.push(`${string}`);
  }


  return (
    <div className="footer">
      <div className="inner-footer">
        <ul className='footer-list'>
          <a className='version'><li>{`Version: 0.4.2`}</li></a>
          <a className='author' href='http://austinstotts.com/'><li>{`steve`}</li></a>
          <a className='resources-a' href='https://stevelovescartoons.com/resources/$'><li>resources</li></a>
        </ul>
      </div>
    </div>
  )
}

export default Footer;