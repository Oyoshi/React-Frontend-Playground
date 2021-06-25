import styles from "./LandingPage.module.scss";

export const LandingPage = () => {
  return (
    <div className={styles["App"]}>
      <header>
        <nav>
          <ul>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
          </ul>
        </nav>
        <div className={styles["App-header"]}>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className={styles["App-link"]}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Learn React
          </a>
          <button>Day / Night</button>
          <button>Lets talk -&gt;</button>
        </div>
      </header>
    </div>
  );
};
