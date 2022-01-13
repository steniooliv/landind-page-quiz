import styles from "./styles.module.scss";

import data from "../../../data.json";

export function ProductList() {
  return (
    <ul>
      {data.products.map(e => {
        <li>
          {e}
        </li>
      })}
    </ul>
  );
}