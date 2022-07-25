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
          <a className='version'><li>{`Version: 0.0.2`}</li></a>
          <a className='author'><li>{`Steve`}</li></a>
        </ul>
      </div>
    </div>
  )
}

export default Footer;