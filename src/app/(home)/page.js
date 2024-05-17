"use client"
import { useState } from 'react';
import styles from './styles.module.css';

export default function Home() {
  
  const [file, setFile] = useState();

  return (
    <main className={styles.fathercontainer}>
      <section className={styles.filecontainer}>
        <form className={styles.form} onSubmit={(e) => {
          e.preventDefault();
          if (!file) return 
          console.log('Archivo subido!');
        }}>
          <h1>Subida de archivo</h1>
          <input type="file" 
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <button className={styles.btn}>Subir</button>
        </form>
      </section>
    </main>
  );
}