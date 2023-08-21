import CourseCard from './CourseCard.js';
import './App.css'
import { useEffect } from 'react';

function App() {

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
     document.body.appendChild(script);
   });
};

useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
});
  return (
    <section className="card-list">
      <CourseCard
        courseName="Complete React Native Mobile App developer - Build 10 apps"
        courseThumbnail="https://asset-cdn.learnyst.com/assets/schools/2410/courses/82228/rn20_fg9wxu.png"
        courseDetails="2 Free + 92 Paid"
        coursePrice="2,999"
        courseDiscountedPrice="199"
        courseDiscount="93"
      />
    </section>
  );
}

export default App;
