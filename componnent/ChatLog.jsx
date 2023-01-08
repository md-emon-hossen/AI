import styles from "../styles/ChatLog.module.css";

export default function ChatLog({avatar,messege,uqnic}) {
  return (
    <div key={uqnic} className={styles.chatlogWrp}>
        <div className={`${styles.avatar} ${avatar === "me" ? styles.meAvatar : null}`}>{avatar}</div>
        <div className={`${styles.messege} ${avatar === "me" ? styles.meMessege : null}`}>{messege}</div>
    </div>
  )
}
