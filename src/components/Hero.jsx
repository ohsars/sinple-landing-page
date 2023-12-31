import styles from '../style'
import discount from '../assets/Discount.svg'
import robot from '../assets/robot.png'
import GetStarted from './GetStarted'

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} no-underline`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} className='w-[32px] h-[32px]' alt='discount'/>
        <p className={`${styles.paragraph} ml-2`}>
        <span className='text-white'> 20%</span>  Discount For 
        <span className='text-white'> 1 Month</span> Account
        </p>
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[60px] text-[48px] text-white ss:leading-[72px] leading-[60px]'>The Next <br className='sm:block hidden'/> {" "}
        <span className='text-gradient'>Generation </span> {" "}
        </h1>

        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div>
      </div>

      <h1 className='font-poppins font-semibold ss:text-[58px] text-[36px] text-white ss:leading-[80px] leading-[60px]'>Payment Method.</h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit non aliquid quod, laborum, quis deleniti porro provident unde rerum, aut consectetur assumenda! Architecto, totam quae culpa vel explicabo commodi debitis!</p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}> 
      <img src={robot} alt='billing' className='w-[100%] h-[100%] relative z-[5]' />

      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
      <div className='absolute z-[1] w-auto h-[80%] bottom-40 white__gradient rounded-full'/>
      <div className='absolute z-[0] w-[50%] h-[55%]  right-20 bottom-20 blue__gradient'/>
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
)

export default Hero