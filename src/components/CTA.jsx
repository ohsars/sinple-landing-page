import styles from "../style";
import Button from "./Button";

const CTA = () =>  (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flax flex-col">
      <h2 className={styles.heading2}>Lorem ipsum dolor sit amet.</h2>
      <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorum explicabo voluptas accusamus, ratione porro.</p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
    
  </section>
)


export default CTA