import Header from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalance from '@/components/TotalBalanceBox'

const Home = () => {
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
  }

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Header 
            type="greeting"
            title="Welcome, "
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage all your finances with ease."
          />
          <TotalBalance 
            accounts={[]}
            totalBanks={3}
            totalCurrentBalance={10000}
          />
        </header>

        Recent Transactions
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[]}
        />
    </section>
  )
}

export default Home