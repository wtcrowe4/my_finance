import Header from '@/components/HeaderBox'
import RecentTransactions from '@/components/RecentTransactions'
import RightSidebar from '@/components/RightSidebar'
import TotalBalance from '@/components/TotalBalanceBox'
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  // const loggedIn: User = { 
  //   $id: '123',
  //   email: 'john.doe@example.com',
  //   userId: '456',
  //   dwollaCustomerUrl: 'https://example.com',
  //   firstName: 'John',
  //   lastName: 'Doe',
  //   dwollaCustomerId: '',
  //   address1: '',
  //   city: '',
  //   state: '',
  //   postalCode: '',
  //   dateOfBirth: '',
  //   ssn: ''
  // }
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ 
    userId: loggedIn.$id 
  })
  const currentPage = Number(page as string) || 1;
  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
  const account = await getAccount({ appwriteItemId })

  if(!accounts) return;


  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          
          <Header 
            type="greeting"
            title="Welcome, "
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage all your finances with ease." />
          
          <TotalBalance 
            accounts={[]}
            totalBanks={3}
            totalCurrentBalance={10000} />
        
        </header>

        <RecentTransactions 
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage} />
      
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[]} />
    
    </section>
  )
}

export default Home