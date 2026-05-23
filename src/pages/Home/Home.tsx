import Header from '../../components/Header/Header'
import CategoryCards from '../../components/CategoryCards/CategoryCards'
import PregnancyCard from '../../components/PregnancyCard/PregnancyCard'
import QuickTools from '../../components/QuickTools/QuickTools'
import TodayTip from '../../components/TodayTip/TodayTip'
import DoctorCard from '../../components/DoctorCard/DoctorCard'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <Header name="Selam" weeks={24} />
      <CategoryCards />
      <PregnancyCard
        weeks={24}
        days={3}
        dueDate="July 20, 2025"
        trimester={2}
        progress={60}
        babySize="21.5 cm"
        babyWeight="650 g"
        fruitComparison="Mango"
      />
      <QuickTools />
      <TodayTip tip="Drink plenty of water and get enough rest. Your baby loves you!" />
      <DoctorCard />
    </div>
  )
}
