import { Link } from 'wouter';

interface LinkToProps {
  path: string,
  text: string
}

function LinkTo({path, text}: LinkToProps) {
  <>
    <Link href={path} className="link">{text}</Link>
  </>
}

export default LinkTo