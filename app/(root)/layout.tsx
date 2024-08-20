import Sidebar from '../../components/Sidebar';
import MobileNav from '../../components/MobileNav';
import Image from 'next/image';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn: User = {
    $id: '123',
    email: 'john.doe@example.com',
    userId: '456',
    dwollaCustomerUrl: 'https://example.com',
    firstName: 'John',
    lastName: 'Doe',
    dwollaCustomerId: '',
    address1: '',
    city: '',
    state: '',
    postalCode: '',
    dateOfBirth: '',
    ssn: ''
  };

  return (
    <main className="flex h-screen w-full font-inter bg-slate-100">
        <Sidebar user={loggedIn} />
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src='/icons/logo.svg' width={50} height={50} alt='My Finance Logo' />
            <div>
              <MobileNav user={loggedIn} />
            </div>
          </div>
          {children}
        </div>
    </main>
  );
}