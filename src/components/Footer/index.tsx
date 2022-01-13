import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IProduct, ProductProps } from '../../@types';

import styles from './styles.module.scss';

export function Footer() {

  const [host, setHost] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const host = window.location.host;
    const query = window.location.search;
    setHost(host);
    setQuery(query);
  }, []);

  return (
    <footer>
      <p className={styles["facebook-terms"]}>
        Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos nenhum tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco em horário comercial de Segunda a Sextas das 09h00 ás 18h00. Lemos e respondemos todas as mensagens por ordem de chegada. Facebook e Meta são marcas registradas de Meta Platforms, Inc.
      </p>

      <p className={styles['use-terms']}>
        <Link href={"/terms"}>
          Termos de uso
        </Link>
        <span> | </span>
        <Link href={"/policy"}>
        Políticas de Privacidade
        </Link>
      </p>

      <p className={styles.copyright}>
        © Copyright 2022 – Todos os direitos reservados - Developed by <a href="https://www.steniooliv.com">steniooliv</a>
      </p>
    </footer>
  );
}