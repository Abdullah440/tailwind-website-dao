import Link from 'next/link';
import Logo from '/public/panaverse-logo.png'
import Image from 'next/image';
import Wrapper from '@/components/shared/wrapper';

const header = () => {
  return (
    <Wrapper>
    <header className="flex justify-between bg-white py-4 sticky top-0 items-center">
        {/* Logo */}
        {/* Logo */}
        <div>
            <Image src={Logo} alt='Panaverse DAO Logo'></Image>
        </div>

        {/* Navigation Bar */}

        <ul className="flex space-x-10 font-semibold">
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/courses'}>Courses</Link>
            </li>
        </ul>
    </header>
    </Wrapper>
  )
}

export default header