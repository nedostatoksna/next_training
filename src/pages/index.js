import NavBoard from "@/components/NavBoard";
import Head from "next/head";
import style from "@/styles/HomePage.module.css";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>homepage</title>
      </Head>
      <div className={style.home_wrapper}>
        <h3 className={style.header}>Это Next App приложениe, использующее jsonplaceholder данные</h3>
        <h4 className={style.subheader}>Вы можете перемещаться по ней подставляя в url следующие адреса:</h4>
      </div>
        <NavBoard />
    </div>
  )
}



