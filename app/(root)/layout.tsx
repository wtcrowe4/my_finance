import Sidebar from '../../components/ui/Sidebar';

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
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn} />
        {children}
    </main>
  );
}