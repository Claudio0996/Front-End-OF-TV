import styles from "./SlideItem.module.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSlide } from "../../../../shared/apiClient";
import useAuth from "../../../auth/hooks/useAuth";

export default function SlideItem({ data }) {
  const { state } = useAuth();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["slides"], exact: false });
    },
    mutationFn: deleteSlide,
  });

  return (
    <li className={styles.info_container}>
      <section className={styles.info_container_left}>
        {data.mediaType === "video" ? (
          <video src={data.mediaUrl} autoPlay loop muted className={styles.info_container_left_1} />
        ) : (
          <img className={styles.info_container_left_1} src={data.mediaUrl} />
        )}

        <div className={styles.info_container_left_2}>
          <div className={styles.left_container_title}>
            <p>{data.title}</p>
          </div>
        </div>
      </section>
      <section className={styles.info_container_right}>
        <span className={`${styles.info_container_status} ${styles[data.status]}`}>{data.status}</span>
        <button
          className={styles.info_container_right_exclude}
          onClick={() => {
            mutate({ token: state.token, id: data._id });
          }}
        >
          <DeleteOutlineOutlinedIcon />
        </button>
      </section>
    </li>
  );
}
