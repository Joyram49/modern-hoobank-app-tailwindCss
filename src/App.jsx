import {
  Navbar,
  Hero,
  Business,
  Billing,
  Stats,
  Testimonials,
  Clients,
  CTA,
  CardDeal,
  Footer,
} from "./conponents";

function App() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className='flex justify-center items-center px-6 sm:px-16'>
        <div className='xl:max-w-[1280px]  w-full'>
          <Navbar />
        </div>
      </div>

      <div>
        <div className='flex justify-center items-center px-6 sm:px-16'>
          <div className='xl:max-w-[1280px] w-full'>
            <Hero />
          </div>
        </div>
      </div>

      <div>
        <div className='flex justify-center items-center px-6 sm:px-16'>
          <div className='xl:max-w-[1280px] w-full'>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
