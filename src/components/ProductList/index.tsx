import styles from "./styles.module.scss";

import data from "../../../data.json";
import Link from "next/link";

export function ProductList() {
  return (
    <ul className={styles.list}>
      {data.products.map(product => (
        <li key={product.id}>
          <Link key={product.id} href={`/product/${product.id}`}>
          {product.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}