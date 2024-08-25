import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'



const Home = () => {
  const loggedIn = {firstName : "Soumyajit"}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
          type = "greeting"
          title = "Welcome"
          user = {loggedIn?.firstName || 'Guest'}
          subtext = "Access and manage your account efficiently"
          />
          <TotalBalanceBox
          accounts = {[]}
          totalBanks = {1}
          totalCurrentBalance = {1250.35}

          />
        </header>

        RECENT TRANSACTION
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={account?.transactions}
        banks={accountsData?.slice(0, 2)}
      />
    </section>
  )
}

export default Home
