import style from "./page1.module.scss"

const PageOne = () => {
    return (
        <div className={style.container} >
            <video autoPlay loop muted src="/pageOne.mp4" className={style.videom} ></video>
            <div className={style.pageContent}>
                <nav>
                    <h3>The Venture Agency.</h3>
                    <h3>Menu</h3>
                </nav>
                <div className={style.hh}>
                    <h1>
                        <span>r</span>
                        <span>e</span>
                        <span className={style.j} >J</span>
                        <span>o</span>
                        <span>u</span>
                        <span className={style.i}  >I</span>
                        <span>c</span>
                        <span>e</span>
                    </h1>
                </div>
            </div>
        </div>
    )
}
export default PageOne;