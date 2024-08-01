import { Link } from 'wouter';
import './LinkTo.scss'

interface LinkToProps {
  path: string,
  text: string
}

function LinkTo({path, text}: LinkToProps) {
  return (
    <>
      <div className='link-container'>
        <Link href={path} className="link">{text}</Link>
      </div>
    </>
  )
}

export default LinkTo