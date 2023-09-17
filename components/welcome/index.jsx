import Image from "next/image";
import WelcomeStyles from "../../pages/Welcome.module.scss";
import Leads from "/public/images/leads.svg";

const Welcome = () => {
    return (
        <div className={WelcomeStyles.container}>
            <div className={WelcomeStyles.colunaEsquerda}>
                <h1>Melhor agência de marketing do bairro</h1>
                <p>Somos uma agência de performance digital, aceleramos vendas e aquisição de leads para grandes marcas.</p>
                <button className={WelcomeStyles.button}>
                    <p>Aumentar vendas</p>
                </button>
            </div>
            <div className={WelcomeStyles.colunaDireita}>
                <div className={WelcomeStyles.Leads}>
                    <Image src={Leads}/>
            </div>
            </div>
        </div>
    );
}

export default Welcome;