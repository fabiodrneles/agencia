import Header from "../components/header";
import Welcome from "../components/welcome";
import HomeStyles from "./Home.module.scss";
import WelcomeStyles from "./Welcome.module.scss";

export default function Home() {
  return (
    <div className={HomeStyles.container}>
      <Header />
      <div className={WelcomeStyles.container}>
        <Welcome />
      </div>
    </div>
  )
}
