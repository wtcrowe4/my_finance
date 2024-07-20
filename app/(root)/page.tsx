import Header from '@/components/ui/HeaderBox'
import TotalBalance from '@/components/ui/TotalBalanceBox'

const Home = () => {
  const loggedIn = { firstName: 'John', lastName: 'Doe' }

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
            totalBanks={1}
            totalCurrentBalance={10000}
          />
        </header>
      </div>
    </section>
  )
}

export default Home