import style from "./page.module.scss"
import PageOne from "./ui/page1/page1.jsx";
import PageTwo from "./ui/page2/page2";
const page = () => {

  return (
    <div className={style.container} >
      <PageOne />
      <PageTwo />
    </div>
  )
}

export default page;