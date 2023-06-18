import card from '../assets/card.png';
import styles, {layout} from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Lorem ipsum dolor sit amet.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum a architecto quis reiciendis porro dolorem facere ipsam maxime, sed magni! Officia sequi ex eaque excepturi magni? Voluptatum, est!</p>
      <Button  styles="mt-10"/>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] h-[100%]' />
    </div>
  </section>
)


export default CardDeal