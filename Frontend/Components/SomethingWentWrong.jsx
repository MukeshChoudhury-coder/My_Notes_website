import styles from "../Css_folder/Somethingwentwrong.module.css"
function SomethingWentWrong(){
    return(
        <>
       <div className={styles.wrong}>
        <img src="../public/something_went_wrong.png" className={styles.imgs} />
       </div>
        </>
    )
}
export default SomethingWentWrong;