"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import { extensionValidator } from "../../../utils/validator.js";

export default function Home() {
  const [file, setFile] = useState();

  return (
    <main className={styles.fathercontainer}>
      <section className={styles.filecontainer}>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            if (!file) return;
            let validation = extensionValidator(file.name);
            console.log(validation);
          }}
        >
          <i className={styles.ggfileadd}></i>
          <h1>Subida de archivo</h1>
          <input id="uploadFile" className={styles.inputFile}
            type="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <button className={styles.uploadFile}>Cargar Archivo</button>
          <button className={styles.btn}>Subir</button>
        </form>
      </section>
    </main>
  );
}
