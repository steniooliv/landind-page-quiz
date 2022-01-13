import Link from 'next/link';
import { useState } from 'react';

import { IProduct } from '../../@types';

import styles from './styles.module.scss';

export function ProductPage(product: IProduct) {

  const totalQuestions = product.questions.length;
  const [question, setQuestion] = useState(0);
  const [loading, setLoading] = useState(false);

  function nextQuestion() {
    if (question < totalQuestions) {
      setQuestion(question + 1);
    }
    if (question == totalQuestions - 1) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }

  function onClick() {
    window.open(product.link, "_blank");
  }

  return (
    <main className={styles.main}>
      <div className={styles.product}>
        <div className={styles['product-image']}>
          <img src={product.image} alt={product.name} />
        </div>
        <div className={styles['product-info']}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      </div>
      <div className={styles.quiz}>
        {loading == true
          ?
          <div className={styles.progress}>
            <div className={styles.color}></div>
          </div>
          : null
        }
        {question != totalQuestions
          ?
          <div className={styles.question}>
            <p>{product.questions[question].question}</p>
          </div>
          : null
        }
        {question != totalQuestions
          ?
          <div className={styles.aswer}>
            <button className={styles.button} onClick={nextQuestion}>
              {product.questions[question].answers[0].answer}
            </button>
            <button className={styles.button} onClick={nextQuestion}>
              {product.questions[question].answers[1].answer}
            </button>
          </div>
          : null
        }
        {!loading && (question == totalQuestions)
          ?
          <div className={styles.success}>
            <h2>
              {product.success.title}
            </h2>
            <p>
              {product.success.description}
            </p>
              <button onClick={onClick} className={styles.button}>
                EU CONCORDO!
              </button>
          </div>
          : null
        }
      </div>
    </main>
  );
}