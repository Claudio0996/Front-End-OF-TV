import styles from "./FilterSearch.module.css";

export default function FilterSearch({ filter, onFiltered }) {
  return (
    <div className={styles.search_container}>
      <input type="text" placeholder="Buscar por título..." className={styles.search_input}></input>
      <select
        className={styles.search_select}
        value={filter}
        onChange={(e) => {
          onFiltered(e.target.value);
        }}
      >
        <option value="all">Todos</option>
        <option value="active">Ativos</option>
        <option value="scheduled">Agendados</option>
        <option value="expired">Expirados</option>
      </select>
    </div>
  );
}
